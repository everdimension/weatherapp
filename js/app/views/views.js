define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/about',
	'app/views/dash'
], function($, _, Backbone, AboutView, DashView) {
	'use strict';

	var AppView = Backbone.View.extend({
		id: "app-view",

		htmlLayoutCode: [
			'<nav class="navbar navbar-default">',
				'<div class="container-fluid">',
					'<a href="#" class="navbar-brand">Weather A Watcher</a>',
					'<ul class="nav navbar-nav">',
						'<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
						'<li id="nav-about"><a href="#about">About</a></li>',
					'</ul>',
				'</div>',
			'</nav>',
			'<div class="container">',
				'<div class="row">',
					'<div id="content" class="col-sm-6"></div>',
				'</div>',
			'</div>',
		].join(''),

		events: {

		},

		views: {},

		initialize: function() {
			this.views.about = new AboutView({
				id: 'page-about',
				className: 'page-view'
			});
			this.views.dash = new DashView({
				id: 'page-dash',
				className: 'page-view'
			});

			this.$el.append(this.htmlLayoutCode);

			this.$('#content').append(this.views.about.render().el);
			this.$('#content').append(this.views.dash.render().el);
		},

		setPage: function(pageName) {
			console.log('setPage');
			var $nav = this.$('.nav');

			this.$('.page-view').hide();
			$nav.find('li').removeClass('active');

			this.$('#nav-'+pageName).addClass('active');
			this.$('#page-'+pageName).show();
		}
	});

	return AppView;
});