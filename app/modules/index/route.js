import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({

	model() {
		// let author = this.store.findAll('author');
		let author = $.getJSON('/api/authors');


		// return RSVP.hash({
		// 	authors: $.getJSON('/api/authors'),
		// 	other:
		// });
		// let promise = new Promise();

		// promise.then((data) => {

		// });

		author.then(data => {
			console.log(data);
		});

		return author;
		// console.log(author.id);
		// console.log(author.isNew());
	}
});
