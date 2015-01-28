define([
	'app/views/views',
	'app/routers/router'
], function(AppView, Router) {
	'use strict';

	var initialize = function() {
		var appview = new AppView();
		var router = new Router(appview);

		Backbone.history.start();

		$('body').append(appview.el);
	};

	return {
		initialize: initialize
	};
		
});