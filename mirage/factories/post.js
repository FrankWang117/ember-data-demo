import { Factory, trait, faker } from 'ember-cli-mirage';

export default Factory.extend({
	'title': faker.name.title,
	// 'author': trait({
	// 	afterCreate(post, server) {
	// 		server.create('author', { post });
	// 	}
	// }),
	'writedTime': faker.date.past,
	'isOriginal': faker.random.boolean,
	'like': faker.random.number,
	'url': faker.internet.url,
	'tag': faker.random.word,
	'article': faker.random.word,
	'comments': trait({
		afterCreate(post, server) {
			server.createList('comment', Math.floor(Math.random() * 23), { post });
		}
	})
});
