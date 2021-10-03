import DataPelaporPemohon from "../components/DataPelaporPemohon.vue";
import Kirim from "../components/Kirim.vue";

export default {
    components: { DataPelaporPemohon, Kirim },
    data() {
        return {
            schema: {
                nik_pelapor: "nik|nik_number|nik_min:16|nik_max:16|min_value:3326019999999999|max_value:3326199999999999",
                nama_pelapor: { nama: true, regex: /^[A-Za-z .']+$/ },
                no_wa: "no_wa|no_wa_number",
                nik: "nik|nik_number|nik_min:16|nik_max:16|min_value:3326019999999999|max_value:3326199999999999",
                nama: { nama: true, regex: /^[A-Za-z .']+$/ },
                kecamatan: "required",
                hubungan: "hubungan",
                kelurahan: "required",
                alamat: "required",
                lampiran1: "file|image|size:2048",
                lampiran2: "image|size:2048",
                lampiran3: "image|size:2048",
                lampiran4: "image|size:2048",
                pernyataan: "required",
            },
            schemaCurrent: {},
            submitLoading: false,
            fileLampiran1: null,
            fileLampiran2: null,
            fileLampiran3: null,
            fileLampiran4: null,
        };
    },
    methods: {
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
        async daftar(values, { resetForm }) {
            this.submitLoading = true;
            values.lampiran1 = this.fileLampiran1;
            values.lampiran2 = this.fileLampiran2;
            values.lampiran3 = this.fileLampiran3;
            values.lampiran4 = this.fileLampiran4;

            await this.$recaptchaLoaded();

            const token = await this.$recaptcha("register");
            values["g-recaptcha-response"] = token;

            await this.$store.dispatch("addPengajuan", values).then(() => {
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
            });

            resetForm();
        },
    },
};