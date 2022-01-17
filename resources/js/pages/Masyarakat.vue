<template>
	Administrator Page
	<div @click="home">Go back</div>
</template>
<script>
export default {
	methods: {
		home() {
			window.open("/admin/dashboard");
		},
	},
};
</script>