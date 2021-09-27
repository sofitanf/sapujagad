<template>
  <div class="col-12 mb-3" v-if="data.status === 'Diproses'">
    <Button @click="chat" label="Kirim Pesan" class="p-button-raised w-10rem" />
  </div>
  <div>
    <div class="card grid p-fluid">
      <h4 class="col-12">Data Pengajuan</h4>
      <div class="col-12 md:col-6">
        <div class="flex">
          <div>
            <p>Tanggal Pengajuan</p>
            <p>Kategori</p>
            <p>Diupdate Oleh</p>
          </div>
          <div class="mr-2">
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div>
            <p v-if="data.created_at">
              {{ $d(new Date(data.created_at), "long", "id-ID") }}
            </p>
            <p>{{ data.kategori }}</p>
            <p v-if="data.diupdate">
              {{ data.diupdate }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-6">
        <div class="flex">
          <div>
            <p>Tanggal Pelayanan</p>
            <p>Jam Pelayanan</p>
            <p>Status</p>
          </div>
          <div class="mr-2">
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div>
            <p v-if="data.jadwal">
              {{ jadwal }}
            </p>
            <p v-if="data.jadwal">
              {{ jam }}
            </p>
            <p>{{ data.status }}</p>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-4">
        <Divider align="left">
          <span>Pelapor</span>
        </Divider>
        <div class="flex">
          <div>
            <p>NIK</p>
            <p>Nama</p>
            <p>Nomor WA</p>
            <p>Hubungan Thd Pemohon</p>
          </div>
          <div class="mr-2">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div>
            <p>{{ data.nik_pelapor }}</p>
            <p>{{ data.nama_pelapor }}</p>
            <p v-if="data.no_wa">
              {{ data.no_wa }}
            </p>
            <p v-if="data.hubungan">
              {{ data.hubungan }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-4">
        <Divider align="left">
          <span>Pemohon</span>
        </Divider>
        <div class="flex">
          <div>
            <p>NIK</p>
            <p>Nama</p>
            <p>Ibu</p>
            <p>Ayah</p>
            <p>Jenis Kecacatan</p>
            <p>Lanjut Usia</p>
          </div>
          <div class="mr-2">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div>
            <p>{{ data.nik }}</p>
            <p>{{ data.nama }}</p>
            <p v-if="data.ibu">
              {{ data.ibu }}
            </p>
            <p v-if="data.ayah">
              {{ data.ayah }}
            </p>
            <p>
              {{ data.kecacatan }}
            </p>
            <p>
              {{ data.lansia }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 md:col-4">
        <Divider align="left">
          <span>Tempat Pelayanan</span>
        </Divider>
        <div class="flex">
          <div>
            <p>Alamat</p>
            <p>Desa/Kelurahan</p>
            <p>Kecamatan</p>
          </div>
          <div class="mr-2">
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div>
            <p>{{ data.alamat }}</p>
            <p>{{ data.nama_kelurahan }}</p>
            <p>{{ data.nama_kecamatan }}</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="flex">
          <p>Catatan</p>
          <div class="mr-2">
            <p>:</p>
          </div>
          <p v-if="data.catatan">{{ data.catatan }}</p>
        </div>
      </div>
      <div class="col-12 sm:col-3">
        <Button
          :label="label1"
          @click="showLampiran1"
          class="p-button-raised"
        />
      </div>
      <div class="col-12 sm:col-3">
        <Button
          v-if="data.lampiran2"
          :label="label2"
          @click="showLampiran2"
          class="p-button-raised"
        />
      </div>
      <div class="col-12 sm:col-3">
        <Button
          v-if="data.lampiran3"
          :label="label3"
          @click="showLampiran3"
          class="p-button-raised"
        />
      </div>
      <div class="col-12 sm:col-3">
        <Button
          v-if="data.lampiran4"
          :label="label4"
          @click="showLampiran4"
          class="p-button-raised"
        />
      </div>
    </div>
    <div class="card grid p-fluid">
      <h4 class="col-12">Edit Data Pengajuan</h4>
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
            <option value="">-- Pilih Status Pengajuan --</option>
            <option value="Diproses">Diproses</option>
            <option value="Selesai">Selesai</option>
            <option value="Ditolak">Ditolak</option>
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
        <Button type="submit" label="Update" class="p-button-raised" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dataImport: {},
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
      lampiran1: [],
      lampiran2: [],
      lampiran3: [],
      lampiran4: [],
      label1: "",
      label2: "",
      label3: "",
      label4: "",
    };
  },
  computed: {
    ...mapGetters({
      data: "detailPengajuan",
    }),
    jadwal() {
      return this.$d(new Date(this.data.jadwal), "long", "id-ID");
    },
    jam() {
      return this.$d(new Date(this.data.jadwal), "short", "id-ID");
    },
  },
  methods: {
    async fetchPengajuan() {
      await this.$store.dispatch("getDetailPengajuan", this.$route.params.id);
      this.form.jadwal = this.data.jadwal;
      this.form.catatan = this.data.catatan;

      if (this.data.kategori === "Cetak KTP-El") {
        this.label1 = "Kartu Keluarga";
        this.label2 = "Surat Kehilangan";
        this.label3 = "KTP Lama";
      }

      if (this.data.kategori === "Rekam KTP-El") {
        this.label1 = "Kartu Keluarga";
        this.label2 = "Surat Permohonan";
        this.label3 = "F-1.01 (Lembar 1)";
        this.label4 = "F-1.01 (Lembar 2)";
      }

      if (this.data.kategori === "KIA") {
        this.label1 = "AKTA";
        this.label2 = "Pas Photo";
      }

      if (this.data.kategori === "AKTA") {
        this.label1 = "Kartu Keluarga";
        this.label2 = "Surat Nikah Orang Tua (Lembar 1)";
        this.label3 = "Surat Nikah Orang Tua (Lembar 2)";
        this.label4 = "Surat Kelahiran / SPTJM";
      }

      this.lampiran1.push(`/storage/pengajuan/${this.data.lampiran1}`);
      this.lampiran2.push(`/storage/pengajuan/${this.data?.lampiran2}`);
      this.lampiran3.push(`/storage/pengajuan/${this.data?.lampiran3}`);
      this.lampiran4.push(`/storage/pengajuan/${this.data?.lampiran4}`);
    },
    showLampiran1() {
      this.$viewerApi({
        images: this.lampiran1,
      });
    },
    showLampiran2() {
      this.$viewerApi({
        images: this.lampiran2,
      });
    },
    showLampiran3() {
      this.$viewerApi({
        images: this.lampiran3,
      });
    },
    showLampiran4() {
      this.$viewerApi({
        images: this.lampiran4,
      });
    },
    async editPengajuan() {
      const date = this.form.jadwal.slice(0, -6);
      await this.$store
        .dispatch("editPengajuan", { ...this.form, jadwal: date })
        .then(() => {
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 1000);

          this.$toast.add({
            severity: "success",
            summary: "Sukses",
            detail: "Pengajuan berhasil diupdate",
            life: 3000,
          });
          this.fetchPengajuan();
        });
    },
    pilihStatus() {
      this.form.status === "Diproses"
        ? (this.showJadwal = true)
        : (this.showJadwal = false);
    },
    chat() {
      const message = `Pemohon yang terhormat, tim kami akan menuju ke ${this.data.alamat} pada ${this.jadwal} pukul ${this.jam} WIB. -TIM SAPU JAGAD. DINDUKCAPIL KAB.PEKALONGAN`;
      window.open(
        `https://api.whatsapp.com/send?phone=${this.data.no_wa}&text=${message}&source=&data`,
        "_blank"
      );
    },
  },
  created() {
    this.fetchPengajuan();
  },
};
</script>