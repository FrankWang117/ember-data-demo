import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.get('store').findAll('bjCompany');
	},
	actions: {
		addRecord() {
			let len = 0;

			this.get('store').findAll('bjCompany')
				.then(data => {
					len = data.get('length');
					this.get('store').createRecord('bjCompany', {
						name: 'sina',
						location: '五十六',
						employee: Math.ceil(Math.random() * 13)
					});
				});
		}
	}
});
