import DS from 'ember-data';
import { computed } from '@ember/object';
import { underscore } from '@ember/string';

export default DS.JSONAPIAdapter.extend({
	// defaultSerializer: 'person',
	headers: computed(function () {
		return {
			'dataType': 'json',
			'contentType': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `bearer selfToken`
		};
	}),
	patyForType(type) {
		console.log(type);
		return underscore(type);
	}
});
