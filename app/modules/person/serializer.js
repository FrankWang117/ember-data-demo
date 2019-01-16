import DS from 'ember-data';
import { camelize, capitalize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
	attrs: {
		height: 'ThePersonSelfHeight'
	},
	keyForAttribute(key) {
		let newKey = camelize(key);

		return capitalize(newKey);
	},
	modelNameFromPayloadKey(key) {

		return key;
	}
});
