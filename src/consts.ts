// Place any global data in this file.

import { number } from "astro/zod"

// You can import this data from anywhere in your site by using the `import` keyword.
export const WEBSITE_TITLE = 's0czew'
export const EVENTS = [
	{
	    id: 0,
	    name: 'Rytuał Inicjacja',
	    date: '09-11.09.22',
	    place: 'Bąk',
  		type: 'festival',
  		tax: '20pln',
	    links: {fb: ''},
		poster: {
			// url: 'https://example.server/api/poster-id.jpg',
			author: {
				name: 'Jędrzej Hoszard',
				url: 'https://www.instagram.com/gohoeshy/'
			}
		},
		// description: 'https://example.server/api/description-id.md'
	},
	{
	    id: 1,
	    name: 'CLAY:KLEJ',
	    date: '22.10.22',
	    place: 'Ziemia',
  		type: 'club event',
  		tax: '20pln',
	    links: {fb: 'https://www.facebook.com/events/468289531919415/'},
		poster: {
			// url: 'https://example.server/api/poster-id.jpg',
			author: {
				name: 'Zosia Pawlińska',
				url: 'https://www.instagram.com/zosiasophia/'
			}
		},
		// description: 'https://example.server/api/description-id.md'
	},
	{
	    id: 2,
	    name: 'One Night',
	    date: '03.12.22',
	    place: 'Fyrtel',
  		type: 'club event',
  		tax: 'free',
	    links: {fb: 'https://www.facebook.com/events/877579853245370'},
		poster: {
			// url: 'https://example.server/api/poster-id.jpg',
			author: {
				name: 'Kacper Ignaczak',
				url: 'https://www.instagram.com/kacpero0/'
			}
		},
		// description: 'https://example.server/api/description-id.md'
	},
	{
		id: 3,
		name: 'Bo To Noise',
		date: '13.12.22',
		place: 'Teatr BOTO',
  		type: 'concert + workshop',
  		tax: 'free/15/40pln',
		links: {fb: 'https://www.facebook.com/events/846964979776453/'},
		poster: {
			// url: 'https://example.server/api/poster-id.jpg',
			author: {
				name: 'Kasia Miotke',
				url: 'https://www.instagram.com/08.00.80/'
			}
		},
		// description: 'https://example.server/api/description-id.md'
	},
	{
		id: 4,
		name: 'Lecznica Serc',
		date: '18.02.23',
		place: 'Goyki 3',
  		type: 'tatoo convention',
  		tax: 'free',
		links: {fb: 'https://www.facebook.com/events/571131681708421/'},
		poster: {
			// url: 'https://example.server/api/poster-id.jpg',
			author: {
				name: 'Antonina Kowalczuk',
				url: 'https://www.instagram.com/tosiakowalczuk/'
			}
		},
		// description: 'https://example.server/api/description-id.md'
	},
	{
		id: 5,
		name: 'MATKI POLKI PRZECIWKO MUZYCE TECHNO',
		date: '25.05.23',
		place: 'Czudner SPOT',
  		type: 'club event',
  		tax: '25/35pln',
		links: {fb: 'https://www.facebook.com/events/618064937029667/'},
		poster: {
			// url: 'https://example.server/api/poster-id.jpg',
			author: {
				name: 'Kasia Miotke',
				url: 'https://www.instagram.com/08.00.80/'
			}
		},
		// description: 'https://example.server/api/description-id.md'
	},
	{
		id: 6,
		name: 'Magazyn Market',
		date: '24.09.23',
		place: 'Grunwaldzka 303b',
  		type: 'fair',
  		tax: 'free',
		links: {fb: 'https://www.facebook.com/events/661905509382539/'},
		poster: {
			// url: 'https://example.server/api/poster-id.jpg',
			author: {
				name: 'Kasia Miotke',
				url: 'https://www.instagram.com/08.00.80/'
			}
		},
		// description: 'https://example.server/api/description-id.md'
	},
]