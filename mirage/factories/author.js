import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

	'first-name'() {
		return faker.name.firstName();
	},
	'last-name'() {
		return faker.name.lastName();
	},
	age: 25,
	admin: false,
	avatar() {
		return faker.internet.avatar();
	}
});
