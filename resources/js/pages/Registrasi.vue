<template>
	<div class="flex align-items-center flex-column justify-content-center p-8">
		<div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
			<div class="text-center mb-5">
				<img src="images/pekalongan.png" alt="Image" height="60" class="mb-3" />
				<div class="text-900 text-3xl font-medium mb-3">Sistem Sapu Jagad</div>
				<div class="text-900 text-3xl font-bold mb-3">Registrasi</div>
			</div>
			<vee-form :validation-schema="schema" @submit="daftar">
				<label for="nik" class="block text-900 font-medium mb-2">NIK</label>
				<vee-field
					id="nik"
					name="nik"
					type="text"
					class="w-full mb-3 p-inputtext"
					label="NIK"
				/>
				<error-message name="nik" class="error mb-3" />
				<div v-if="validation.nik" class="error">
					{{ validation.nik[0] }}
				</div>
				<label for="nama" class="block text-900 font-medium mb-2">Nama</label>
				<vee-field
					id="nama"
					name="nama"
					type="text"
					class="w-full mb-3 p-inputtext"
					label="Nama"
				/>
				<error-message name="nama" class="error mb-3" />
				<label for="username" class="block text-900 font-medium mb-2"
					>Username</label
				>
				<vee-field
					id="username"
					name="username"
					type="text"
					class="w-full mb-3 p-inputtext"
					label="Username"
				/>
				<error-message name="username" class="error mb-3" />
				<div v-if="validation.username" class="error">
					{{ validation.username[0] }}
				</div>
				<label for="telepon" class="block text-900 font-medium mb-2"
					>Nomor WA Aktif</label
				>
				<vee-field
					id="telepon"
					name="telepon"
					type="text"
					class="w-full mb-3 p-inputtext"
					label="Nomor hp"
				/>
				<error-message name="telepon" class="error mb-3" />
				<div v-if="validation.telepon" class="error">
					{{ validation.telepon[0] }}
				</div>
				<label for="password" class="block text-900 font-medium mb-2 mt-3"
					>Kata Sandi</label
				>
				<vee-field
					id="password"
					name="password"
					type="password"
					class="w-full mb-3 p-inputtext"
					label="Kata sandi"
				/>
				<error-message name="password" class="error mb-3" />
				<label
					for="confirm_password"
					class="block text-900 font-medium mb-2 mt-3"
					>Konfirmasi Kata Sandi</label
				>
				<vee-field
					id="confirm_password"
					name="confirm_password"
					type="password"
					class="w-full mb-3 p-inputtext"
					label="Konfirmasi kata sandi"
				/>
				<error-message name="confirm_password" class="error mb-3" />
				<Button
					type="submit"
					label="Daftar"
					icon="pi pi-user"
					class="w-full mt-3"
				></Button>
			</vee-form>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			schema: {
				nik: {
					required: true,
					numeric: true,
					nik_format: /^3326(0[1-9]|1[1-9])\d{9}/,
				},
				nama: { required: true, regex: /^[A-Za-z .']+$/ },
				telepon: { required: true, numeric: true, phone: /^08\d{9,11}$/ },
				username: "required|min:6",
				password: "required|min:6",
				confirm_password: "required|min:6|confirmed:@password",
			},
			validation: [],
		};
	},
	methods: {
		daftar(values) {
			axios
				.post("/registrasi", values)
				.then(() => {
					this.$toast.add({
						severity: "success",
						summary: "Sukses",
						detail: "Registrasi berhasil!",
						life: 3000,
					});
					setTimeout(() => {
						this.$router.push("/login");
					}, 3000);
				})
				.catch((error) => {
					this.validation = error.response.data;
					setTimeout(() => {
						this.validation = [];
					}, 5000);
				});
		},
	},
};
</script>
<style scoped>
label.block.text-900.font-medium.mb-2 {
	margin-top: 1.5rem;
}
</style>
