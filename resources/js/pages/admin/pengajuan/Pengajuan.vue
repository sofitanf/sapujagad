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

			window.open(
				"/laporan/" + this.range.start + "+" + this.range.end,
				"_blank"
			);
		},
	},
	created() {
		const date = new Date();
		this.range.start = new Date(date.getFullYear(), date.getMonth(), 1);
		this.range.end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	},
};
</script>
