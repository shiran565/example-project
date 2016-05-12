<template>
	<footer class="footer">
		<ul>
			<li>分类一</li>
			<li>分类二</li>
			<li>分类三</li>
			<li>分类四</li>
		</ul>
	</footer>
</template>


<style lang="css">
	.footer{
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    background: #FFF;
	    z-index: 99;
	    border-top: 1px solid #e0e0e0;
	}

	.footer ul{		
	    display: box;
	    display: -webkit-box;
	    box-align: center;
	    -webkit-box-align: center;
	    box-pack: center;
	    -webkit-box-pack: center;
	}

	.footer li{
	    -webkit-box-flex: 1;
	    box-flex: 1;
	    width: 100%;
	    text-align: center;
	    padding: .15rem 0;

	    font-size: .2667rem;		
	}

</style>

<script type="text/javascript">
	module.exports = {
		name:"Footer",
		created:function(){
			//alert("footer");
		}
	}


</script>