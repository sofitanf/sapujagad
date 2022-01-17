<template>
	<div class="card grid p-fluid">
		<h4 class="col-12">Tambah User</h4>
		<vee-form class="col-12" :validation-schema="schema" @submit="tambahUser">
			<div class="form_baris mb-3">
				<label for="">Nama</label>
				<vee-field name="nama" id="nama" type="text" class="p-inputtext" />
				<error-message name="nama" class="error" />
			</div>
			<div class="form_baris mb-3">
				<label for="">Email</label>
				<vee-field name="email" id="email" type="email" class="p-inputtext" />
				<error-message name="email" class="error" />
				<div v-if="validation.email" class="error">
					{{ validation.email[0] }}
				</div>
			</div>
			<div class="form_baris mb-3">
				<label for="">Bagian</label>
				<vee-field
					name="bagian"
					id="bagian"
					as="select"
					class="p-dropdown w-full h-3rem"
				>
					<option value="">-- Pilih Bagian --</option>
					<option value="Pendaftaran Penduduk">Pendaftaran Penduduk</option>
					<option value="Pencatatan Sipil">Pencatatan Sipil</option>
					<option value="PIAK">PIAK</option>
					<option value="Server">Server</option>
				</vee-field>
				<error-message name="bagian" class="error" />
			</div>
			<div class="form_baris mb-5">
				<label for="">Kategori</label>
				<vee-field
					name="role"
					id="kategori"
					as="select"
					class="p-dropdown w-full h-3rem"
				>
					<option value="">-- Pilih Kategori --</option>
					<option value="Admin">Admin</option>
					<option value="Petugas">Petugas</option>
				</vee-field>
				<error-message name="role" class="error" />
			</div>
			<vee-field hidden name="password" value="capiloke" />
			<Button type="submit" label="Tambah" class="p-button-raised w-10rem" />
		</vee-form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			schema: {
				nama: "required|nama_alpha",
				role: "required",
				bagian: "required",
				email: "required|email",
			},
			validation: [],
		};
	},
	methods: {
		async tambahUser(values) {
			await this.$store
				.dispatch("addUser", values)
				.then(() => {
					this.$router.push("/admin/user", () => {
						this.$toast.add({
							severity: "success",
							summary: "Sukses",
							detail: "User Berhasil Ditambahkan!",
							life: 3000,
						});
					});
				})
				.catch((error) => {
					this.validation = error.response.data;
				});
		},
	},
};
</script>