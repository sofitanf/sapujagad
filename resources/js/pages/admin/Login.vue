<template>
	<div class="flex align-items-center justify-content-center p-8">
		<div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
			<div class="text-center mb-5">
				<img src="images/pekalongan.png" alt="Image" height="60" class="mb-3" />
				<div class="text-900 text-3xl font-medium mb-3">Sistem Sapu Jagad</div>
				<div class="text-900 text-3xl font-bold mb-3">Login</div>
			</div>
			<div>
				<vee-form :validation-schema="schema" @submit="login">
					<label for="username" class="block text-900 font-medium mb-2"
						>Username</label
					>
					<vee-field
						id="username"
						name="username"
						class="w-full mb-3 p-inputtext"
						label="Username"
					/>
					<error-message name="username" class="error mb-3" />

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

					<Button
						type="submit"
						label="Login"
						icon="pi pi-user"
						class="w-full mt-3"
					></Button>
				</vee-form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			schema: {
				username: "required",
				password: "required",
			},
		};
	},
	methods: {
		login(values) {
			this.$store
				.dispatch("login", values)
				.then(() => {
					this.$router.go("/admin/dashboard");
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