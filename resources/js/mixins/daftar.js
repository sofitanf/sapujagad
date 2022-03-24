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
            fileLampiran1: null,
            fileLampiran2: null,
            fileLampiran3: null,
            fileLampiran4: null,
            fileLampiran5: null,
        };
    },
    computed: {
        ...mapGetters({
            user: "user",
        }),
    },
    methods: {
        getLampiran(value) {
            this.fileLampiran5 = value;
        },
        setLampiran(e, lampiran) {
            let file = e.target.files[0];

            let reader = new FileReader();
            reader.onload = (e) => {
                if (lampiran === 1) {
                    this.fileLampiran1 = e.target.result;
                }
                if (lampiran === 2) {
                    this.fileLampiran2 = e.target.result;
                }
                if (lampiran === 3) {
                    this.fileLampiran3 = e.target.result;
                }
                if (lampiran === 4) {
                    this.fileLampiran4 = e.target.result;
                }
            };

            reader.readAsDataURL(file);
        },
        setLampiran1(e) {
            this.setLampiran(e, 1);
        },
        setLampiran2(e) {
            this.setLampiran(e, 2);
        },
        setLampiran3(e) {
            this.setLampiran(e, 3);
        },
        setLampiran4(e) {
            this.setLampiran(e, 4);
        },
        onInvalidSubmit({ values, errors, results }) {
            console.log(values); // current form values
            console.log(errors); // a map of field names and their first error message
            console.log(results); // a detailed map of field names and their validation results
        },
        async daftar(values, { resetForm }) {
            this.submitLoading = true;
            values.lampiran1 = this.fileLampiran1;
            values.lampiran2 = this.fileLampiran2;
            values.lampiran3 = this.fileLampiran3;
            values.lampiran4 = this.fileLampiran4;
            values.lampiran5 = this.fileLampiran5;

            values["id_masyarakat"] = this.user.id_masyarakat;

            await this.$store
                .dispatch("addPengajuan", values)
                .then(() => {
                    this.submitLoading = false;

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
                .catch((error) => {
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

            resetForm();
        },
    },
};