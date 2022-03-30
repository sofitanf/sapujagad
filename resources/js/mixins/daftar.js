import DataPelaporPemohon from "../components/DataPelaporPemohon.vue";
import Kirim from "../components/Kirim.vue";
import { mapGetters } from "vuex";

export default {
    components: { DataPelaporPemohon, Kirim },
    data() {
        return {
            schema: {
                nik: "nik|nik_number|nik_min:16|nik_max:16|min_value:3326019999999999|max_value:3326199999999999",
                nama: { nama: true, regex: /^[A-Za-z .']+$/ },
                id_kecamatan: "required",
                hubungan: "hubungan",
                id_kelurahan: "required",
                alamat: "required",
                lampiran1: "file|image|size:2048",
                lampiran2: "image|size:2048",
                lampiran3: "image|size:2048",
                lampiran4: "image|size:2048",
                lampiran5: "file|image|size:2048",
                pernyataan: "required",
            },
            schemaCurrent: {},
            submitLoading: false,
            lampiran: {
                lampiran1: null,
                lampiran2: null,
                lampiran3: null,
                lampiran4: null,
                lampiran5: null,
            },
        };
    },
    computed: {
        ...mapGetters({
            user: "user",
        }),
    },
    methods: {
        setLampiran(e, lampiran) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = async(e) => {
                this.lampiran[lampiran] = await e.target.result;
            };
            reader.readAsDataURL(file);
        },
        daftar(values, { resetForm }) {
            this.submitLoading = true;
            values["id_masyarakat"] = this.user.id_masyarakat;
            let fixValues = Object.assign(values, this.lampiran);

            this.$store
                .dispatch("addPengajuan", fixValues)
                .then(() => {
                    this.submitLoading = false;
                    resetForm();

                    setTimeout(() => {
                        window.scrollTo(0, 0);
                    }, 1000);

                    this.$toast.add({
                        severity: "success",
                        summary: "Sukses",
                        detail: "Pengajuan berhasil!",
                        life: 3000,
                    });
                })
                .catch(() => {
                    this.submitLoading = false;

                    setTimeout(() => {
                        window.scrollTo(0, 0);
                    }, 1000);
                    this.$toast.add({
                        severity: "error",
                        summary: "Gagal",
                        detail: "Pengajuan sudah terekam!",
                        life: 3000,
                    });
                });
        },
    },
};