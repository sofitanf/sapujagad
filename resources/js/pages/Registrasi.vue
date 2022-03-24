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
				/>
				<error-message name="nama" class="error mb-3" />
				<label for="email" class="block text-900 font-medium mb-2">Email</label>
				<vee-field
					id="email"
					name="email"
					type="text"
					class="w-full mb-3 p-inputtext"
				/>
				<error-message name="email" class="error mb-3" />
				<div v-if="validation.email" class="error">
					{{ validation.email[0] }}
				</div>
				<label for="telepon" class="block text-900 font-medium mb-2"
					>Nomor WA Aktif</label
				>
				<vee-field
					id="telepon"
					name="telepon"
					type="text"
					class="w-full mb-3 p-inputtext"
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
				/>
				<error-message name="confirm_password" class="error mb-3" />
				<vee-field hidden name="role" value="Masyarakat" />
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
				nik: "nik|nik_number|nik_min:16|nik_max:16|min_value:3326019999999999|max_value:3326199999999999",
				nama: { nama: true, regex: /^[A-Za-z .']+$/ },
				telepon: "no_wa|no_wa_number",
				telepon: { no_wa: true, no_wa_number: true, phone: /^08\d{9,11}$/ },
				email: "required|email",
				password: "required|min:6",
				confirm_password: "required|min:6|confirmed:@password",
			},
			validation: [],
		};
	},
	methods: {
		async daftar(values) {
			await axios
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
