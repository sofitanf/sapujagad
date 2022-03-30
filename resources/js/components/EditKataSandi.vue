<template>
	<div class="col-12 md:col-6">
		<div class="card">
			<h4 class="col-12">Edit Kata Sandi</h4>
			<vee-form
				class="col-12"
				:validation-schema="schema2"
				@submit="editPassword"
			>
				<div class="form_baris mb-3">
					<label for="">Kata Sandi</label>
					<vee-field name="password" type="password" class="p-inputtext" />
					<error-message name="password" class="error" />
				</div>
				<div class="form_baris mb-3">
					<label for="">Konfirmasi Kata Sandi</label>
					<vee-field
						name="confirm_password"
						type="password"
						class="p-inputtext"
					/>
					<error-message name="confirm_password" class="error" />
				</div>
				<Button type="submit" label="Ubah" class="p-button-raised w-10rem" />
			</vee-form>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			schema2: {
				password: "required|min:6",
				confirm_password: "required|min:6|confirmed:@password",
			},
		};
	},
	methods: {
		editPassword(values, { resetForm }) {
			this.$store
				.dispatch("updatePassword", { password_baru: values.password })
				.then(() => {
					this.$toast.add({
						severity: "success",
						summary: "Sukses",
						detail: "Password berhasil diubah!",
						life: 3000,
					});
				});
			resetForm();
		},
	},
};
</script>