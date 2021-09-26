import camelCase from "lodash/camelCase";

// Mencari module .js di direktori
const requireModule = require.context(".", false, /\.js$/);

// Menyimpan module
const modules = {};

requireModule.keys().forEach((filename) => {
    if (filename === "./index.js") return;

    const moduleConfig = requireModule(filename);
    // Menghapus (.) pertama dan (.js)
    const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g, ""));
    modules[moduleName] = moduleConfig.default || moduleConfig;
});

export default modules;