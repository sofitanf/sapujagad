<template>
	<div class="container">
		<div class="form form_center">
			<h1 class="form_judul">FORM PENGAJUAN KARTU IDENTITAS ANAK</h1>
			<img class="form_gambar" src="images/kia.jpeg" alt="" />
			<div class="form_baris">
				<h2>DATA PELAPOR</h2>
			</div>
			<vee-form :validation-schema="schema" class="vee-form" @submit="daftar">
				<DataPelaporPemohon
					:updateUnsavedFlag="updateUnsavedFlag"
					:setLampiran="setLampiran"
					:lansia="lansia"
				/>
				<hr />
				<div class="form_baris">
					<h2>UPLOAD DATA PENDUKUNG</h2>
					<p class="form_catatan">
						Data pendukung berupa file img, jpg dan png. Ukuran file maksimal
						2MB
					</p>
				</div>
				<div class="form_baris">
					<label for="">AKTA KELAHIRAN</label>
					<vee-field
						type="file"
						name="lampiran1"
						@change="setLampiran($event, 'lampiran1')"
					/>
					<error-message name="lampiran1" class="error" />
				</div>
				<div class="form_baris">
					<label for="">PAS PHOTO 2X3 (Bila Usia Anak 5 Tahun ke Atas)</label>
					<vee-field
						type="file"
						name="lampiran2"
						@change="setLampiran($event, 'lampiran2')"
					/>
					<error-message name="lampiran2" class="error" />
				</div>
				<hr />
				<vee-field hidden name="kategori" value="KIA" />
				<Kirim :submitLoading="submitLoading" />
			</vee-form>
		</div>
	</div>
</template>

<script>
import daftar from "../mixins/daftar";
export default {
	mixins: [daftar],
	data() {
		return {
			lansia: false,
		};
	},
	beforeRouteLeave(to, from, next) {
		if (!this.unsavedFlag) {
			next();
		} else {
			const leave = confirm(
				"Anda yakin ingin keluar dari halaman form pengajuan?"
			);
			next(leave);
		}
	},
};
</script>
<style>
</style>