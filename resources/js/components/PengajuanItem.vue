<template>
	<div class="pengajuan_tipe">
		<img class="pengajuan_gambar" :src="image" alt="" />
		<div class="pengajuan_deskripsi">
			<h2 class="pengajuan_tipe_judul">{{ judul }}</h2>
			<div class="pengajuan_persyaratan">
				<p>PERSYARATAN</p>
				<ol>
					<slot></slot>
				</ol>
			</div>
		</div>
		<div class="pengajuan_button_wrap">
			<router-link :to="link" class="pengajuan_button">DAFTAR</router-link>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		judul: String,
		image: String,
		link: String,
	},
};
</script>