<template>
	<div class="form_baris">
		<label for="">NIK</label>
		<input type="text" :value="user.nik" disabled />
	</div>
	<div class="form_baris">
		<label for="">NAMA</label>
		<input type="text" :value="user.nama" disabled />
	</div>
	<div class="form_baris">
		<label for="">NOMOR WA AKTIF</label>
		<input type="text" :value="user.telepon" disabled />
	</div>
	<div class="form_baris">
		<label for="">HUBUNGAN PELAPOR TERHADAP PEMOHON</label>
		<div class="row">
			<vee-field type="radio" id="ortu" name="hubungan" value="Keluarga/Wali" />
			<label for="ortu">Keluarga / Wali</label>
		</div>
		<div class="row">
			<vee-field
				type="radio"
				id="kepala-desa"
				name="hubungan"
				value="Kepala Desa"
			/>
			<label for="kepala-desa">Kepala Desa</label>
		</div>
		<div class="row">
			<vee-field
				type="radio"
				id="kepala-sekolah"
				name="hubungan"
				value="Kepala Sekolah"
			/>
			<label for="kepala-sekolah">Kepala Sekolah</label>
		</div>
		<error-message name="hubungan" class="error" />
	</div>
	<div class="form_baris">
		<div class="h2">BUKTI KETERIKATAN PELAPOR TERHADAP PEMOHON</div>
		<p class="form_catatan">*Kartu Keluarga (Pelapor Keluarga/Wali)</p>
		<p class="form_catatan">
			*Surat Keterikatan Pelapor Terhadap Pemohon (Pelapor Kepala Desa/Kepala
			Sekolah)
		</p>
	</div>
	<div class="form_baris">
		<vee-field
			type="file"
			name="lampiran5"
			@change="setLampiran($event, 'lampiran5')"
		/>
		<error-message name="lampiran5" class="error" />
	</div>
	<hr />
	<div class="form_baris">
		<h2>DATA PEMOHON</h2>
		<p class="form_catatan">
			Orang yang akan diterbitkan dokumen kependudukannya
		</p>
	</div>
	<div class="form_baris">
		<label for="">NIK</label>
		<vee-field type="text" name="nik" />
		<error-message name="nik" class="error" />
	</div>
	<div class="form_baris">
		<label for="">NAMA</label>
		<vee-field type="text" name="nama" />
		<error-message name="nama" class="error" />
	</div>
	<div v-if="rekamKtp">
		<DataRekamKTP />
	</div>
	<div class="form_baris">
		<label for="">JENIS KECACATAN</label>
		<p class="form_catatan">Abaikan jika pemohon tidak memiliki kecacatan</p>
		<vee-field name="kecacatan" id="kecacatan" as="select" class="select">
			<option value="" selected>Pilih</option>
			<option value="Fisik">Fisik</option>
			<option value="Netra">Netra</option>
			<option value="Rungu">Rungu</option>
			<option value="Wicara">Wicara</option>
			<option value="Rungu Wicara">Rungu Wicara</option>
			<option value="Netra dan Fisik">Netra dan Fisik</option>
			<option value="Netra Rungu Wicara">Netra Rungu Wicara</option>
			<option value="Rungu Wicara Fisik">Rungu Wicara Fisik</option>
			<option value="Rungu Wicara Netra Fisik">Rungu Wicara Netra Fisik</option>
			<option value="Mental Intelegensi">Mental Intelegensi</option>
			<option value="Mental">Mental</option>
			<option value="Fisik dan Mental">Fisik dan Mental</option>
		</vee-field>
	</div>
	<div v-if="lansia" class="form_baris">
		<label for="">LANJUT USIA</label>
		<p class="form_catatan">
			Centang jika pemohon dalam kelompok lanjut usia (usia 60 tahun ke atas)
		</p>
		<div class="row">
			<vee-field type="checkbox" name="lansia" value="Ya" />
			<label for="">Ya</label>
		</div>
	</div>
	<hr />
	<div class="form_baris">
		<h2>DATA TEMPAT PELAYANAN</h2>
	</div>
	<div class="form_baris">
		<label for="">KECAMATAN</label>
		<vee-field
			v-model="id_kecamatan"
			@change="fetchKelurahan()"
			name="id_kecamatan"
			as="select"
			class="select"
		>
			<option value="" selected disable hidden>Pilih Kecamatan</option>
			<option v-for="data in kecamatan" :key="data.id" :value="data.id">
				{{ data.nama }}
			</option>
		</vee-field>
		<error-message name="id_kecamatan" class="error" />
	</div>
	<div class="form_baris">
		<label for="">KELURAHAN/DESA</label>
		<vee-field name="id_kelurahan" as="select" class="select">
			<option value="" selected disable hidden>Pilih Kelurahan/Desa</option>
			<option v-for="data in kelurahan" :key="data.id" :value="data.id">
				{{ data.nama }}
			</option>
		</vee-field>
		<error-message name="id_kelurahan" class="error" />
	</div>
	<div class="form_baris">
		<label for="">ALAMAT</label>
		<p class="form_catatan">Contoh : Dukuh Sidokidul No 252 RT 03 RW 02</p>
		<vee-field as="textarea" type="text" name="alamat" rows="4" />
		<error-message name="alamat" class="error" />
	</div>
</template>
<script>
import DataRekamKTP from "../components/DataRekamKTP.vue";
import { mapGetters } from "vuex";

export default {
	props: {
		rekamKtp: {
			type: Boolean,
		},
		lansia: {
			type: Boolean,
			default: true,
		},
		setLampiran: {
			type: Function,
		},
	},
	components: { DataRekamKTP },
	data() {
		return {
			kecamatan: [],
			kelurahan: [],
			id_kecamatan: null,
		};
	},
	computed: {
		...mapGetters({
			user: "user",
		}),
	},
	methods: {
		fetchKelurahan() {
			axios.get(`/kelurahan/${this.id_kecamatan}`).then(({ data }) => {
				this.kelurahan = data.data;
			});
		},
	},
	created() {
		axios
			.get("/kecamatan")
			.then(({ data }) => {
				this.kecamatan = data.data;
			})
			.catch((error) => console.log(error));
	},
};
</script>