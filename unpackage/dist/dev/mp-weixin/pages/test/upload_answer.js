"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      question: "",
      ageGroup0: "",
      ageGroup1: "",
      ageGroup2: "",
      ageGroup3: "",
      ageGroup4: "",
      keyWord: ""
    };
  },
  methods: {
    // 保存到数据库
    saveToDatabase() {
      common_vendor.Ws.callFunction({
        name: "fun",
        data: {
          api: "answer_upload",
          question: this.question,
          ageGroup0: this.ageGroup0,
          ageGroup1: this.ageGroup1,
          ageGroup2: this.ageGroup2,
          ageGroup3: this.ageGroup3,
          ageGroup4: this.ageGroup4,
          keyWord: this.keyWord
        }
      }).then((res) => {
        console.log(res);
        this.question = "";
        this.ageGroup0 = "";
        this.ageGroup1 = "";
        this.ageGroup2 = "";
        this.ageGroup3 = "";
        this.ageGroup4 = "";
        this.keyWord = "";
      });
    }
  }
};
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      isHome: false
    }),
    b: $data.question,
    c: common_vendor.o(($event) => $data.question = $event.detail.value),
    d: $data.ageGroup0,
    e: common_vendor.o(($event) => $data.ageGroup0 = $event.detail.value),
    f: $data.ageGroup1,
    g: common_vendor.o(($event) => $data.ageGroup1 = $event.detail.value),
    h: $data.ageGroup2,
    i: common_vendor.o(($event) => $data.ageGroup2 = $event.detail.value),
    j: $data.ageGroup3,
    k: common_vendor.o(($event) => $data.ageGroup3 = $event.detail.value),
    l: $data.ageGroup4,
    m: common_vendor.o(($event) => $data.ageGroup4 = $event.detail.value),
    n: $data.keyWord,
    o: common_vendor.o(($event) => $data.keyWord = $event.detail.value),
    p: common_vendor.o((...args) => $options.saveToDatabase && $options.saveToDatabase(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/to_do_list/小程序开发/test/pages/test/upload_answer.vue"]]);
wx.createPage(MiniProgramPage);
