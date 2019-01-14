// import ApplicationSerializer from './application';
import { JSONAPISerializer } from 'ember-cli-mirage';
// import { camelize } from '@ember/string';

export default JSONAPISerializer.extend({
	modelNameFromPayloadKey(key) {
		console.log(key);
		console.log('===');
		return key;
	},
	keyForAttribute(key) {
		console.log(key);
		return key;
	}
});
