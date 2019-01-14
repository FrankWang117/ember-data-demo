import DS from 'ember-data';
import { camelize, capitalize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
	primaryKey: 'pKey',
	attrs: {
		firstName: {
			serialize: false
		},
		height: 'ThePersonSelfHeight'
	},
	// extractAttributes(modelClass, resourceHash) {
	// 	let attributeKey = null,
	// 		attributes = {};

	// 	modelClass.eachAttribute(key => {
	// 		attributeKey = this.keyForAttribute(key, 'deserialize');
	// 		if (resourceHash[attributeKey] !== undefined) {
	// 			attributes[key] = resourceHash[attributeKey];
	// 		}
	// 	});

	// 	return attributes;
	// },
	// extractId(modelClass, resourceHash) {
	// 	let primaryKey = this.get('primaryKey'),
	// 		id = resourceHash[primaryKey];

	// 	return id;
	// },
	extractId(modelClass, resourceHash) {
		let primaryKey = this.get('primaryKey'),
			id = resourceHash[primaryKey];

		console.table(resourceHash);
		console.log(resourceHash);

		return id;
	},
	modelNameFromPayloadKey(key) {
		return key;
	},
	keyForAttribute(key) {
		let newKey = camelize(key);

		return capitalize(newKey);
	}
});
