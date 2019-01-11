// import ApplicationSerializer from './application';
import { JSONAPISerializer } from 'ember-cli-mirage';
// import { camelize } from '@ember/string';

export default JSONAPISerializer.extend({
	keyForAttribute(key) {
		return key.camelize();
	}
});
