import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
	'name': faker.company.companyName,
	'address'() {
		return faker.address.streetAddress();
	},
	foundingTime() {
		return faker.date.past();
	},
	'employee'() {
		return faker.random.number();
	},
	'isLocation': faker.random.boolean,

	'logo'() {
		return faker.random.image();
	},
	'phones': trait({
		afterCreate(company, server) {
			server.createList('phone', 3, { company });
		}
	})
});
