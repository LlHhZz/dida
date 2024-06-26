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
  __name: "changeUsername",
  setup(__props) {
    const app = getApp();
    let inputValue = common_vendor.ref("");
    const modify_username = () => {
      common_vendor.index.setStorageSync("username", inputValue.value);
      app.globalData.utils.request({
        url: "/user/modify/username/",
        method: "POST",
        data: {
          openid: common_vendor.index.getStorageSync("openid"),
          username: inputValue.value
        },
        success: (res) => {
          console.log(res);
        },
        fail: (res) => {
          console.log(res);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: false
        }),
        b: common_vendor.unref(inputValue),
        c: common_vendor.o(($event) => common_vendor.isRef(inputValue) ? inputValue.value = $event.detail.value : inputValue = $event.detail.value),
        d: common_vendor.t(common_vendor.unref(inputValue).length),
        e: common_vendor.o(modify_username)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/pagesC/user/changeUsername.vue"]]);
wx.createPage(MiniProgramPage);
