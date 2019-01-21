import DS from 'ember-data';

export default DS.Model.extend({
	brand: DS.attr('string'),
	phoneModels: DS.hasMany('phoneModel'),
	company: DS.belongsTo('company')
});
