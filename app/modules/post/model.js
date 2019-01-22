import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	author: DS.belongsTo(),
	writedTime: DS.attr('date'),
	isOriginal: DS.attr('boolean'),
	like: DS.attr('number'),
	url: DS.attr('string'),
	summary: DS.attr('string'),
	article: DS.attr('string'),
	comments: DS.hasMany('comment')
});
