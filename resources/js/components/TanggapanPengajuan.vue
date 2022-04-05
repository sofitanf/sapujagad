<template>
	<div v-if="petugas" class="card grid p-fluid">
		<h4 class="col-12">Tanggapan Data Pengajuan</h4>
		<form @submit.prevent="editPengajuan" class="col-12">
			<div class="form_baris mb-3">
				<label for="">Status Pengajuan</label>
				<select
					name="status"
					@change="pilihStatus()"
					v-model="form.status"
					id="status"
					class="w-full h-3rem"
					required
				>
					<option value="" selected disable hidden>
						Pilih Status Pengajuan
					</option>
					<option value="Diproses">Diproses</option>
					<option v-if="detail.status === 'Diproses'" value="Selesai">
						Selesai
					</option>
					<option v-if="detail.status !== 'Selesai'" value="Ditolak">
						Ditolak
					</option>
				</select>
			</div>
			<div v-if="showJadwal" class="form_baris mb-5">
				<label for="">Jadwal Pelayanan</label>
				<DatePicker
					v-model="form.jadwal"
					mode="dateTime"
					locale="id"
					is24hr
					:model-config="modelConfig"
				/>
			</div>

			<div class="form_baris mb-3">
				<label for="">Catatan</label>
				<textarea v-model="form.catatan" name="catatan" rows="5"></textarea>
			</div>
			<Button type="submit" label="Update" class="p-button-raised w-10rem" />
		</form>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	emits: ["updateData"],
	props: {
		detail: {
			required: true,
		},
	},
	data() {
		return {
			form: {
				status: null,
				jadwal: null,
				catatan: null,
			},
			showJadwal: false,
			modelConfig: {
				type: "string",
				mask: "iso",
				timeAdjust: "12:00:00",
			},
		};
	},
	computed: {
		...mapGetters({
			user: "user",
		}),
		petugas() {
			return this.$store.getters?.user?.role === "Petugas" ? true : false;
		},
	},
	methods: {
		async editPengajuan() {
			if (
				this.form.status === "Diproses" &&
				this.form.jadwal < this.detail.created_at
			) {
				this.$toast.add({
					severity: "error",
					summary: "Gagal",
					detail: "Tanggal pelayanan tidak boleh kurang dari tanggal pengajuan",
					life: 4000,
				});
			} else {
				const date =
					this.form.jadwal === null ? null : this.form.jadwal.slice(0, -6);
				await this.$store
					.dispatch("editPengajuan", {
						...this.form,
						jadwal: date,
						id_administrator: this.user.id_user,
						nama_administrator: this.user.nama,
						bagian_administrator: this.user.bagian,
					})
					.then(() => {
						this.$emit("updateData");
						setTimeout(() => {
							window.scrollTo(0, 0);
						}, 1000);

						this.$toast.add({
							severity: "success",
							summary: "Sukses",
							detail: "Pengajuan berhasil diupdate",
							life: 3000,
						});
					});
			}
		},
		pilihStatus() {
			this.form.status === "Diproses"
				? (this.showJadwal = true)
				: (this.showJadwal = false);
		},
	},
	created() {
		this.form.status = this.detail.status;
		this.form.jadwal = this.detail.jadwal;
		this.form.catatan = this.detail.catatan;
		this.pilihStatus();
	},
};
</script>