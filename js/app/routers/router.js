define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'': 'goToDash',
			'dash': 'goToDash',
			'dash/:place': 'goToDash',
			'about': 'goToAbout'
		},

		initialize: function(view) {
			console.log('router initialize view');
			this.appView = view;
		},

		goToDash: function(place) {
			this.appView.setPage('dash');
			if (place) {
				alert('weather for ' + place);
			}
		},

		goToAbout: function() {
			this.appView.setPage('about');
		}

	});

	return Router;

});