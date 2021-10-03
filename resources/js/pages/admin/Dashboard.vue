<template>
  <div class="grid p-fluid dashboard">
    <div class="col-12 lg:col-3">
      <div class="card flex justify-content-between align-items-start mb-0">
        <div>
          <span class="text-2xl">Terkirim</span>
          <span class="p-text-secondary block mt-2">Jumlah pengajuan</span>
        </div>
        <span class="bg-green-500 text-white py-2 px-3 text-2xl border-round">{{
          data.terkirim
        }}</span>
      </div>
    </div>
    <div class="col-12 lg:col-3">
      <div class="card flex justify-content-between align-items-start mb-0">
        <div>
          <span class="text-2xl">Diproses</span>
          <span class="p-text-secondary block mt-2">Jumlah pengajuan</span>
        </div>
        <span
          class="bg-purple-500 text-white py-2 px-3 text-2xl border-round"
          >{{ data.diproses }}</span
        >
      </div>
    </div>
    <div class="col-12 lg:col-3">
      <div class="card flex justify-content-between align-items-start mb-0">
        <div>
          <span class="text-2xl">Pemohon</span>
          <span class="p-text-secondary block mt-2">Jumlah pemohon</span>
        </div>
        <span class="bg-blue-500 text-white py-2 px-3 text-2xl border-round">{{
          data.pemohon
        }}</span>
      </div>
    </div>
    <div class="col-12 lg:col-3">
      <div class="card flex justify-content-between align-items-start mb-0">
        <div>
          <span class="text-2xl">Pelapor</span>
          <span class="p-text-secondary block mt-2">Jumlah pelapor</span>
        </div>
        <span
          class="bg-orange-500 text-white py-2 px-3 text-2xl border-round"
          >{{ data.pelapor }}</span
        >
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <FullCalendar :options="calendarOptions" />
      </div>
    </div>

    <div class="col-12">
      <div class="card flex flex-column">
        <span class="text-2xl mb-3">Total Pengajuan</span>
        <DataTable responsiveLayout="scroll" :value="kecamatanIndex">
          <Column field="index" header="#" :sortable="true" />
          <Column field="nama_kecamatan" header="Kecamatan" />
          <Column field="total" header="Total" :sortable="true" />
          <Column field="cetakKtp" header="Cetak KTP-El" :sortable="true" />
          <Column field="rekamKtp" header="Rekam KTP-El" :sortable="true" />
          <Column field="kia" header="KIA" :sortable="true" />
          <Column field="akta" header="Akta" :sortable="true" />
          <ColumnGroup type="footer">
            <Row>
              <Column footer="Total:" />
              <Column />
              <Column :footer="totalAll" />
              <Column :footer="kategori.cetakKTP" />
              <Column :footer="kategori.rekamKTP" />
              <Column :footer="kategori.kia" />
              <Column :footer="kategori.akta" />
            </Row>
          </ColumnGroup>
        </DataTable>
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <Chart type="bar" :data="basicData" :options="basicOptions" />
      </div>
    </div>
  </div>
</template>
<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

export default {
  components: { FullCalendar },
  data() {
    return {
      data: {},
      kecamatan: [],
      totalAll: null,
      kategori: {},
      loading: true,
      chart: {},
      basicData: {},
      basicOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
              stepSize: 1,
              beginAtZero: true,
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      },
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        locale: "id",
        events: [],
        eventClick: function (info) {
          alert("Event " + info.event.title);
        },
      },
    };
  },
  computed: {
    kecamatanIndex() {
      return this.kecamatan.map((items, i) => ({
        ...items,
        index: i + 1,
      }));
    },
  },
  methods: {
    async fetchTotal() {
      await axios.get("/dashboard/total").then(({ data }) => {
        this.data = data;
      });
    },
    async fetchJadwal() {
      await axios.get("/dashboard/jadwal").then(({ data }) => {
        this.calendarOptions.events = data.data;
      });
    },
    async fetchKecamatan() {
      await axios.get("/dashboard/tabel-kecamatan").then(({ data }) => {
        this.kecamatan = data.data;
      });
    },
    async fetchTotalAll() {
      await axios.get("/pengajuan/totalAll").then(({ data }) => {
        this.totalAll = data.data;
      });
    },
    async fetchKategori() {
      await axios
        .get("/pengajuan/total")
        .then(({ data }) => {
          this.kategori = data;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.fetchTotal();
    this.fetchJadwal();
    this.fetchKecamatan();
    this.fetchTotalAll();
    this.fetchKategori();
    axios.get("/dashboard/chart").then(({ data }) => {
      let bulanChart = [];
      let cetakKtp = [];
      let rekamKtp = [];
      let kia = [];
      let akta = [];

      data.bulan.map((bulan) => {
        let data = this.$d(new Date(bulan.bulan), "chart", "id-ID");
        if (bulanChart.includes(data) === false) bulanChart.push(data);
      });
      data.chart.map((item) => {
        cetakKtp.push(item.cetakKtp);
        rekamKtp.push(item.rekamKtp);
        kia.push(item.kia);
        akta.push(item.akta);
      });
      this.basicData = {
        labels: bulanChart,
        datasets: [
          {
            label: "Cetak KTP-El",
            backgroundColor: "#42A5F5",
            data: cetakKtp,
          },
          {
            label: "Rekam KTP-El",
            backgroundColor: "#FFA726",
            data: rekamKtp,
          },
          {
            label: "KIA",
            backgroundColor: "#FF6384",
            data: kia,
          },
          {
            label: "AKTA",
            backgroundColor: "#7E57C2",
            data: akta,
          },
        ],
      };
    });
  },
};
</script>