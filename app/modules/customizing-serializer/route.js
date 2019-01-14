import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
	model() {
		return this.get('store').findAll('people');
		// let model = EmberObject.create({}),
		// 	people = [];

		// this.get('store').findAll('person').then(data => {
		// 	console.log(data);
		// 	people = data;
		// 	model.set('people', people);
		// 	console.log(people.content);
		// });


	}
});
