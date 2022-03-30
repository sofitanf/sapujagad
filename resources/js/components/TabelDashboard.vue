<template>
	<div class="col-12">
		<div class="card flex flex-column">
			<span class="text-2xl mb-3">Total Pengajuan</span>
			<DataTable responsiveLayout="scroll" :value="kecamatanIndex">
				<Column field="index" header="#" :sortable="true" />
				<Column field="nama_kecamatan" header="Kecamatan" />
				<Column field="total" header="Total" :sortable="true" />
				<Column field="cetakKtp" header="Cetak KTP-El" :sortable="true" />
				<Column field="rekamKtp" header="Rekam KTP-El" :sortable="true" />
				<Column field="kia" header="KIA" :sortable="true" />
				<Column field="akta" header="Akta" :sortable="true" />
				<ColumnGroup type="footer">
					<Row>
						<Column footer="Total:" />
						<Column />
						<Column :footer="totalPengajuan" />
						<Column :footer="total.cetakKTP" />
						<Column :footer="total.rekamKTP" />
						<Column :footer="total.kia" />
						<Column :footer="total.akta" />
					</Row>
				</ColumnGroup>
			</DataTable>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			kecamatan: [],
			totalPengajuan: null,
		};
	},
	computed: {
		...mapGetters({ total: "totalKategori" }),
		kecamatanIndex() {
			return this.kecamatan.map((items, i) => ({
				...items,
				index: i + 1,
			}));
		},
	},
	created() {
		this.$store.dispatch("getTotalKategori");

		axios.get("/dashboard/tabel-kecamatan").then(({ data }) => {
			this.kecamatan = data.data;
		});
		axios.get("/pengajuan/totalAll").then(({ data }) => {
			this.totalPengajuan = data.data;
		});
	},
};
</script>