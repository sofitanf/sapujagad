<template>
	<div class="col-12 mb-3" v-if="detail.status === 'Diproses'">
		<Button @click="chat" label="Kirim Pesan" class="p-button-raised w-10rem" />
	</div>
	<div v-if="detail && detail.id_pengajuan">
		<detail-data-pengajuan :detail="detail" />
		<tanggapan-pengajuan @update-data="fetchData" :detail="detail" />
	</div>
</template>
<script>
import { mapGetters } from "vuex";
import TanggapanPengajuan from "../../../components/TanggapanPengajuan.vue";
import DetailDataPengajuan from "../../../components/DetailDataPengajuan.vue";

export default {
	components: { TanggapanPengajuan, DetailDataPengajuan },
	computed: {
		...mapGetters({
			detail: "detailPengajuan",
		}),
	},
	methods: {
		async fetchPengajuan() {
			await this.$store.dispatch("getDetailPengajuan", this.$route.params.id);
		},
		chat() {
			let telepon = this.detail.telepon;
			let jadwal = this.$d(new Date(this.detail.jadwal), "long", "id-ID");
			let jam = this.$d(new Date(this.detail.jadwal), "short", "id-ID");
			telepon = telepon.substring(1);
			const message = `Pemohon yang terhormat, tim kami akan menuju ke ${this.detail.alamat} pada ${jadwal} pukul ${jam} WIB. -TIM SAPU JAGAD. DINDUKCAPIL KAB.PEKALONGAN`;
			window.open(
				`https://api.whatsapp.com/send?phone=62${telepon}&text=${message}&source=&data`,
				"_blank"
			);
		},
		fetchData() {
			this.fetchPengajuan();
		},
	},
	created() {
		this.fetchPengajuan();
	},
};
</script>