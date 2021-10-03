"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_RekamKTP_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataPelaporPemohon.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataPelaporPemohon.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DataRekamKTP_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DataRekamKTP.vue */ "./resources/js/components/DataRekamKTP.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["rekamKtp"],
  components: {
    DataRekamKTP: _components_DataRekamKTP_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      kecamatan: [],
      kelurahan: [],
      id_kecamatan: null
    };
  },
  methods: {
    fetchKecamatan: function fetchKecamatan() {
      var _this = this;

      axios.get("/kecamatan").then(function (_ref) {
        var data = _ref.data;
        _this.kecamatan = data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    fetchKelurahan: function fetchKelurahan() {
      var _this2 = this;

      axios.get("/kelurahan/".concat(this.id_kecamatan)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.kelurahan = data.data;
      });
    },
    pilihKecamatan: function pilihKecamatan() {
      this.fetchKelurahan();
    }
  },
  created: function created() {
    this.fetchKecamatan();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    submitLoading: {
      type: Boolean,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/RekamKTP.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/RekamKTP.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_daftar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/daftar */ "./resources/js/mixins/daftar.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      rekamKtp: true
    };
  },
  mixins: [_mixins_daftar__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    var data = _objectSpread(_objectSpread({}, this.schema), {}, {
      lampiran2: "file|image|size:2048",
      ibu: {
        nama: true,
        regex: /^[A-Za-z .']+$/
      },
      ayah: {
        nama: true,
        regex: /^[A-Za-z .']+$/
      }
    });

    this.schemaCurrent = data;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataPelaporPemohon.vue?vue&type=template&id=38cd19dc":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataPelaporPemohon.vue?vue&type=template&id=38cd19dc ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "form_baris"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "NIK", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "form_baris"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "NAMA", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "form_baris"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "HUBUNGAN PELAPOR TERHADAP PEMOHON", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "row"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "ortu"
}, "Orang Tua / Wali", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "row"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "kepala-desa"
}, "Kepala Desa", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "row"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "kepala-sekolah"
}, "Kepala Sekolah", -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "row"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "lainnya"
}, "Lainnya", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "form_baris"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "NOMOR WA AKTIF", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form_baris"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "DATA PEMOHON"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "form_catatan"
}, " Orang yang akan diterbitkan dokumen kependudukannya ")], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "form_baris"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "NIK", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "form_baris"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "NAMA", -1
/* HOISTED */
);

var _hoisted_23 = {
  key: 0
};
var _hoisted_24 = {
  "class": "form_baris"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "JENIS KECACATAN", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "form_catatan"
}, "Abaikan jika pemohon tidak memiliki kecacatan", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: "",
  disable: "",
  hidden: ""
}, "Pilih", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Fisik"
}, "Fisik", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Netra"
}, "Netra", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Rungu"
}, "Rungu", -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Wicara"
}, "Wicara", -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Rungu Wicara"
}, "Rungu Wicara", -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Netra dan Fisik"
}, "Netra dan Fisik", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Netra Rungu Wicara"
}, "Netra Rungu Wicara", -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Rungu Wicara Fisik"
}, "Rungu Wicara Fisik", -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Rungu Wicara Netra Fisik"
}, "Rungu Wicara Netra Fisik", -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Mental Intelegensi"
}, "Mental Intelegensi", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Mental"
}, "Mental", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Fisik dan Mental"
}, "Fisik dan Mental", -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "form_baris"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "LANJUT USIA", -1
/* HOISTED */
);

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "form_catatan"
}, " Centang jika pemohon dalam kelompok lanjut usia (usia 60 tahun ke atas) ", -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "row"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "Ya", -1
/* HOISTED */
);

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form_baris"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "DATA TEMPAT PELAYANAN")], -1
/* HOISTED */
);

var _hoisted_47 = {
  "class": "form_baris"
};

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "KECAMATAN", -1
/* HOISTED */
);

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: "",
  disable: "",
  hidden: ""
}, "Pilih Kecamatan", -1
/* HOISTED */
);

var _hoisted_50 = ["value"];
var _hoisted_51 = {
  "class": "form_baris"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "KELURAHAN/DESA", -1
/* HOISTED */
);

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: "",
  disable: "",
  hidden: ""
}, "Pilih Kelurahan/Desa", -1
/* HOISTED */
);

