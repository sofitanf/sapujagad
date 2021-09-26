<template>
  <div class="grid p-fluid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h4 class="col-12">Edit Profil</h4>
        <div class="pl-2">
          <label for="">Email</label>
          <div
            v-if="!isEdit"
            class="flex justify-content-between align-items-center mt-3"
          >
            <p>{{ user.email }}</p>
            <span @click="editToggle()" class="pi pi-pencil mr-2"></span>
          </div>
          <div v-else class="mt-3">
            <div class="form_baris">
              <div class="flex justify-content-between align-items-center">
                <form @submit.prevent="editUser">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    class="p-inputtext flex-1 mr-3"
                    v-model="email"
                  />
                </form>
                <div class="flex">
                  <span @click="editUser()" class="pi pi-check mr-2"></span>
                  <span @click="editToggle()" class="pi pi-times"></span>
                </div>
              </div>
              <div v-if="validation.email" class="error mt-1">
                {{ validation.email[0] }}
              </div>
            </div>
          </div>
        </div>
        <div class="p-2">
          <div class="form_baris">
            <label for="">Foto Profil</label>
            <div class="avatar flex flex-column justify-content-start">
              <Image
                :src="
                  `/storage/avatar/${user?.avatar}` ||
                  '/storage/avatar/avatar.png'
                "
                alt="Image"
                width="150"
                class="mt-2 mb-2"
              />
              <div class="flex align-items-center">
                <div class="mr-2">
                  <input
                    type="file"
                    id="actual-btn"
                    @change="setLampiran"
                    hidden
                  />
                  <label class="label-button" for="actual-btn"
                    >Choose File</label
                  >
                </div>
                <Button
                  v-if="user.avatar"
                  @click="deleteAvatar()"
                  icon=" pi pi-trash "
                  class="p-button-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card">
        <h4 class="col-12">Edit Kata Sandi</h4>
        <vee-form
          class="col-12"
          :validation-schema="schema2"
          @submit="editPassword"
        >
          <div class="form_baris mb-3">
            <label for="">Kata Sandi</label>
            <vee-field name="password" type="password" class="p-inputtext" />
            <error-message name="password" class="error" />
          </div>
          <div class="form_baris mb-3">
            <label for="">Konfirmasi Kata Sandi</label>
            <vee-field
              name="confirm_password"
              type="password"
              class="p-inputtext"
            />
            <error-message name="confirm_password" class="error" />
          </div>
          <Button type="submit" label="Ubah" class="p-button-raised w-10rem" />
        </vee-form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      schema2: {
        password: "required|min:6",
        confirm_password: "required|min:6|confirmed:@password",
      },
      email: null,
      lampiran: null,
      validation: [],
      isEdit: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
      avatar: "avatar",
    }),
  },
  methods: {
    ...mapActions(["deleteAvatar"]),
    setLampiran(e) {
      let file = e.target.files[0];

      let reader = new FileReader();
      reader.onload = (e) => {
        this.updateAvatar(e.target.result);
      };

      reader.readAsDataURL(file);
    },
    async updateAvatar(file) {
      await this.$store.dispatch("updateAvatar", { avatar: file });
    },
    editToggle() {
      this.isEdit = !this.isEdit;
    },
    async editUser() {
      if (this.user.email !== this.email) {
        await this.$store
          .dispatch("updateUser", { email: this.email })
          .then(() => {
            this.$toast.add({
              severity: "success",
              summary: "Sukses",
              detail: "Email berhasil diubah!",
              life: 3000,
            });
          })
          .catch((error) => {
            this.$toast.add({
              severity: "error",
              summary: "Gagal",
              detail: "Email gagal diubah!",
              life: 3000,
            });
          });
      }
      this.email = this.user.email;
      this.isEdit = false;
    },
    async editPassword(values, { resetForm }) {
      await this.$store
        .dispatch("updatePassword", { password_baru: values.password })
        .then(() => {
          this.$toast.add({
            severity: "success",
            summary: "Sukses",
            detail: "Password berhasil diubah!",
            life: 3000,
          });
        });
      resetForm();
    },
  },
  created() {
    this.email = this.user.email;
  },
};
</script>
<style>
.avatar {
  margin-top: -1rem;
}
.label-button {
  background-color: indigo;
  color: white;
  padding: 0.7rem 1.3rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style>