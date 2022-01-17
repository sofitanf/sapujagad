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
		<div class="col-12">
			<div class="card flex flex-column">
				<span class="text-2xl mb-3">Data Pengajuan</span>
				<DataTable
					responsiveLayout="scroll"
					:value="pengajuanIndex"
					:paginator="true"
					:rows="10"
					dataKey="id"
					filterDisplay="menu"
					v-model:filters="filters"
					:loading="loadingPengajuan"
					:globalFilterFields="[
						'nik',
						'nama',
						'nama_pelapor',
						'status',
						'kategori',
						'created_at',
						'nama_kelurahan',
						'nama_kecamatan',
					]"
				>
					<template #header>
						<span class="p-input-icon-left">
							<i class="pi pi-search" />
							<InputText v-model="filters['global'].value" placeholder="Cari" />
						</span>
					</template>
					<template #loading> Loading data. Please wait. </template>
					<Column field="index" header="#" :sortable="true" />
					<Column field="nik" header="NIK" />
					<Column field="nama" header="Nama" />
					<Column field="nama_pelapor" header="Nama Pelapor" />
					<Column field="kategori" header="Kategori" :sortable="true" />
					<Column header="Alamat">
						<template #body="{ data }">
							<p>{{ data.nama_kelurahan }}, {{ data.nama_kecamatan }}</p>
						</template>
					</Column>
					<Column field="created_at" header="Tgl Pengajuan" :sortable="true">
						<template #body="{ data }">
							<p>{{ $d(new Date(data.created_at), "medium", "id-ID") }}</p>
						</template>
					</Column>
					<Column field="status" header="Status">
						<template #body="{ data }">
							<span
								v-if="data.status === 'Terkirim'"
								class="center"
								:class="'badge badge-' + badgeClass('Terkirim')"
								>Pengajuan Baru</span
							>
							<span v-else :class="'badge badge-' + badgeClass(data.status)">{{
								data.status
							}}</span>
						</template>
					</Column>
					<Column header="Aksi">
						<template #body="{ data }">
							<div class="flex gap-2">
								<router-link
									:to="{ name: 'admin.pengajuan', params: { id: data.id } }"
								>
									<span class="badge badge-warning pi pi-pencil mr-2"></span>
								</router-link>
								<!-- <span
                  @click="deletePengajuan(data.id)"
                  class="badge badge-danger pi pi-trash"
                ></span> -->
							</div>
						</template>
					</Column>
				</DataTable>
			</div>
		</div>
	</div>
</template>
<script>
import { FilterMatchMode } from "primevue/api";
import { mapActions, mapGetters } from "vuex";
import badge from "../../../mixins/badge";
import moment from "moment";

export default {
	mixins: [badge],
	data() {
		return {
			filters: null,
			range: {
				start: "",
				end: "",
			},
		};
	},
	computed: {
		...mapGetters({
			pengajuan: "pengajuan",
			loadingPengajuan: "loadingPengajuan",
		}),
		pengajuanIndex() {
			return this.pengajuan.map((data, i) => ({
				...data,
				index: i + 1,
			}));
		},
	},
	methods: {
		...mapActions(["getPengajuan"]),
		cetaklaporan() {
			this.range.start = moment(this.range.start).format("YYYY-MM-DD");
			this.range.end = moment(this.range.end).format("YYYY-MM-DD");

			window.open(
				"/laporan/" + this.range.start + "+" + this.range.end,
				"_blank"
			);
		},
		initFilters() {
			this.filters = {
				global: { value: null, matchMode: FilterMatchMode.CONTAINS },
			};
		},
		// deletePengajuan(id) {
		//   this.$confirm.require({
		//     message: "Anda yakin ingin menghapus data ini?",
		//     header: "Konfirmasi",
		//     icon: "pi pi-exclamation-triangle",
		//     accept: () => {
		//       this.$store.dispatch("deletePengajuan", id).then((res) => {
		//         this.$toast.add({
		//           severity: "success",
		//           summary: "Sukses",
		//           detail: "Pengajuan berhasil dihapus",
		//           life: 3000,
		//         });
		//       });
		//     },
		//     reject: () => {},
		//   });
		// },
	},
	created() {
		this.getPengajuan();
		this.initFilters();
		const date = new Date();
		this.range.start = new Date(date.getFullYear(), date.getMonth(), 1);
		this.range.end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	},
};
</script>
<style scoped>
.icon {
	margin: 0 1rem;
}
.center {
	text-align: center;
}
</style>