var _hoisted_54 = ["value"];
var _hoisted_55 = {
  "class": "form_baris"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "ALAMAT", -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "form_catatan"
}, "Contoh : Dukuh Sidokidul No 252 RT 03 RW 02", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vee_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vee-field");

  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");

  var _component_DataRekamKTP = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataRekamKTP");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "text",
    name: "nik_pelapor"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "nik_pelapor",
    "class": "error"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "text",
    name: "nama_pelapor"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "nama_pelapor",
    "class": "error"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "radio",
    id: "ortu",
    name: "hubungan",
    value: "Orang Tua/Wali"
  }), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "radio",
    id: "kepala-desa",
    name: "hubungan",
    value: "Kepala Desa"
  }), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "radio",
    id: "kepala-sekolah",
    name: "hubungan",
    value: "Kepala Sekolah"
  }), _hoisted_12]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "radio",
    id: "lainnya",
    name: "hubungan",
    value: "Lainnya"
  }), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "hubungan",
    "class": "error"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "text",
    name: "no_wa"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "no_wa",
    "class": "error"
  })]), _hoisted_17, _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "text",
    name: "nik"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "nik",
    "class": "error"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "text",
    name: "nama"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "nama",
    "class": "error"
  })]), $props.rekamKtp ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataRekamKTP)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    name: "kecacatan",
    id: "kecacatan",
    as: "select",
    "class": "select"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "checkbox",
    name: "lansia",
    value: "Ya"
  }), _hoisted_44])]), _hoisted_45, _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    modelValue: $data.id_kecamatan,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.id_kecamatan = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.pilihKecamatan();
    }),
    name: "kecamatan",
    as: "select",
    "class": "select"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_49, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.kecamatan, function (data) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: data.id,
          value: data.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.nama), 9
        /* TEXT, PROPS */
        , _hoisted_50);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "kecamatan",
    "class": "error"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    name: "kelurahan",
    as: "select",
    "class": "select"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_53, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.kelurahan, function (data) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: data.id,
          value: data.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.nama), 9
        /* TEXT, PROPS */
        , _hoisted_54);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "kelurahan",
    "class": "error"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    as: "textarea",
    type: "text",
    name: "alamat",
    rows: "4"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "alamat",
    "class": "error"
  })])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=template&id=1809edf8&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=template&id=1809edf8&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1809edf8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "form_baris mb"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "NAMA IBU", -1
  /* HOISTED */
  );
});

var _hoisted_3 = {
  "class": "form_baris"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": ""
  }, "NAMA AYAH", -1
  /* HOISTED */
  );
});

function render(_ctx, _cache) {
  var _component_vee_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vee-field");

  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "text",
    name: "ibu"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "ibu",
    "class": "error"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "text",
    name: "ayah"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    name: "ayah",
    "class": "error"
  })])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=template&id=a3b0f8c6&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=template&id=a3b0f8c6&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a3b0f8c6"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "form_kirim"
};
var _hoisted_2 = {
  "class": "form_pernyataan"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, " Saya menyatakan data yang dikirim adalah data benar dan jika dikemudian hari terjadi masalah hukum maka saya siap mempertanggungjawabkannya ", -1
  /* HOISTED */
  );
});

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "form_peringatan"
  }, " Sebelum klik tombol \"KIRIM\" pastikan pengisian form sudah sesuai dengan persyaratan ", -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "align-center"
};
var _hoisted_6 = ["disabled"];
var _hoisted_7 = {
  key: 0,
  "class": "pi pi-spin pi-spinner"
};
var _hoisted_8 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vee_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vee-field");

  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    type: "checkbox",
    name: "pernyataan",
    value: "Ya"
  }), _hoisted_3]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
    "class": "error text-left",
    name: "pernyataan"
  }), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
    hidden: "",
    name: "g-recaptcha-response"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $props.submitLoading,
    type: "submit",
    "class": "button"
  }, [$props.submitLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_7)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_8, "KIRIM"))], 8
  /* PROPS */
  , _hoisted_6)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/RekamKTP.vue?vue&type=template&id=5e446fcc":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/RekamKTP.vue?vue&type=template&id=5e446fcc ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _public_images_rekam_ktp_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/images/rekam-ktp.jpg */ "./public/images/rekam-ktp.jpg");
/* harmony import */ var _public_file_lembar1_f101_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/file/lembar1-f101.png */ "./public/file/lembar1-f101.png");
/* harmony import */ var _public_file_lembar2_f101_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/file/lembar2-f101.png */ "./public/file/lembar2-f101.png");




