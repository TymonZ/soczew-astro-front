const API = {
	events: [
		{
			id: Number,
			name: String,
			date: Date, 
			type: String,       // example: "club event"
			tax: String,        // example: "30/40pln"
			location: {
				name: String,
				url: URL,       // google maps link etc
			},
			links: {
				fb: URL,        // facebook
				ra: URL,        // Resident Advisor
			},
			poster: {
				url: URL,       // 'https://example.server/path/id.jpg'
				author: {
					name: String,
					url: URL,   // external url (for example instagram profile)
				}
			},
			description: URL,   // 'https://example.server/path/id.md'
		},
	]
}