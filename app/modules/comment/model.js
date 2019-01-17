import DS from 'ember-data';

export default DS.Model.extend({
	commentator: DS.attr('string'),
	content: DS.attr('string'),
	time: DS.attr('date'),
	isLike: DS.attr('boolean'),
	reply: DS.attr('number'),
	post: DS.belongsTo('post')
});
