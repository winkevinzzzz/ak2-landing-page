// export type DrawTier = {
// 	threshold: string;
// 	qty: string;
// };

// export const drawTiers: DrawTier[] = [
// 	{ threshold: '១០០០', qty: 'x10' },
// 	{ threshold: '៣០០០', qty: 'x38' },
// 	{ threshold: '៥០០០', qty: 'x20' },
// 	{ threshold: '៧៥០០', qty: 'x100' },
// 	{ threshold: '១០០០០', qty: 'Permanent' }
// ];

export type DrawTier = {
	hideImage: string;
	showImage: string;
	participants: number;
};

export const drawTiers: DrawTier[] = [
	{ hideImage: 'Item-hide-1.webp', showImage: 'Item-show-1.webp', participants: 1000 },
	{ hideImage: 'Item-hide-2.webp', showImage: 'Item-show-2.webp', participants: 3000 },
	{ hideImage: 'Item-hide-3.webp', showImage: 'Item-show-3.webp', participants: 5000 },
	{ hideImage: 'Item-hide-4.webp', showImage: 'Item-show-4.webp', participants: 7500 },
	{ hideImage: 'Item-hide-5.webp', showImage: 'Item-show-5.webp', participants: 10000 }
];

export type PackageItem = {
	label: string;
	img: string;
	days: string;
	/** true = uses frame-blue-sm and spans 2 rows (the couple M&F item) */
	large?: boolean;
};

// Row 1: AR, Melee, [M&F couple – large/rowspan], Lucky Coin
// Row 2: Back, Pistol,  [continues],              Honor Scroll
export const packageItemsRow1: PackageItem[] = [
	{ label: 'AR',    img: '/img/item-ar.webp',          days: '30 Days' },
	{ label: 'Melee', img: '/img/item-melee.webp',       days: '30 Days' },
	{ label: 'Lucky Coin', img: '/img/item-lucky-coin.webp', days: 'x100' },
];

export const packageItemsRow2: PackageItem[] = [
	{ label: 'Back',   img: '/img/item-mf.webp',        days: '30 Days' },
	{ label: 'Pistol', img: '/img/item-pistol.webp',    days: '30 Days' },
	{ label: 'Honor Scroll', img: '/img/item-honor-scroll.webp', days: 'x66' },
];

// The large M&F couple item that spans 2 rows
export const mfItem: PackageItem = {
	label: 'M&F', img: '/img/item-mf.webp', days: '60 Days', large: true
};
