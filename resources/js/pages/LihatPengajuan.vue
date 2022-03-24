<template>
	<div class="container">
		<div class="form">
			<h3>Pelapor</h3>
			<h4>NIK : {{ user.nik }}</h4>
			<h4>Nama : {{ user.nama }}</h4>
			<DataTable
				:value="pengajuanIndex"
				responsiveLayout="scroll"
				:paginator="true"
				:rows="10"
				dataKey="id"
				filterDisplay="menu"
				v-model:filters="filters"
				:loading="loading"
				:globalFilterFields="[
					'nama',
					'status',
					'kategori',
					'tgl_pengajuan',
					'jadwal',
					'catatan',
				]"
			>
				<template #header>
					<div class="p-d-flex p-jc-between">
						<span class="p-input-icon-left">
							<i class="pi pi-search" />
							<InputText v-model="filters['global'].value" placeholder="Cari" />
						</span>
					</div>
				</template>
				<template #loading> Loading data. Please wait. </template>
				<Column field="index" header="#" :sortable="true"></Column>
				<Column field="nama" header="Nama" :sortable="true"></Column>
				<Column field="kategori" header="Kategori" :sortable="true"></Column>
				<Column field="status" header="Status" :sortable="true">
					<template #body="{ data }">
						<span :class="'badge badge-' + badgeClass(data.status)">{{
							data.status
						}}</span>
					</template>
				</Column>
				<Column field="tgl_pengajuan" header="Tgl Pengajuan" :sortable="true">
					<template #body="{ data }">
						<span>
							{{ $d(new Date(data.tgl_pengajuan), "long", "id-ID") }}
						</span>
					</template>
				</Column>
				<Column field="jadwal" header="Tgl Pelayanan" :sortable="true">
					<template #body="{ data }">
						<span v-if="data.jadwal">{{
							$d(new Date(data.jadwal), "long", "id-ID")
						}}</span>
					</template>
				</Column>
				<Column field="jadwal" header="Pukul (WIB)" :sortable="true">
					<template #body="{ data }">
						<span v-if="data.jadwal">{{
							$d(new Date(data.jadwal), "short", "id-ID")
						}}</span>
					</template>
				</Column>
				<Column field="catatan" header="Catatan"></Column>
			</DataTable>
		</div>
	</div>
</template>
<script>
import { FilterMatchMode } from "primevue/api";
import { mapGetters } from "vuex";
import badge from "../mixins/badge";
export default {
	mixins: [badge],
	data() {
		return {
			pengajuan: [],
			filters: null,
			loading: true,
		};
	},
	computed: {
		...mapGetters({
			user: "user",
		}),
		pengajuanIndex() {
			return this.pengajuan.map((items, index) => ({
				...items,
				index: index + 1,
			}));
		},
	},
	methods: {
		async fetchData() {
			await axios
				.get(`/cek-pengajuan/${this.user.id_masyarakat}`)
				.then(({ data }) => {
					this.pengajuan = data.data;
					this.loading = false;
				})
				.catch((error) => console.log(error));
		},

		initFilters() {
			this.filters = {
				global: { value: null, matchMode: FilterMatchMode.CONTAINS },
			};
		},
	},
	created() {
		this.fetchData();
		this.initFilters();
	},
};
</script>
<style scoped>
.form {
	width: 80%;
}
</style>