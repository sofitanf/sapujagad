 <template>
	<div class="grid p-fluid dashboard">
		<div class="col-6">
			<DatePicker v-model="range" is-range locale="id">
				<template v-slot="{ inputValue, inputEvents }">
					<div class="flex align-items-center">
						<input
							:value="inputValue.start"
							v-on="inputEvents.start"
							class="p-inputtext"
						/>
						<i class="pi pi-arrow-right icon"></i>
						<input
							:value="inputValue.end"
							v-on="inputEvents.end"
							class="p-inputtext mr-3"
						/>
						<Button
							@click="cetaklaporan"
							label="Cetak Laporan"
							class="p-button-raised w-30rem"
						/>
					</div>
				</template>
			</DatePicker>
		</div>
		<tabel-pengajuan />
	</div>
</template>
<script>
import moment from "moment";
import TabelPengajuan from "../../../components/TabelPengajuan.vue";

export default {
	components: { TabelPengajuan },
	data() {
		return {
			range: {
				start: "",
				end: "",
			},
		};
	},
	methods: {
		cetaklaporan() {
			this.range.start = moment(this.range.start).format("YYYY-MM-DD");
			this.range.end = moment(this.range.end).format("YYYY-MM-DD");

			axios({
				url: `/laporan/${this.range.start}+${this.range.end}`,
				method: "GET",
				responseType: "blob",
			}).then((response) => {
				var fileURL = window.URL.createObjectURL(new Blob([response.data]));
				var fileLink = document.createElement("a");
				fileLink.href = fileURL;
				fileLink.setAttribute(
					"download",
					`Laporan Sapu Jagad ${this.$d(
						new Date(this.range.start),
						"medium",
						"id-ID"
					)} - ${this.$d(new Date(this.range.end), "medium", "id-ID")}.pdf`
				);
				document.body.appendChild(fileLink);
				fileLink.click();
			});
		},
	},
	created() {
		const date = new Date();
		this.range.start = new Date(date.getFullYear(), date.getMonth(), 1);
		this.range.end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	},
};
</script>
