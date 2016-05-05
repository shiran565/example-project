<template>
	<div id="wrapper">
		<div id="header"><h1>Header</h1></div>
	</div>

	<router-view 
		class="view"
		keep-alive
		transition
		transition-mod="out-in">	
	</router-view>

</template>

<style>
html,body{
  font-family:Verdana;
  font-size:13px;
  height:100%;	
}

body{
	width: 10.8rem;
	margin: 0 auto;
	overflow-x:hidden; 
}

</style>