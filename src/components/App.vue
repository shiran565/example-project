<template>
	<div id="message">
	  {{ message }}
	</div>

	<router-view 
		class="view"
		keep-alive
		transition="fade"
		transition-mode="out-in">
	</router-view>

</template>

<script>

	module.exports = {
		el: function() {
			return '#message';
		},
		data: function() {
			return {
				message: 'Hello Vue.js!'
			}
		}
	}


</script>

<style>

.fade-transition {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave {
  opacity: 0;
}

</style>