var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "form form_center"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "form_judul"
}, "FORM PENGAJUAN REKAM KTP-EL", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "form_gambar",
  src: _public_images_rekam_ktp_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form_baris"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "DATA PELAPOR"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "form_catatan"
}, " Wali, Orang Tua, Kepala Desa, Kepala Sekolah, Penanggung Jawab ")], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form_baris"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "UPLOAD DATA PENDUKUNG"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "form_catatan"
}, " Data pendukung berupa file img, jpg dan png. Ukuran file maksimal 2MB ")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "form_baris"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "KARTU KELUARGA", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "form_baris"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "SURAT PERMOHONAN REKAM KTP-EL", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "form_baris"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": ""
}, "F-1.01 FORM BIODATA KELUARGA (Jika belum mempunyai Kartu Keluarga)", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form_file_wrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "form_file",
  src: _public_file_lembar1_f101_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "align-center",
  "for": ""
}, "LEMBAR 1", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form_file_wrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "form_file",
  src: _public_file_lembar2_f101_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "align-center",
  "for": ""
}, "LEMBAR 2", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DataPelaporPemohon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataPelaporPemohon");

  var _component_vee_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vee-field");

  var _component_error_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("error-message");

  var _component_Kirim = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Kirim");

  var _component_vee_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vee-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_form, {
    "validation-schema": _ctx.schemaCurrent,
    "class": "vee-form",
    onSubmit: _ctx.daftar
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataPelaporPemohon, {
        rekamKtp: $data.rekamKtp
      }, null, 8
      /* PROPS */
      , ["rekamKtp"]), _hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
        type: "file",
        name: "lampiran1",
        onChange: _ctx.setLampiran1
      }, null, 8
      /* PROPS */
      , ["onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
        name: "lampiran1",
        "class": "error"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
        type: "file",
        name: "lampiran2",
        onChange: _ctx.setLampiran2
      }, null, 8
      /* PROPS */
      , ["onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
        name: "lampiran2",
        "class": "error"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, _hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
        type: "file",
        name: "lampiran3",
        onChange: _ctx.setLampiran3
      }, null, 8
      /* PROPS */
      , ["onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
        name: "lampiran3",
        "class": "error"
      }), _hoisted_16, _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
        type: "file",
        name: "lampiran4",
        onChange: _ctx.setLampiran4
      }, null, 8
      /* PROPS */
      , ["onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_error_message, {
        name: "lampiran4",
        "class": "error"
      })]), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vee_field, {
        hidden: "",
        name: "kategori",
        value: "Rekam KTP-El"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Kirim, {
        submitLoading: _ctx.submitLoading
      }, null, 8
      /* PROPS */
      , ["submitLoading"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["validation-schema", "onSubmit"])])]);
}

/***/ }),

/***/ "./resources/js/mixins/daftar.js":
/*!***************************************!*\
  !*** ./resources/js/mixins/daftar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DataPelaporPemohon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataPelaporPemohon.vue */ "./resources/js/components/DataPelaporPemohon.vue");
