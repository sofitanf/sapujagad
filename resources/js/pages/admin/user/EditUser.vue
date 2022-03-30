<template>
	<div class="grid p-fluid">
		<edit-profil />
		<edit-kata-sandi />
	</div>
</template>
<script>
import EditProfil from "../../../components/EditProfil.vue";
import EditKataSandi from "../../../components/EditKataSandi.vue";

export default {
	components: { EditProfil, EditKataSandi },
};
</script>
<style>
.avatar {
	margin-top: -1rem;
}
.label-button {
	background-color: indigo;
	color: white;
	padding: 0.7rem 1.3rem;
	font-family: sans-serif;
	border-radius: 0.3rem;
	cursor: pointer;
	margin-top: 1rem;
}
</style>