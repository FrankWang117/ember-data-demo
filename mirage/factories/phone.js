import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	brand() {
		return faker.internet.userName();
	}
	// 'company': belongsTo()
});
