import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.get('store').findRecord('comment', 2, { preload: { post: 1 } });
	}
});
