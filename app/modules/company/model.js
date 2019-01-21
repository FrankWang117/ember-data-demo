import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	foundingTime: DS.attr('date'),
	employee: DS.attr('number'),
	phones: DS.hasMany('phone'),
	isLocation: DS.attr('boolean'),
	logo: DS.attr('string')
});
