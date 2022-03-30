<template>
	<div class="total_pengajuan">
		<p class="total_angka">{{ total }}</p>
		<h4>{{ kategori }}</h4>
	</div>
</template>
<script>
export default {
	props: {
		total: {
			required: true,
		},
		kategori: {
			type: String,
			required: true,
		},
	},
};
</script>