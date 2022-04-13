<template>
	<div class="container">
		<div class="form form_center">
			<div class="form_header">
				<h1 class="form_judul">FORM PENGAJUAN CETAK KTP-EL</h1>
				<img class="form_gambar" src="images/ktp.jpeg" alt="" />
			</div>
			<div class="form_baris">
				<h2>DATA PELAPOR</h2>
			</div>
			<vee-form :validation-schema="schema" class="vee-form" @submit="daftar">
				<DataPelaporPemohon
					:updateUnsavedFlag="updateUnsavedFlag"
					:setLampiran="setLampiran"
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
					<label for="">KARTU KELUARGA</label>
					<vee-field
						type="file"
						name="lampiran1"
						@change="setLampiran($event, 'lampiran1')"
						label="Kartu keluarga"
					/>
					<error-message name="lampiran1" class="error" />
				</div>
				<div class="form_baris">
					<label for=""
						>SURAT KEHILANGAN DARI KEPOLISIAN (Jika KTP-EL Hilang)</label
					>
					<vee-field
						type="file"
						name="lampiran2"
						@change="setLampiran($event, 'lampiran2')"
						label="Surat kehilangan dari kepolisian"
					/>
					<error-message name="lampiran2" class="error" />
				</div>
				<div class="form_baris">
					<label for=""
						>KTP LAMA (Jika Rusak atau Terdapat Perubahan Data)</label
					>
					<vee-field
						type="file"
						name="lampiran3"
						@change="setLampiran($event, 'lampiran3')"
						label="KTP lama"
					/>
					<error-message name="lampiran3" class="error" />
				</div>
				<hr />
				<vee-field hidden name="kategori" value="Cetak KTP-El" />
				<Kirim :submitLoading="submitLoading" />
			</vee-form>
		</div>
	</div>
</template>

<script>
import daftar from "../mixins/daftar";
export default {
	mixins: [daftar],
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