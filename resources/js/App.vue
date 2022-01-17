<template>
	<router-view></router-view>
	<Toast position="bottom-right" />
	<ConfirmDialog></ConfirmDialog>
</template>
<style >
span.p-menuitem-link {
	font-size: 1.5rem !important;
}

.form_center {
	display: flex;
	justify-content: center;
}

.button {
	background-color: var(--color-blue);
	border: none;
	padding: 1.5rem 0;
	color: var(--text-white);
	border-radius: 0.5rem;
	width: 35rem;
	cursor: pointer;
}

.form_button {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.form_baris {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.form_catatan {
	color: var(--color-blue);
}

.form_kirim {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.form_file_wrap {
	display: flex;
	justify-content: center;
}

.form_file {
	width: 30rem;
}

.vee-form {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.row {
	display: flex;
	gap: 0.5rem;
	align-items: center;
}

.select {
	padding: 1rem;
	border-radius: 0.5rem;
}

.error {
	color: red;
}

.badge {
	padding: 0.5rem;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
	cursor: pointer;
}

.badge-danger {
	background-color: #ffcdd2;
	color: #c63737;
}

.badge-success {
	background-color: #c8e6c9;
	color: #256029;
}

.badge-info {
	background-color: #b3e5fc;
	color: #23547b;
}

.badge-warning {
	background-color: #ffd8b2;
	color: #805b36;
}
</style>

