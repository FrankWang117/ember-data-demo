import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.get('store').findAll('post', { include: 'comments' })
			.then(data => {
				return data.map((item) => {
					return item;
				});
			});
	},
	createARecord(modelName, data) {
		let record = this.get('store').createRecord(modelName, data);

		return record;
	},

	updateRecord(modelName, id, data) {
		let dataKeys = Object.keys(data);

		this.get('store').findRecord(modelName, id).then(record => {
			for (let key of dataKeys) {
				record.set(key, data[key]);
			}
			record.save();
		});
	},
	actions: {
		createNewRecord() {
			let newRecordData = {
					'title': 'frontend',
					'writedTime': new Date(),
					'isOriginal': true,
					'like': 0,
					'url': 'www.baidu.com',
					'tag': 'frontend',
					'article': 'React is lts'
				},
				newPostRecord = this.createARecord('post', newRecordData),
				that = this;

			newPostRecord.save().then(data => {
				that.controllerFor('model-demo.operating').set('newPost', data);
			});
		},
		updateExistRecord(id) {
			let updateData = {
				'title': 'Be a good frontEnd enginer',
				'like': ~~(Math.random() * 10)
			};

			this.updateRecord('post', id, updateData);
		}
	}
});
