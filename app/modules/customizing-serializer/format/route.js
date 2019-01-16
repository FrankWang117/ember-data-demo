import Route from '@ember/routing/route';
import EmberObject, { set } from '@ember/object';


export default Route.extend({
	model() {
		let model = EmberObject.create(),
			articles = this.get('store').createRecord('article', {
				id: new Date().getTime(),
				title: 'how to use serialize',
				body: 'let try'
			});

		articles.save();
		return this.get('store').findAll('phone')
			.then(data => {
				// let phone = data.get('firstObject').toJSON({
				// 	includeId: true
				// });

				model.set('phoneFA', data);
				return this.get('store').queryRecord('phone', {});
			})
			.then(data => {
				// let phone = data.toJSON({
				// 	includeId: true
				// });

				set(model, 'phoneQR', data);
				return model;
			});


	}
});
