require.config({
	paths: {
		'jquery': 'libs/jquery-1.11.1.min',
		'underscore': 'libs/lodash',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap'
		// 'app': 'app/app',
		// 'views': 'app/views/views'
	},

	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		},
		bootstrap: {
			deps: [
				'jquery'
			]
		}
	}
});

require(['backbone', 'app/app'], function(Backbone, App) {
	'use strict';
	App.initialize();
	console.log(App);
});