// import { Server } from 'tls';

export default function (server) {
	server.create('author', 'posts');

	server.createList('author', 10);
	server.createList('bj-company', 5);
	server.createList('company', 5, 'phones');
	server.createList('post', 3, 'comments');

	// server.createList('post', 10, 'withComments');
	/**
	 *
	 * let companies = server.createList('company', 5);

	 * companies.forEach(element => {
	 * element.phones = server.createList('phone', 4, { company: element });
	 * });
	*/
}
