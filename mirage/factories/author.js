import { Factory, faker, trait } from 'ember-cli-mirage';
// import dsl from '../../node_modules/route-recognizer/dist/route-recognizer/dsl';

export default Factory.extend({
	// 'first-name'() {
	// 	return faker.name.firstName();
	// },
	// 'last-name'() {
	// 	return faker.name.lastName();
	// },
	'nickName': faker.internet.userName,
	'age': Math.floor(Math.random() * 50),
	'tag': faker.random.word,
	'avatar': faker.image.avatar,
	'email': faker.internet.email,
	'phone': faker.phone.phoneNumber,
	'writePost': faker.random.number,
	'posts': trait({
		afterCreate(author, server) {
			server.createList('post', 3, { author });
		}
	})
});
