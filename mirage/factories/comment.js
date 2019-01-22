import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	commentator: faker.internet.userName,
	content: faker.random.wrods,
	time: faker.date.past,
	isLike: faker.random.boolean,
	reply: faker.random.number
});
