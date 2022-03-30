<template>
	<div class="col-12 lg:col-3">
		<div class="card flex justify-content-between align-items-start mb-0">
			<div>
				<span class="text-2xl">{{ judul }}</span>
				<span class="p-text-secondary block mt-2">{{ sub }}</span>
			</div>
			<span :class="color" class="text-white py-2 px-3 text-2xl border-round">{{
				total
			}}</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		judul: String,
		sub: String,
		total: Number,
		color: String,
	},
};
</script>