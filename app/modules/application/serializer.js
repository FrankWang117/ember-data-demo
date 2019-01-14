import DS from 'ember-data';
import { camelize, capitalize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
	// modelNameFromPayloadKey(key) {
	// 	console.log(key + '---');
	// 	return key;
	// },
	// keyForAttribute(key) {
	// 	let newKey = camelize(key);

	// 	return capitalize(newKey);
	// }
});
