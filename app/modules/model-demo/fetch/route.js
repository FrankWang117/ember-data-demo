import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.get('store').findAll('company');

		/**
		 * 阐释 options - backgroundReload 的作用。
		 *
		 * return this.get('store').findAll('company', { backgroundReload: false });
		*/
		/**
		 * 阐释 options - include 的作用。
		 * 将本model实例下的关联的model实例在请求的时候同时请求。
		 * return this.get('store').findAll('company', { include: 'phones' });
		*/
	},
	actions: {
		/**
		 * 阐释 options - reload 的作用。在触发了 `requestAgain` action 之后，
		 * 在网速较慢的情况下就会看到页面在数据返回之后才进行了展示。
		 * 如果去掉 `{reload: true}`，再次触发`requestAgain` action 之后会发现
		 * 页面会立即展示 缓存 中的数据。
		 * 此属性和 `adapter` 中的 `shouldReloadAll()` 方法起到的作用类似。
		 */
		requestAgain() {
			let that = this;

			this.get('store').findAll('company', { reload: true }).then(data => {
				that.controllerFor('model-demo.fetch').set('companiesAgain', data);
			});
		},
		peekAlreadyExistModel() {

			let companies = this.get('store').peekAll('company');

			this.controllerFor('model-demo.fetch').set('peekAlreadyExistModel', companies);

		},
		peekNoExistModel() {
			let companies = this.get('store').peekAll('chinacompany');

			this.controllerFor('model-demo.fetch').set('peekNoExistModel', companies);

		},
		findSingleRecord() {
			let phone = this.get('store').findRecord('phone', 1);

			this.controllerFor('model-demo.fetch').set('findSingleRecord', phone);
		},
		fSRpreload() {
			let phone = this.get('store').findRecord('phone', 1, { preload: { company: 1 } });

			this.controllerFor('model-demo.fetch').set('fSRpreload', phone);

		},
		queryFilter() {
			this.get('store').query('company', {
				filter: {
					isLocation: true
				}
			}).then(companies => {
				this.controllerFor('model-demo.fetch').set('queryFilter', companies);
			});
		},
		querySingleRecord() {
			this.get('store').query('company', {
				filter: {
					isLocation: true
				}
			}).then(companies => {
				this.controllerFor('model-demo.fetch').set('querySingleRecord', companies.get('firstObject'));
			});
		}

	}
});
