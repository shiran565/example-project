<template>
	<div id="index">
		<h1>index</h1>
		<div id="slider" class="swipe">
			<div class="swipe-wrap">
				<div><img src="../assets/images/banner.jpg" alt=""></div>
				<div><img src="../assets/images/banner-1.jpg" alt=""></div>
			</div>
		</div>
		<!--底部工具条组件-->
		<page-footer></page-footer>		
	</div>
</template>


<style type="text/css">
	#slider img{
		width: 100%;
	}

	.swipe {
	  overflow: hidden;
	  visibility: hidden;
	  position: relative;
	}

	.swipe-wrap {
	  overflow: hidden;
	  position: relative;
	}

	.swipe-wrap > div {
	  float:left;
	  width:100%;
	  position: relative;
	}
</style>


<script type="text/javascript">
	var Vue = require("vue");
	var PageFooter = require("./Footer.vue");


	module.exports = {
		data: function() {
			return {};
		},
		components: {
			"page-footer": PageFooter
		},
		ready: function() {
			require.ensure("../assets/js/swipe/index.js", function(require) {
				var Swipe = require("../assets/js/swipe/index.js");

				new Swipe(document.getElementById('slider'), {
					startSlide: 0,
					speed: 400,
					auto: 3000,
					continuous: true,
					disableScroll: false,
					stopPropagation: true,
					callback: function(index, elem) {},
					transitionEnd: function(index, elem) {}
				});
			});
		}

	}

</script>