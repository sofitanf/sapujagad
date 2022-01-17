<template>
	<div class="container">
		<div class="form form_center">
			<h1 class="form_judul">FORM PENGAJUAN REKAM KTP-EL</h1>
			<img
				class="form_gambar"
				src="../../../public/images/rekam-ktp.jpg"
				alt=""
			/>
			<div class="form_baris">
				<h2>DATA PELAPOR</h2>
			</div>
			<vee-form
				:validation-schema="schemaCurrent"
				class="vee-form"
				@submit="daftar"
			>
				<DataPelaporPemohon :rekamKtp="rekamKtp" />
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
					<vee-field type="file" name="lampiran1" @change="setLampiran1" />
					<error-message name="lampiran1" class="error" />
				</div>
				<div class="form_baris">
					<label for="">SURAT PERMOHONAN REKAM KTP-EL</label>
					<vee-field type="file" name="lampiran2" @change="setLampiran2" />
					<error-message name="lampiran2" class="error" />
				</div>
				<div class="form_baris">
					<label for=""
						>F-1.01 FORM BIODATA KELUARGA (Jika belum mempunyai Kartu
						Keluarga)</label
					>
					<div class="form_file_wrap">
						<img
							class="form_file"
							src="../../../public/file/lembar1-f101.png"
							alt=""
						/>
					</div>
					<label class="align-center" for="">LEMBAR 1</label>
					<vee-field type="file" name="lampiran3" @change="setLampiran3" />
					<error-message name="lampiran3" class="error" />
					<div class="form_file_wrap">
						<img
							class="form_file"
							src="../../../public/file/lembar2-f101.png"
							alt=""
						/>
					</div>
					<label class="align-center" for="">LEMBAR 2</label>
					<vee-field type="file" name="lampiran4" @change="setLampiran4" />
					<error-message name="lampiran4" class="error" />
				</div>
				<hr />
				<vee-field hidden name="kategori" value="Rekam KTP-El" />
				<Kirim :submitLoading="submitLoading" />
			</vee-form>
		</div>
	</div>
</template>

<script>
import daftar from "../mixins/daftar";
export default {
	data() {
		return {
			rekamKtp: true,
		};
	},
	mixins: [daftar],
	created() {
		let data = {
			...this.schema,
			lampiran2: "file|image|size:2048",
			ibu: { nama: true, regex: /^[A-Za-z .']+$/ },
			ayah: { nama: true, regex: /^[A-Za-z .']+$/ },
		};
		this.schemaCurrent = data;
	},
};
</script>
<style>
</style>