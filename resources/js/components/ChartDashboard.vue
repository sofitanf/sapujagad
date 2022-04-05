<template>
	<div class="col-12">
		<div class="card">
			<div class="mb-3 justify-content-between flex">
				<span class="text-2xl">Grafik {{ year }}</span>
				<Dropdown
					v-model="year"
					:options="years"
					optionLabel="tahun"
					optionValue="tahun"
					placeholder="Pilih tahun"
				/>
			</div>
			<Chart type="bar" :data="basicData" :options="basicOptions" />
		</div>
	</div>
</template>
<script>
import moment from "moment";
import "moment/locale/id";
export default {
	data() {
		return {
			year: new Date().getFullYear(),
			years: [],
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
		};
	},
	methods: {
		fetchYear() {
			axios
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
		this.fetchYear();
		this.grafik();
		Echo.channel("refresh").listen("RefreshData", () => this.grafik());
	},
};
</script>