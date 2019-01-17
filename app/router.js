import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('customizing-serializer', function () {
        this.route('format');
        this.route('transform');
    });
    this.route('jsonapiadapter', function () {
      this.route('properties');
      this.route('urlconventions');
    });
});

export default Router;
