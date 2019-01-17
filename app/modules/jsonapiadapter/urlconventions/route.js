import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
	model() {
		let model = EmberObject.create({});

		return this.get('store').findAll('post')
			.then(data => {
				model.set('post', data);
				return this.get('store').findAll('campus');
			}).then(data => {
				model.set('campus', data);
				return model;
			});
	}
});