/* harmony import */ var _components_Kirim_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Kirim.vue */ "./resources/js/components/Kirim.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DataPelaporPemohon: _components_DataPelaporPemohon_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Kirim: _components_Kirim_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      schema: {
        nik_pelapor: "nik|nik_number|nik_min:16|nik_max:16|min_value:3326019999999999|max_value:3326199999999999",
        nama_pelapor: {
          nama: true,
          regex: /^[A-Za-z .']+$/
        },
        no_wa: "no_wa|no_wa_number",
        nik: "nik|nik_number|nik_min:16|nik_max:16|min_value:3326019999999999|max_value:3326199999999999",
        nama: {
          nama: true,
          regex: /^[A-Za-z .']+$/
        },
        kecamatan: "required",
        hubungan: "hubungan",
        kelurahan: "required",
        alamat: "required",
        lampiran1: "file|image|size:2048",
        lampiran2: "image|size:2048",
        lampiran3: "image|size:2048",
        lampiran4: "image|size:2048",
        pernyataan: "required"
      },
      schemaCurrent: {},
      submitLoading: false,
      fileLampiran1: null,
      fileLampiran2: null,
      fileLampiran3: null,
      fileLampiran4: null
    };
  },
  methods: {
    setLampiran: function setLampiran(e, lampiran) {
      var _this = this;

      var file = e.target.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        if (lampiran === 1) {
          _this.fileLampiran1 = e.target.result;
        }

        if (lampiran === 2) {
          _this.fileLampiran2 = e.target.result;
        }

        if (lampiran === 3) {
          _this.fileLampiran3 = e.target.result;
        }

        if (lampiran === 4) {
          _this.fileLampiran4 = e.target.result;
        }
      };

      reader.readAsDataURL(file);
    },
    setLampiran1: function setLampiran1(e) {
      this.setLampiran(e, 1);
    },
    setLampiran2: function setLampiran2(e) {
      this.setLampiran(e, 2);
    },
    setLampiran3: function setLampiran3(e) {
      this.setLampiran(e, 3);
    },
    setLampiran4: function setLampiran4(e) {
      this.setLampiran(e, 4);
    },
    daftar: function daftar(values, _ref) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var resetForm, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                resetForm = _ref.resetForm;
                _this2.submitLoading = true;
                values.lampiran1 = _this2.fileLampiran1;
                values.lampiran2 = _this2.fileLampiran2;
                values.lampiran3 = _this2.fileLampiran3;
                values.lampiran4 = _this2.fileLampiran4;
                _context.next = 8;
                return _this2.$recaptchaLoaded();

              case 8:
                _context.next = 10;
                return _this2.$recaptcha("register");

              case 10:
                token = _context.sent;
                values["g-recaptcha-response"] = token;
                _context.next = 14;
                return _this2.$store.dispatch("addPengajuan", values).then(function () {
                  _this2.submitLoading = false;
                  setTimeout(function () {
                    window.scrollTo(0, 0);
                  }, 1000);

                  _this2.$toast.add({
                    severity: "success",
                    summary: "Sukses",
                    detail: "Pengajuan berhasil!",
                    life: 3000
                  });
                });

              case 14:
                resetForm();

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.mb[data-v-1809edf8] {\r\n  margin-bottom: 2rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-left[data-v-a3b0f8c6] {\r\n  display: flex;\r\n  align-items: flex-start;\n}\ni.pi.pi-spin.pi-spinner[data-v-a3b0f8c6] {\r\n  font-size: 2rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./public/file/lembar1-f101.png":
/*!**************************************!*\
  !*** ./public/file/lembar1-f101.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/lembar1-f101.png?aae6a1a1b6959e90c45c7da8d8bcd5e7");

/***/ }),

/***/ "./public/file/lembar2-f101.png":
/*!**************************************!*\
  !*** ./public/file/lembar2-f101.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/lembar2-f101.png?84fd6d4504fb5dcb39f05e394444e776");

/***/ }),

/***/ "./public/images/rekam-ktp.jpg":
/*!*************************************!*\
  !*** ./public/images/rekam-ktp.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/rekam-ktp.jpg?d77e30fd43fa5813681554ab18cda767");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataRekamKTP_vue_vue_type_style_index_0_id_1809edf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataRekamKTP_vue_vue_type_style_index_0_id_1809edf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataRekamKTP_vue_vue_type_style_index_0_id_1809edf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Kirim_vue_vue_type_style_index_0_id_a3b0f8c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Kirim_vue_vue_type_style_index_0_id_a3b0f8c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Kirim_vue_vue_type_style_index_0_id_a3b0f8c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/DataPelaporPemohon.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/DataPelaporPemohon.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataPelaporPemohon_vue_vue_type_template_id_38cd19dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataPelaporPemohon.vue?vue&type=template&id=38cd19dc */ "./resources/js/components/DataPelaporPemohon.vue?vue&type=template&id=38cd19dc");
/* harmony import */ var _DataPelaporPemohon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataPelaporPemohon.vue?vue&type=script&lang=js */ "./resources/js/components/DataPelaporPemohon.vue?vue&type=script&lang=js");
/* harmony import */ var E_vue_project_sapu_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_vue_project_sapu_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DataPelaporPemohon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DataPelaporPemohon_vue_vue_type_template_id_38cd19dc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/DataPelaporPemohon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/DataRekamKTP.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/DataRekamKTP.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataRekamKTP_vue_vue_type_template_id_1809edf8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataRekamKTP.vue?vue&type=template&id=1809edf8&scoped=true */ "./resources/js/components/DataRekamKTP.vue?vue&type=template&id=1809edf8&scoped=true");
/* harmony import */ var _DataRekamKTP_vue_vue_type_style_index_0_id_1809edf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css */ "./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css");
/* harmony import */ var E_vue_project_sapu_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;


