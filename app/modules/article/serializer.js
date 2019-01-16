import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType) {
		console.log(payload);
		console.log(requestType);
		return this._super(...arguments);
	}
});
