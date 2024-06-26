"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
const _sfc_main = {
  __name: "role_choose",
  setup(__props) {
    const buttonOneClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesA/ask/question_bank?role=家长"
      });
    };
    const buttonTwoClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesA/ask/question_bank?role=性教育讲师"
      });
    };
    const buttonThreeClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesA/ask/question_bank?role=性教育关注者"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: false
        }),
        b: common_vendor.o(buttonOneClicked),
        c: common_vendor.o(buttonTwoClicked),
        d: common_vendor.o(buttonThreeClicked)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/pagesA/ask/role_choose.vue"]]);
wx.createPage(MiniProgramPage);
