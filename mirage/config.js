export default function () {

	// this.namespace = 'api';

	this.get('/authors', (schema) => {
		return schema.authors.all();
	});

	this.get('/people', () => {
		return {
			'data': [{
				'type': 'person',
				'id': '1143111',
				'attributes': {
					'FirstName': 'Jeff',
					'LastName': 'Atwood',
					'ThePersonSelfHeight': 175,
					'Birthday': new Date('2018-11-11 ').getTime()
					// 'firstName': 'Jeff',
					// 'lastName': 'Atwood',
					// 'thePersonSelfHeight': 175,
					// 'birthday': new Date('2018-11-11 11:11:11').getTime()
				}
			}, {
				'type': 'person',
				'id': '111112',
				'attributes': {
					'FirstName': 'Yehuda',
					'LastName': 'Katz',
					'ThePersonSelfHeight': 168,
					'Birthday': new Date('2011-11-11 ').getTime()
					// 'firstName': 'Yehuda',
					// 'lastName': 'Katz',
					// 'thePersonSelfHeight': 168,
					// 'birthday': new Date('2011-11-11 11:11:11').getTime()
				}
			}]
		};
	});
	this.get('/phones', () => {
		return {
			data: {
				type: 'phone',
				id: 1,
				attributes: {
					brand: 'Nokia',
					capacity: 64,
					size: {
						width: 70.9,
						height: 143.6,
						depth: 7.7,
						weight: 177
					},
					display: 5.8
				}
			}
		};
	});

	this.post('/articles');
}
