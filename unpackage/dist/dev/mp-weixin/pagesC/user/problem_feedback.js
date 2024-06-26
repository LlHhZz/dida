"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      isHome: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d5baea6f"], ["__file", "E:/to_do_list/小程序开发/test/pagesC/user/problem_feedback.vue"]]);
wx.createPage(MiniProgramPage);
