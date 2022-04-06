<template>
	<div class="col-12">
		<div class="card flex flex-column">
			<span class="text-2xl mb-3">Data User Aktif</span>
			<DataTable
				responsiveLayout="scroll"
				:value="users"
				:rows="10"
				dataKey="id"
				:loading="loading"
			>
				<template #header>
					<div class="flex justify-end">
						<router-link to="/admin/create-user">
							<Button label="Tambah User" class="p-button-info w-10rem" />
						</router-link>
					</div>
				</template>
				<template #loading> Loading data. Please wait. </template>
				<Column field="email" header="Email" />
				<Column field="role" header="Kategori" />
				<Column header="Aksi" class="opsi">
					<template #body="{ data }">
						<div class="aksi">
							<span @click="softDelete(data.id_user)" class="badge badge-danger"
								>Nonaktifkan</span
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
			users: "users",
			loading: "loading",
		}),
	},
	methods: {
		...mapActions(["getUsers"]),
		softDelete(id) {
			this.$confirm.require({
				message: "Anda yakin ingin menonaktifkan user ini?",
				header: "Konfirmasi",
				icon: "pi pi-exclamation-triangle",
				accept: () => {
					this.$store
						.dispatch("softDeleteUser", id)
						.then(() => {
							this.$toast.add({
								severity: "success",
								summary: "Sukses",
								detail: "User Berhasil Dinonaktifkan!",
								life: 3000,
							});
						})
						.catch(() => {
							this.$toast.add({
								severity: "error",
								summary: "Gagal",
								detail: "User Gagal Dinonaktifkan!",
								life: 3000,
							});
						});
				},
				reject: () => {},
			});
		},
	},
	created() {
		this.getUsers();
	},
};
</script>
<style scoped>
.aksi {
	display: flex;
	gap: 1rem;
}
.opsi {
	width: 90px;
}
.badge {
	cursor: pointer;
}
</style>