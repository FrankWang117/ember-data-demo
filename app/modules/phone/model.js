import DS from 'ember-data';

export default DS.Model.extend({
	brand: DS.attr('string'),
	capacity: DS.attr('number'),
	depth: DS.attr('number'),
	display: DS.attr('number')
});
