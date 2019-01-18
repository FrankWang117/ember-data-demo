import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	'name'() {
		return faker.company.companyName();
	},
	'location'() {
		return faker.address.streetAddress();
	},
	'employee'() {
		return faker.random.number();
	}
});
