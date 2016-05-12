//引入全局样式文件
require("./assets/css/normalize.css");
require("./assets/css/layout.css");

var App = require("./components/App.vue");
var $ = require("jquery");
var fastclick = require("fastclick");

require("./assets/js/common/index.js")

$(function() {
	// 使用fastclick
	fastclick.attach(document.body);
});


//初始化应用路由
require.ensure(["vue", "vue-router"], function(require) {
	var Vue = require("vue");
	var Router = require("vue-router");

	//install router
	Vue.use(Router);


	var router = new Router();

	router.map({
		'/': {
			component: function(resolve){
				require(['./components/Index.vue'],resolve);
			}
		},
		'/list': {
			component: function(resolve) {
				require(['./components/List.vue'], resolve);
			}
		}
	})


	router.beforeEach(function() {
		window.scrollTo(0, 0);
	});

	//404页面
	router.redirect({
		'*': '/404'
	});

	router.start(App, '#app');

});