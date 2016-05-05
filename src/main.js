var Vue = require("vue");
var fastclick = require("fastclick");
var Router = require("vue-router");
var App = require("./components/App.vue");
var Index = require("./components/Index.vue");


//install router
Vue.use(Router);


var router = new Router();

router.map({
	'/mvc/': {
		component: Index
	},
	'/mvc/list': {
		component: function(resolve) {
			require(['./components/List.vue'], resolve);
		}
	}
})


router.beforeEach(function() {
	window.scrollTo(0, 0);
});

router.redirect({
	'*': '/404'
});

router.start(App, '#app');