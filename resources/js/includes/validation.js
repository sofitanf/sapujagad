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
} from "@vee-validate/rules";

export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);

        app.component("ErrorMessage", ErrorMessage);

        defineRule("required", required);
        defineRule("nik_min", min);
        defineRule("nik_max", max);
        defineRule("numeric", numeric);
        defineRule("alpha_spaces", alpha_spaces);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("min_value", min_value);
        defineRule("max_value", max_value);
        defineRule("image", image);
        defineRule("size", size);
        defineRule("email", email);
        defineRule("confirmed", confirmed);

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `${ctx.field} harus diisi`,
                    numeric: `${ctx.field} harus berupa angka`,
                    alpha_spaces: `${ctx.field} harus berupa huruf`,
                    min: `${ctx.field} terlalu pendek`,
                    max: `${ctx.field} terlalu panjang`,
                    email: `${ctx.field} tidak valid`,
                    confirmed: `${ctx.field} tidak valid`,
                    image: `File berupa img, jpg dan png`,
                    size: `Ukuran file maksimal 2MB`,
                    min_value: "NIK tidak dalam cakupan warga Kabupaten Pekalongan",
                    max_value: "NIK tidak dalam cakupan warga Kabupaten Pekalongan",
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