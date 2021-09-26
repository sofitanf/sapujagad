<template>
  <div class="container">
    <div class="form">
      <h1>Lihat Pengajuan Anda</h1>
      <p>Masukkan NIK pelapor</p>
      <vee-form :validation-schema="schema" class="form_button" @submit="cari">
        <div class="row">
          <vee-field class="nik_cari" type="text" name="nik" />
          <div class="align-center"></div>
          <button type="submit" class="button_search">CARI</button>
        </div>
        <error-message name="nik" class="error align-left" />
      </vee-form>
      <DataTable
        v-if="showTable"
        :value="pengajuanIndex"
        responsiveLayout="scroll"
        :paginator="true"
        :rows="10"
        dataKey="id"
        filterDisplay="menu"
        v-model:filters="filters"
        :loading="loading"
        :globalFilterFields="[
          'nama',
          'status',
          'kategori',
          'tgl_pengajuan',
          'jadwal',
          'catatan',
        ]"
      >
        <template #header>
          <div class="p-d-flex p-jc-between">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Cari" />
            </span>
          </div>
        </template>
        <template #empty> Data tidak ditemukan. </template>
        <template #loading> Loading data. Please wait. </template>
        <Column field="index" header="#" :sortable="true"></Column>
        <Column field="nama" header="Nama" :sortable="true"></Column>
        <Column field="kategori" header="Kategori" :sortable="true"></Column>
        <Column field="status" header="Status" :sortable="true">
          <template #body="{ data }">
            <span :class="'badge badge-' + badgeClass(data.status)">{{
              data.status
            }}</span>
          </template>
        </Column>
        <Column field="tgl_pengajuan" header="Tgl Pengajuan" :sortable="true">
          <template #body="{ data }">
            <span>
              {{ $d(new Date(data.tgl_pengajuan), "long", "id-ID") }}
            </span>
          </template>
        </Column>
        <Column field="jadwal" header="Tgl Pelayanan" :sortable="true">
          <template #body="{ data }">
            <span v-if="data.jadwal">{{
              $d(new Date(data.jadwal), "long", "id-ID")
            }}</span>
          </template>
        </Column>
        <Column field="jadwal" header="Pukul (WIB)" :sortable="true">
          <template #body="{ data }">
            <span v-if="data.jadwal">{{
              $d(new Date(data.jadwal), "short", "id-ID")
            }}</span>
          </template>
        </Column>
        <Column field="catatan" header="Catatan"></Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
import { FilterMatchMode } from "primevue/api";
import badge from "../mixins/badge";
export default {
  mixins: [badge],
  data() {
    return {
      schema: {
        nik: "required|numeric|nik_min:16|nik_max:16|min_value:3326019999999999|max_value:3326199999999999",
      },
      pengajuan: [],
      filters: null,
      loading: true,
      message: "",
    };
  },
  computed: {
    showTable() {
      return this.$route.query?.nik ? true : false;
    },
    pengajuanIndex() {
      return this.pengajuan.map((items, index) => ({
        ...items,
        index: index + 1,
      }));
    },
  },
  methods: {
    async fetchData() {
      await axios
        .get("/pengajuan/cek", { params: this.$route.query })
        .then(({ data }) => {
          this.pengajuan = data.data;
          this.loading = false;
        })
        .catch((error) => console.log(error));
    },
    cari(values) {
      this.$router.push({
        name: "lihat-pengajuan",
        query: { nik: values.nik },
      });

      this.fetchData();
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
  created() {
    this.fetchData();
    this.initFilters();
  },
  watch: {
    $route: "fetchData",
  },
};
</script>
<style>
</style>