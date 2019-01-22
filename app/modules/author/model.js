import DS from 'ember-data';

export default DS.Model.extend({
	// firstName: DS.attr('string'),
	// lastName: DS.attr('string'),
	// age: DS.attr('number'),
	// admin: DS.attr('boolean'),
	// avatar: DS.attr('string')
	nickName: DS.attr('string'),
	age: DS.attr('number'),
	tag: DS.attr('string'),
	avatar: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('string'),
	writePost: DS.attr('number'),
	posts: DS.hasMany('post')
});
