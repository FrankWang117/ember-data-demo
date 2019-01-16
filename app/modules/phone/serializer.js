import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	modelNameFromPayloadKey(key) {
		return key;
	},
	payloadKeyFromModelName(key) {
		console.log('hook serialize');

		return key;
	},
	serialize(snapshot, options) {
		console.log('hook serialize');
		let json = this._super(...arguments);

		json.data.attributes.depth = json.data.attributes.size.depth;
		return json;
	},
	serializeAttribute(snapshot, json, key, attributes) {
		console.log('hook serializeAAAAA');

		json.attributes = json.attributes || {};
		this._super(snapshot, json.attributes, key, attributes);
	},
	// normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	// 	console.table(payload);

	// 	payload.data.attributes.depth = payload.data.attributes.size.depth;
	// 	delete payload.data.attributes.size;
	// 	return this._super(...arguments);
	// }
	// normalize(typeClass, hash) {
	// 	hash.attributes.depth = hash.attributes.size.depth;
	// 	delete hash.attributes.size;
	// 	return this._super.apply(this, arguments);
	// },
	normalizeQueryRecordResponse(store, primaryModelClass, payload) {
		let data = payload.data.attributes;

		payload.data.attributes.depth = data.size ? data.size.depth : data.depth;
		delete payload.data.attributes.size;
		return this._super(...arguments);
	},
	normalizeFindAllResponse(store, primaryModelClass, payload) {
		let data = payload.data.attributes;

		payload.data.attributes.depth = data.size ? data.size.depth : data.depth;
		delete payload.data.attributes.size;
		return this._super(...arguments);
	}
});
