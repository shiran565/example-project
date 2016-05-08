<template>
	<h1>index</h1>


		<!-- Target -->
	<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">

	<!-- Trigger -->
	<button class="btn" data-clipboard-target="#foo">Copy to clipboard
	</button>

</template>

<script type="text/javascript">
	var Clipboard = require("clipboard");

	var clipboard = new Clipboard('.btn');

	clipboard.on('success', function(e) {

	    console.info('Action:', e.action);
	    console.info('Text:', e.text);
	    console.info('Trigger:', e.trigger);

	    e.clearSelection();
	});
</script>