import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.get('store').findAll('post', { include: 'comments' })
			.then(data => {
				return data.map((item, index) => {

					return item;
				});
			});
	}
});
