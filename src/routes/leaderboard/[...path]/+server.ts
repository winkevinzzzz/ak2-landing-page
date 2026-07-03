import { env } from '$env/dynamic/public';
import type { RequestHandler } from './$types';

/**
 * Same-origin proxy for the tournament leaderboard.
 *
 * The leaderboard page is served cross-origin, which blocks the iframe from
 * being measured (dynamic height). Its internal links are absolute
 * ("/leaderboard/<id>?page=N"), so mirroring the same path here keeps
 * pagination, search, and the 30s meta-refresh working unchanged.
 */

// Injected into the proxied page: the leaderboard hardcodes a dark body
// background (#0f1117); making it transparent lets the site's own
// background show through the iframe.
const STYLE_OVERRIDES = '<style>body{background:transparent !important;}</style>';

export const GET: RequestHandler = async ({ params, url, fetch }) => {
	const upstream = `${env.PUBLIC_TOURNAMENT_LEADERBOARD_URL}/${params.path}${url.search}`;

	try {
		const res = await fetch(upstream);
		let body = await res.text();
		if ((res.headers.get('content-type') ?? '').includes('text/html')) {
			body = body.replace('</head>', `${STYLE_OVERRIDES}</head>`);
		}
		return new Response(body, {
			status: res.status,
			headers: {
				'content-type': res.headers.get('content-type') ?? 'text/html; charset=utf-8',
				'cache-control': 'no-store'
			}
		});
	} catch (err) {
		console.error('Leaderboard proxy failed:', err);
		return new Response('<!doctype html><html><body style="background:transparent"></body></html>', {
			status: 502,
			headers: { 'content-type': 'text/html; charset=utf-8' }
		});
	}
};
