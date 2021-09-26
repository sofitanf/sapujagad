 <template>
  <div class="grid p-fluid dashboard">
    <div class="col-12">
      <div class="card flex flex-column">
        <span class="text-2xl mb-3">Data User</span>
        <DataTable
          responsiveLayout="scroll"
          :value="users"
          :rows="10"
          dataKey="id"
          filterDisplay="menu"
          v-model:filters="filters"
          :loading="loading"
          :globalFilterFields="['nama', 'username', 'role']"
        >
          <template #header>
            <div class="flex justify-content-between">
              <span class="p-input-icon-left w-15rem">
                <i class="pi pi-search" />
                <InputText
                  v-model="filters['global'].value"
                  placeholder="Cari"
                />
              </span>
              <router-link to="/admin/create-user">
                <Button label="Tambah User" class="p-button-info w-10rem" />
              </router-link>
            </div>
          </template>
          <template #loading> Loading data. Please wait. </template>
          <!-- <Column field="index" header="#" :sortable="true" /> -->
          <Column field="nama" header="Nama" />
          <Column field="username" header="Username" />
          <Column field="role" header="Kategori" />
          <Column header="Aksi">
            <template #body="{ data }">
              <span
                @click="deleteUser(data.id)"
                class="badge badge-danger pi pi-trash"
              ></span>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>
<script>
import { FilterMatchMode } from "primevue/api";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      filters: null,
    };
  },
  computed: {
    ...mapGetters({
      users: "users",
      loading: "loading",
    }),
  },
  methods: {
    ...mapActions(["getUsers", "deleteUser"]),
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    deleteUser(id) {
      this.$confirm.require({
        message: "Anda yakin ingin menghapus user ini?",
        header: "Konfirmasi",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.$store
            .dispatch("deleteUser", id)
            .then(() => {
              this.$toast.add({
                severity: "success",
                summary: "Sukses",
                detail: "User Berhasil Dihapus!",
                life: 3000,
              });
            })
            .catch(() => {
              this.$toast.add({
                severity: "error",
                summary: "Gagal",
                detail: "User Gagal Dihapus!",
                life: 3000,
              });
            });
        },
        reject: () => {},
      });
    },
  },
  created() {
    this.initFilters();
    this.getUsers();
  },
};
</script>