import {
    Form as VeeForm,
    Field as VeeField,
    ErrorMessage,
    defineRule,
    configure,
} from "vee-validate";
import {
    required,
    numeric,
    alpha_spaces,
    min,
    max,
    min_value,
    max_value,
    image,
    size,
    email,
    confirmed,
    regex,
} from "@vee-validate/rules";

export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);

        app.component("ErrorMessage", ErrorMessage);

        defineRule("regex", regex);
        defineRule("required", required);
        defineRule("nik", required);
        defineRule("nik_number", numeric);
        defineRule("nama", required);
        defineRule("no_wa", required);
        defineRule("no_wa_number", numeric);
        defineRule("hubungan", required);
        defineRule("file", required);
        defineRule("nik_min", min);
        defineRule("nik_max", max);
        defineRule("numeric", numeric);
        defineRule("nama_alpha", alpha_spaces);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("min_value", min_value);
        defineRule("max_value", max_value);
        defineRule("image", image);
        defineRule("size", size);
        defineRule("email", email);
        defineRule("confirmed", confirmed);
        defineRule("phone", regex);
        defineRule("nik_format", regex);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    regex: "Nama tidak valid",
                    nik: "NIK harus diisi",
                    nik_number: "NIK harus berupa angka",
                    nama: "Nama harus diisi",
                    no_wa: "Nomor WA harus diisi",
                    no_wa_number: "Nomor WA harus berupa angka",
                    hubungan: "Hubungan terhadap pemohon harus diisi",
                    file: "File harus diisi",
                    required: `${ctx.field} harus diisi`,
                    numeric: `${ctx.field} harus berupa angka`,
                    nama_alpha: "Nama harus berupa huruf",
                    min: `${ctx.field} terlalu pendek`,
                    max: `${ctx.field} terlalu panjang`,
                    email: `${ctx.field} tidak valid`,
                    confirmed: `${ctx.field} tidak valid`,
                    image: `File berupa img, jpg dan png`,
                    size: `Ukuran file maksimal 2MB`,
                    min_value: "NIK tidak dalam cakupan warga Kabupaten Pekalongan",
                    max_value: "NIK tidak dalam cakupan warga Kabupaten Pekalongan",
                    nik_format: "NIK tidak dalam cakupan warga Kabupaten Pekalongan",
                    phone: "Nomor WA tidak valid",
                    nik_min: "NIK harus berjumlah 16 angka",
                    nik_max: "NIK harus berjumlah 16 angka",
                };

                const message = messages[ctx.rule.name] ?
                    messages[ctx.rule.name] :
                    `${ctx.field} adalah kesalahan`;

                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: true,
            validateOnModelUpdate: true,
        });
    },
};