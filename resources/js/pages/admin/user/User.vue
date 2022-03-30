 <template>
	<div class="grid p-fluid dashboard">
		<data-user-aktif />
		<data-user-non-aktif />
	</div>
</template>
<script>
import DataUserAktif from "../../../components/DataUserAktif.vue";
import DataUserNonAktif from "../../../components/DataUserNonAktif.vue";

export default {
	components: { DataUserAktif, DataUserNonAktif },
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