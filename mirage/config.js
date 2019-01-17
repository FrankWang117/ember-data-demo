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
			'data': {
				'type': 'phone',
				'id': 1,
				'attributes': {
					'brand': 'Nokia',
					'capacity': 64,
					'size': {
						'width': 70.9,
						'height': 143.6,
						'depth': 7.7,
						'weight': 177
					},
					'display': 5.8
				}
			}
		};
	});

	this.post('/articles');

	this.get('/posts', () => {
		return {
			'data': [{
				'type': 'post',
				'id': 'idPost1',
				'attributes': {
					'title': 'post1',
					'content': 'post content'
				},
				'relationships': {
					'comments': {
						'data': [
							{
								'id': 1,
								'type': 'comment'
							},
							{
								'id': 2,
								'type': 'comment'
							}
						]
					}
				}
			}],
			'included': [{
				'type': 'comment',
				'id': 1,
				'attributes': {
					'commentator': 'Jeff',
					'content': 'Good Very Good',
					'time': new Date('2018-11-01').getTime(),
					'isLike': true,
					'reply': 115
				}
			}, {
				'type': 'comment',
				'id': 2,
				'attributes': {
					'commentator': 'Tom',
					'content': 'NOt GOOD ENOUGH',
					'time': new Date('2018-11-08').getTime(),
					'isLike': false,
					'reply': 555
				}
			}
			]
		};
	});

	this.get('/campuses', () => {
		return {
			'data': [{
				'type': 'campus',
				'id': 1,
				'attributes': {
					'name': 'HNUST',
					'rank': 233
				}
			},
			{
				'type': 'campus',
				'id': 2,
				'attributes': {
					'name': 'HNU',
					'rank': 56
				}
			}]
		};
	});
}
