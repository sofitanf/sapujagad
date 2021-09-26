import DataTable from "primevue/datatable";
import Avatar from "primevue/avatar";
import Column from "primevue/column";
import Card from "primevue/card";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Badge from "primevue/badge";
import Toast from "primevue/toast";
import Divider from "primevue/divider";
import Calendar from "primevue/calendar";
import ConfirmDialog from "primevue/confirmdialog";
import Password from "primevue/password";
import FileUpload from "primevue/fileupload";
import Image from "primevue/image";
import Chart from "primevue/chart";

export default {
    install(app) {
        app.component("DataTable", DataTable);
        app.component("Column", Column);
        app.component("Card", Card);
        app.component("Button", Button);
        app.component("InputText", InputText);
        app.component("Badge", Badge);
        app.component("Toast", Toast);
        app.component("ColumnGroup", ColumnGroup);
        app.component("Row", Row);
        app.component("Divider", Divider);
        app.component("Calendar", Calendar);
        app.component("ConfirmDialog", ConfirmDialog);
        app.component("Password", Password);
        app.component("Avatar", Avatar);
        app.component("FileUpload", FileUpload);
        app.component("Image", Image);
        app.component("Chart", Chart);
    },
};