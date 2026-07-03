import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import type { PageServerLoad } from './$types';

const REGISTRATION_COUNT_QUERY = `
	query Tour_registrationCount($tournamentId: ID!) {
		tour_registrationCount(tournament_id: $tournamentId) {
			total
			tournament_id
		}
	}
`;

export const load: PageServerLoad = async ({ fetch }) => {
	let participants = 0;

	try {
		const res = await fetch(env.GRAPHQL_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'service-code': 'mysabay_user'
			},
			body: JSON.stringify({
				query: REGISTRATION_COUNT_QUERY,
				variables: { tournamentId: publicEnv.PUBLIC_TOURNAMENT_ID }
			})
		});
		const json = await res.json();
		participants = json?.data?.tour_registrationCount?.total ?? 0;
	} catch (err) {
		// The landing page must still render if the gateway is unreachable.
		console.error('Failed to fetch tournament registration count:', err);
	}

	return { participants };
};
