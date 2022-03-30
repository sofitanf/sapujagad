<template>
	<div class="flex align-items-center flex-column justify-content-center p-8">
		<div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
			<div class="text-center mb-5">
				<img src="images/pekalongan.png" alt="Image" height="60" class="mb-3" />
				<div class="text-900 text-3xl font-medium mb-3">Sistem Sapu Jagad</div>
				<div class="text-900 text-3xl font-bold mb-3">Login</div>
			</div>
			<vee-form :validation-schema="schema" @submit="login">
				<label for="email" class="block text-900 font-medium mb-2">Email</label>
				<vee-field
					id="email"
					name="email"
					type="text"
					class="w-full mb-3 p-inputtext"
				/>
				<error-message name="email" class="error mb-3" />

				<label for="password" class="block text-900 font-medium mb-2 mt-3"
					>Password</label
				>
				<vee-field
					id="password"
					name="password"
					type="password"
					class="w-full mb-3 p-inputtext"
				/>
				<error-message name="password" class="error mb-3" />

				<Button
					type="submit"
					label="Login"
					icon="pi pi-user"
					class="w-full mt-3"
				></Button>
			</vee-form>
		</div>
		<div class="ask">
			<p>Belum punya akun?</p>
			<router-link to="/registrasi">
				<p class="daftar">Daftar</p>
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			schema: {
				email: "required|email",
				password: "required|min:6",
			},
		};
	},
	methods: {
		login(values) {
			this.$store
				.dispatch("userLogin", values)
				.then(() => {
					this.$router.push("/");
				})
				.catch(() => {
					this.$toast.add({
						severity: "error",
						summary: "Gagal",
						detail: "Email atau password salah",
						life: 3000,
					});
				});
		},
	},
};
</script>
<style scoped>
.ask {
	display: flex;
	gap: 7px;
	padding-top: 2rem;
	font-size: 1.4rem;
}
.daftar {
	color: #3762f0;
	cursor: pointer;
}
</style>