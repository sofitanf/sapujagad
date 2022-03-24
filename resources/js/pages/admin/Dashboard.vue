<template>
	<div class="grid p-fluid dashboard">
		<div class="col-12 lg:col-3">
			<div class="card flex justify-content-between align-items-start mb-0">
				<div>
					<span class="text-2xl">Pengajuan Baru</span>
					<span class="p-text-secondary block mt-2">Jumlah pengajuan</span>
				</div>
				<span class="bg-green-500 text-white py-2 px-3 text-2xl border-round">{{
					data.terkirim
				}}</span>
			</div>
		</div>
		<div class="col-12 lg:col-3">
			<div class="card flex justify-content-between align-items-start mb-0">
				<div>
					<span class="text-2xl">Diproses</span>
					<span class="p-text-secondary block mt-2">Jumlah pengajuan</span>
				</div>
				<span
					class="bg-purple-500 text-white py-2 px-3 text-2xl border-round"
					>{{ data.diproses }}</span
				>
			</div>
		</div>
		<div class="col-12 lg:col-3">
			<div class="card flex justify-content-between align-items-start mb-0">
				<div>
					<span class="text-2xl">Pemohon</span>
					<span class="p-text-secondary block mt-2">Jumlah pemohon</span>
				</div>
				<span class="bg-blue-500 text-white py-2 px-3 text-2xl border-round">{{
					data.pemohon
				}}</span>
			</div>
		</div>
		<div class="col-12 lg:col-3">
			<div class="card flex justify-content-between align-items-start mb-0">
				<div>
					<span class="text-2xl">Pelapor</span>
					<span class="p-text-secondary block mt-2">Jumlah pelapor</span>
				</div>
				<span
					class="bg-orange-500 text-white py-2 px-3 text-2xl border-round"
					>{{ data.pelapor }}</span
				>
			</div>
		</div>

		<div class="col-12">
			<div class="card">
				<FullCalendar :options="calendarOptions" />
			</div>
		</div>

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
							<Column :footer="totalAll" />
							<Column :footer="kategori.cetakKTP" />
							<Column :footer="kategori.rekamKTP" />
							<Column :footer="kategori.kia" />
							<Column :footer="kategori.akta" />
						</Row>
					</ColumnGroup>
				</DataTable>
			</div>
		</div>

		<div class="col-12">
			<div class="card">
				<div class="mb-3 justify-content-between flex">
					<span class="text-2xl">Grafik {{ year }}</span>
					<Dropdown
						v-model="year"
						@change="updateYear"
						:options="years"
						optionLabel="tahun"
						optionValue="tahun"
						placeholder="Pilih tahun"
					/>
				</div>
				<Chart type="bar" :data="basicData" :options="basicOptions" />
			</div>
		</div>
	</div>
</template>
<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
import "moment/locale/id";

export default {
	components: { FullCalendar },
	data() {
		return {
			data: {},
			year: new Date().getFullYear(),
			years: [],
			kecamatan: [],
			totalAll: null,
			kategori: {},
			loading: true,
			chart: {},
			basicData: {},
			basicOptions: {
				plugins: {
					legend: {
						labels: {
							color: "#495057",
						},
					},
				},
				scales: {
					x: {
						ticks: {
							color: "#495057",
						},
						grid: {
							color: "#ebedef",
						},
					},
					y: {
						ticks: {
							color: "#495057",
							stepSize: 1,
							beginAtZero: true,
						},
						grid: {
							color: "#ebedef",
						},
					},
				},
			},
			calendarOptions: {
				plugins: [dayGridPlugin],
				initialView: "dayGridMonth",
				locale: "id",
				events: [],
				eventClick: function (info) {
					alert("Jam " + info.event.title);
				},
			},
		};
	},
	computed: {
		kecamatanIndex() {
			return this.kecamatan.map((items, i) => ({
				...items,
				index: i + 1,
			}));
		},
	},
	methods: {
		updateYear() {},
		async fetchTotal() {
			await axios.get("/dashboard/total").then(({ data }) => {
				this.data = data;
			});
		},
		async fetchJadwal() {
			await axios.get("/dashboard/jadwal").then(({ data }) => {
				this.calendarOptions.events = data.data;
			});
		},
		async fetchKecamatan() {
			await axios.get("/dashboard/tabel-kecamatan").then(({ data }) => {
				this.kecamatan = data.data;
			});
		},
		async fetchTotalAll() {
			await axios.get("/pengajuan/totalAll").then(({ data }) => {
				this.totalAll = data.data;
			});
		},
		async fetchKategori() {
			await axios
				.get("/pengajuan/total")
				.then(({ data }) => {
					this.kategori = data;
				})
				.catch((error) => console.log(error));
		},
		async fetchYear() {
			await axios
				.get("/dashboard/tahun")
				.then(({ data }) => (this.years = data.data));
		},
		grafik() {
			axios.get(`/dashboard/chart/${this.year}`).then(({ data }) => {
				let bulan = [];
				let cetakKtp = [];
				let rekamKtp = [];
				let kia = [];
				let akta = [];

				data.chart.map((item) => {
					cetakKtp.push(item.cetakKtp);
					rekamKtp.push(item.rekamKtp);
					kia.push(item.kia);
					akta.push(item.akta);
					bulan.push(moment(item.bulan, "M").format("MMMM"));
				});
				this.basicData = {
					labels: bulan,
					datasets: [
						{
							label: "Cetak KTP-El",
							backgroundColor: "#42A5F5",
							data: cetakKtp,
						},
						{
							label: "Rekam KTP-El",
							backgroundColor: "#FFA726",
							data: rekamKtp,
						},
						{
							label: "KIA",
							backgroundColor: "#FF6384",
							data: kia,
						},
						{
							label: "AKTA",
							backgroundColor: "#7E57C2",
							data: akta,
						},
					],
				};
			});
		},
	},
	watch: {
		year: "grafik",
	},
	created() {
		moment.locale("id");
		this.fetchTotal();
		this.fetchJadwal();
		this.fetchKecamatan();
		this.fetchTotalAll();
		this.fetchKategori();
		this.fetchYear();
		this.grafik();
	},
};
</script>