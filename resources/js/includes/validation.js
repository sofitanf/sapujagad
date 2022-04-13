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
    min,
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
        defineRule("numeric", numeric);
        defineRule("image", image);
        defineRule("size", size);
        defineRule("email", email);
        defineRule("min", min);
        defineRule("confirmed", confirmed);
        defineRule("phone", regex);
        defineRule("nik_format", regex);
        configure({
            generateMessage: (ctx) => {
                const messages = {
                    regex: "Nama tidak valid",
                    required: `${ctx.field} harus diisi`,
                    numeric: `${ctx.field} harus berupa angka`,
                    min: `${ctx.field} terlalu pendek`,
                    email: `${ctx.field} tidak valid`,
                    confirmed: `${ctx.field} tidak valid`,
                    image: `File berupa img, jpg dan png`,
                    size: `Ukuran file maksimal 2MB`,
                    nik_format: "NIK tidak dalam cakupan warga Kabupaten Pekalongan",
                    phone: "Nomor WA tidak valid",
                };

                const message = messages[ctx.rule.name] ?
                    messages[ctx.rule.name] :
                    `${ctx.field} ada kesalahan`;

                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: true,
            validateOnModelUpdate: true,
        });
    },
};