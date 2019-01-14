export default function () {
	// These comments are here to help you get started. Feel free to delete them.

	/*
		  Config (with defaults).

		  Note: these only affect routes defined *after* them!
		*/

	// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
	// this.namespace = '';    // make this `/api`, for example, if your API is namespaced
	// this.timing = 400;      // delay for each request, automatically set to 0 during testing

	/*
		  Shorthand cheatsheet:

		  this.get('/posts');
		  this.post('/posts');
		  this.get('/posts/:id');
		  this.put('/posts/:id'); // or this.patch
		  this.del('/posts/:id');

		  http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
		*/
	this.namespace = 'api';

	this.get('/authors', (schema) => {
		return schema.authors.all();
	});

	this.get('/people', () => {
		return {
			'data': [{
				'type': 'people',
				'pKey': '1143111',
				'attributes': {
					'FirstName': 'Jeff',
					'LastName': 'Atwood',
					'ThePersonSelfHeight': 175,
					'Birthday': new Date().getTime()
				}
			}, {
				'type': 'people',
				'pKey': '111112',
				'attributes': {
					'FirstName': 'Yehuda',
					'LastName': 'Katz',
					'ThePersonSelfHeight': 168,
					'Birthday': new Date('2011-11-11 11:11:11').getTime()
				}
			}]
		};
	});
}
