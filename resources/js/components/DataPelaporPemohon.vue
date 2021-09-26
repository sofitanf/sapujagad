<template>
  <div class="form_baris">
    <label for="">NIK</label>
    <vee-field type="text" name="nik_pelapor" />
    <error-message name="nik_pelapor" class="error" />
  </div>
  <div class="form_baris">
    <label for="">NAMA</label>
    <vee-field type="text" name="nama_pelapor" />
    <error-message name="nama_pelapor" class="error" />
  </div>
  <div class="form_baris">
    <label for="">HUBUNGAN PELAPOR TERHADAP PEMOHON</label>
    <div class="row">
      <vee-field
        type="radio"
        id="ortu"
        name="hubungan"
        value="Orang Tua/Wali"
      />
      <label for="ortu">Orang Tua / Wali</label>
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
    <div class="row">
      <vee-field type="radio" id="lainnya" name="hubungan" value="Lainnya" />
      <label for="lainnya">Lainnya</label>
    </div>
    <error-message name="hubungan" class="error" />
  </div>
  <div class="form_baris">
    <label for="">NOMOR WA AKTIF</label>
    <vee-field type="text" name="no_wa" />
    <error-message name="no_wa" class="error" />
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
  <div class="form_baris">
    <label for="">JENIS KECACATAN</label>
    <p class="form_catatan">Abaikan jika pemohon tidak memiliki kecacatan</p>
    <vee-field name="kecacatan" id="kecacatan" as="select" class="select">
      <option value="">-- pilih --</option>
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
  <div class="form_baris">
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
      @change="pilihKecamatan()"
      name="kecamatan"
      as="select"
      class="select"
    >
      <option v-for="data in kecamatan" :key="data.id" :value="data.id">
        {{ data.nama }}
      </option>
    </vee-field>
    <error-message name="kecamatan" class="error" />
  </div>
  <div class="form_baris">
    <label for="">DESA</label>
    <vee-field name="kelurahan" as="select" class="select">
      <option v-for="data in kelurahan" :key="data.id" :value="data.id">
        {{ data.nama }}
      </option>
    </vee-field>
    <error-message name="kelurahan" class="error" />
  </div>
  <div class="form_baris">
    <label for="">ALAMAT</label>
    <p class="form_catatan">Contoh : Dukuh Sidokidul No 252 RT 03 RW 02</p>
    <vee-field as="textarea" type="text" name="alamat" rows="4" />
    <error-message name="alamat" class="error" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      kecamatan: [],
      kelurahan: [],
      id_kecamatan: null,
    };
  },
  methods: {
    fetchKecamatan() {
      axios
        .get("/kecamatan")
        .then(({ data }) => {
          this.kecamatan = data.data;
        })
        .catch((error) => console.log(error));
    },
    fetchKelurahan() {
      axios.get(`/kelurahan/${this.id_kecamatan}`).then(({ data }) => {
        this.kelurahan = data.data;
      });
    },
    pilihKecamatan() {
      this.fetchKelurahan();
    },
  },
  created() {
    this.fetchKecamatan();
  },
};
</script>