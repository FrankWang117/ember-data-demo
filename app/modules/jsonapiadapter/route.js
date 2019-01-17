import Route from '@ember/routing/route';

export default Route.extend({

});

// new Promise(function executor(resolve) {
// 	console.log(1);
// 	for (var i = 0; i < 10000; i++) {
// 		i == 9999 && resolve();
// 	}
// 	console.log(2);
// }).then(function () {
// 	setTimeout(function () {
// 		console.log(3);
// 	}, 10);
// 	console.log(4);
// });
// setTimeout(function () {
// 	console.log(5);
// }, 0);
// console.log(6);