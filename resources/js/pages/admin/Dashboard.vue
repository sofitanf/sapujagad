<template>
	<div class="grid p-fluid dashboard">
		<total-item
			judul="Pengajuan Baru"
			sub="Jumlah pengajuan"
			:total="total.terkirim"
			color="bg-green-500"
		/>
		<total-item
			judul="Diproses"
			sub="Jumlah pengajuan"
			:total="total.diproses"
			color="bg-purple-500"
		/>
		<total-item
			judul="Pemohon"
			sub="Jumlah pemohon"
			:total="total.pemohon"
			color="bg-blue-500"
		/>
		<total-item
			judul="Pelapor"
			sub="Jumlah pelapor"
			:total="total.pelapor"
			color="bg-orange-500"
		/>
		<div class="col-12">
			<div class="card">
				<FullCalendar :options="calendarOptions" />
			</div>
		</div>
		<table-dashboard />
		<chart-dashboard />
	</div>
</template>
<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import TotalItem from "../../components/TotalItem.vue";
import TableDashboard from "../../components/TabelDashboard.vue";
import ChartDashboard from "../../components/ChartDashboard.vue";

export default {
	components: { FullCalendar, TotalItem, TableDashboard, ChartDashboard },
	data() {
		return {
			total: {},
			loading: true,
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
	created() {
		axios.get("/dashboard/total").then(({ data }) => {
			this.total = data;
		});
		axios.get("/dashboard/jadwal").then(({ data }) => {
			this.calendarOptions.events = data.data;
		});
	},
};
</script>