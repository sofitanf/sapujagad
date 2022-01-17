<template>
	<div class="flex align-items-center justify-content-center p-8">
		<div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
			<div class="text-center mb-5">
				<img
					src="../../../../public/images/pekalongan.png"
					alt="Image"
					height="60"
					class="mb-3"
				/>
				<div class="text-900 text-3xl font-medium mb-3">Sistem Sapu Jagad</div>
			</div>
			<div>
				<vee-form :validation-schema="schema" @submit="login">
					<label for="useremailname" class="block text-900 font-medium mb-2"
						>Email</label
					>
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
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			schema: {
				email: "required|min:5",
				password: "required|min:5",
			},
		};
	},
	methods: {
		async login(values) {
			await this.$store
				.dispatch("login", values)
				.then(() => {
					this.$router.go("/admin/dashboard");
				})
				.catch((error) => {
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