<template>
	<div class="col-12">
		<div class="card flex flex-column">
			<span class="text-2xl mb-3">Data User Nonaktif</span>
			<DataTable
				responsiveLayout="scroll"
				:value="trash"
				:rows="10"
				dataKey="id"
				:loading="loading"
			>
				<template #loading> Loading data. Please wait. </template>
				<Column field="email" header="Email" />
				<Column field="role" header="Kategori" />
				<Column header="Aksi" class="opsi">
					<template #body="{ data }">
						<div class="aksi">
							<span @click="restore(data.id_user)" class="badge badge-info"
								>Aktifkan</span
							>
							<span @click="deleteUser(data.id_user)" class="badge badge-danger"
								>Hapus</span
							>
						</div>
					</template>
				</Column>
			</DataTable>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
	computed: {
		...mapGetters({
			trash: "trash",
			loading: "loading",
		}),
	},
	methods: {
		...mapActions(["getTrash"]),
		restore(id) {
			this.$confirm.require({
				message: "Anda yakin ingin mengaktifkan user ini?",
				header: "Konfirmasi",
				icon: "pi pi-exclamation-triangle",
				accept: () => {
					this.$store
						.dispatch("restoreUser", id)
						.then(() => {
							this.$toast.add({
								severity: "success",
								summary: "Sukses",
								detail: "User Berhasil Diaktifkan!",
								life: 3000,
							});
						})
						.catch(() => {
							this.$toast.add({
								severity: "error",
								summary: "Gagal",
								detail: "User Gagal Diaktifkan!",
								life: 3000,
							});
						});
				},
				reject: () => {},
			});
		},
		deleteUser(id) {
			this.$confirm.require({
				message: "Anda yakin ingin menghapus user ini?",
				header: "Konfirmasi",
				icon: "pi pi-exclamation-triangle",
				accept: () => {
					this.$store
						.dispatch("deleteUser", id)
						.then(() => {
							this.$toast.add({
								severity: "success",
								summary: "Sukses",
								detail: "User Berhasil Dihapus!",
								life: 3000,
							});
						})
						.catch(() => {
							this.$toast.add({
								severity: "error",
								summary: "Gagal",
								detail: "User Gagal Dihapus!",
								life: 3000,
							});
						});
				},
				reject: () => {},
			});
		},
	},
	created() {
		this.getTrash();
	},
};
</script>