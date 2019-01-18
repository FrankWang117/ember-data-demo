import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
	// model() {
	// 	return this.get('store').findRecord('post', 'idPost1').then(data => {
	// 		return data;
	// 	});
	// }
	model() {
		let model = EmberObject.create({});

		return this.get('store').findAll('post')
			.then(data => {
				model.set('post', data);
				return this.get('store').findAll('campus');
			}).then(data => {
				model.set('campus', data);
				return this.get('store').findAll('bjCompany');
			}).then(data => {
				model.set('company', data);
				return model;
			});
	},
	actions: {
		addRecord() {
			let len = 0;

			this.get('store').findAll('bjCompany')
				.then(data => {
					len = data.get('length');
					this.get('store').createRecord('bjCompany', {
						id: len + 1,
						name: 'sina',
						location: '五十六',
						employee: Math.ceil(Math.random() * 13)
					});
				});
		},
		updateRecord(id) {
			console.log(id);
			this.get('store').findRecord('bjCompany', id)
				.then(data => {
					data.set('name', 'AliBaBa');
					data.incrementProperty('employee');
				});
		},
		deleteRecord() {

		}
	}
});
