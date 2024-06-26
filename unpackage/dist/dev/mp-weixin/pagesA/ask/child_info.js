"use strict";
const common_vendor = require("../../common/vendor.js");
const common_js_menuButton = require("../../common/js/menuButton.js");
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
const _sfc_main = {
  __name: "child_info",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "803dce96": common_vendor.unref(common_js_menuButton.MenuButton).getMenuButton().seViewHeight
    }));
    const age = common_vendor.ref("");
    const gender = common_vendor.ref("");
    const description = common_vendor.ref("");
    const submitUserInfo = () => {
      console.log(age.value);
      console.log(gender.value);
      console.log(description.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: false
        }),
        b: age.value,
        c: common_vendor.o(($event) => age.value = $event.detail.value),
        d: age.value,
        e: common_vendor.o(($event) => age.value = $event.detail.value),
        f: age.value,
        g: common_vendor.o(($event) => age.value = $event.detail.value),
        h: age.value,
        i: common_vendor.o(($event) => age.value = $event.detail.value),
        j: age.value,
        k: common_vendor.o(($event) => age.value = $event.detail.value),
        l: gender.value,
        m: common_vendor.o(($event) => gender.value = $event.detail.value),
        n: gender.value,
        o: common_vendor.o(($event) => gender.value = $event.detail.value),
        p: description.value,
        q: common_vendor.o(($event) => description.value = $event.detail.value),
        r: common_vendor.o(submitUserInfo),
        s: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/pagesA/ask/child_info.vue"]]);
wx.createPage(MiniProgramPage);