const __exports__ = /*#__PURE__*/(0,E_vue_project_sapu_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(script, [['render',_DataRekamKTP_vue_vue_type_template_id_1809edf8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1809edf8"],['__file',"resources/js/components/DataRekamKTP.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Kirim.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Kirim.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Kirim_vue_vue_type_template_id_a3b0f8c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kirim.vue?vue&type=template&id=a3b0f8c6&scoped=true */ "./resources/js/components/Kirim.vue?vue&type=template&id=a3b0f8c6&scoped=true");
/* harmony import */ var _Kirim_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kirim.vue?vue&type=script&lang=js */ "./resources/js/components/Kirim.vue?vue&type=script&lang=js");
/* harmony import */ var _Kirim_vue_vue_type_style_index_0_id_a3b0f8c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css */ "./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css");
/* harmony import */ var E_vue_project_sapu_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,E_vue_project_sapu_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Kirim_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Kirim_vue_vue_type_template_id_a3b0f8c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-a3b0f8c6"],['__file',"resources/js/components/Kirim.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/RekamKTP.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/RekamKTP.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RekamKTP_vue_vue_type_template_id_5e446fcc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RekamKTP.vue?vue&type=template&id=5e446fcc */ "./resources/js/pages/RekamKTP.vue?vue&type=template&id=5e446fcc");
/* harmony import */ var _RekamKTP_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RekamKTP.vue?vue&type=script&lang=js */ "./resources/js/pages/RekamKTP.vue?vue&type=script&lang=js");
/* harmony import */ var E_vue_project_sapu_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_vue_project_sapu_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RekamKTP_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RekamKTP_vue_vue_type_template_id_5e446fcc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/RekamKTP.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/DataPelaporPemohon.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DataPelaporPemohon.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataPelaporPemohon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataPelaporPemohon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataPelaporPemohon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataPelaporPemohon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Kirim.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Kirim.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Kirim_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Kirim_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Kirim.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/RekamKTP.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/RekamKTP.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RekamKTP_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RekamKTP_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RekamKTP.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/RekamKTP.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/DataPelaporPemohon.vue?vue&type=template&id=38cd19dc":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/DataPelaporPemohon.vue?vue&type=template&id=38cd19dc ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataPelaporPemohon_vue_vue_type_template_id_38cd19dc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataPelaporPemohon_vue_vue_type_template_id_38cd19dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataPelaporPemohon.vue?vue&type=template&id=38cd19dc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataPelaporPemohon.vue?vue&type=template&id=38cd19dc");


/***/ }),

/***/ "./resources/js/components/DataRekamKTP.vue?vue&type=template&id=1809edf8&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/DataRekamKTP.vue?vue&type=template&id=1809edf8&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataRekamKTP_vue_vue_type_template_id_1809edf8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataRekamKTP_vue_vue_type_template_id_1809edf8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataRekamKTP.vue?vue&type=template&id=1809edf8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=template&id=1809edf8&scoped=true");


/***/ }),

/***/ "./resources/js/components/Kirim.vue?vue&type=template&id=a3b0f8c6&scoped=true":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Kirim.vue?vue&type=template&id=a3b0f8c6&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Kirim_vue_vue_type_template_id_a3b0f8c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Kirim_vue_vue_type_template_id_a3b0f8c6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Kirim.vue?vue&type=template&id=a3b0f8c6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=template&id=a3b0f8c6&scoped=true");


/***/ }),

/***/ "./resources/js/pages/RekamKTP.vue?vue&type=template&id=5e446fcc":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/RekamKTP.vue?vue&type=template&id=5e446fcc ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RekamKTP_vue_vue_type_template_id_5e446fcc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RekamKTP_vue_vue_type_template_id_5e446fcc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RekamKTP.vue?vue&type=template&id=5e446fcc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/RekamKTP.vue?vue&type=template&id=5e446fcc");


/***/ }),

/***/ "./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataRekamKTP_vue_vue_type_style_index_0_id_1809edf8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataRekamKTP.vue?vue&type=style&index=0&id=1809edf8&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Kirim_vue_vue_type_style_index_0_id_a3b0f8c6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Kirim.vue?vue&type=style&index=0&id=a3b0f8c6&scoped=true&lang=css");


/***/ })

}]);