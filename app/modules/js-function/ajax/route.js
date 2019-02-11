import Route from '@ember/routing/route';

export default Route.extend({
	actions: {
		mockAjaxMoreFailThree() {
			let successCount = 0,
				failCount = 0,
				datum = [];

			ajax(url, res => {
				if (success) {
					successCount++;
					if (successCount + failCount === 10) {
						console.log(datum);
					} else {
						datum.push(res.data);
					}
				} else {
					failCount++;
					if (failCount > 3) {
						throw Error('fail three times');
					}
				}
			});
		}
	}
});
