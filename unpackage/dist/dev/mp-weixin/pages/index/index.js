"use strict";
const common_vendor = require("../../common/vendor.js");
const common_js_menuButton = require("../../common/js/menuButton.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "b6bc31da": common_vendor.unref(common_js_menuButton.MenuButton).getMenuButton().seViewHeight
    }));
    const showFirstImage = common_vendor.ref(true);
    common_vendor.onMounted(() => {
      setTimeout(() => {
        showFirstImage.value = false;
      }, 2e3);
    });
    common_vendor.ref(false);
    const app = getApp();
    const wxLogin = () => {
      app.globalData.utils.getUserInfo();
      common_vendor.index.switchTab({
        url: "/pages/story/index"
      });
    };
    const validMobile = common_vendor.reactive({
      phone: "",
      validCode: ""
    });
    const countdown = common_vendor.reactive({
      validText: "获取验证码",
      time: 60
    });
    const popup = common_vendor.ref();
    const phoneLogin = () => {
      console.log(popup);
      if (!common_vendor.index.getStorageSync("token")) {
        popup.value.open("center");
      }
    };
    const cancal = () => {
      popup.value.close();
    };
    const ok = () => {
      if (!validMobile.phone || !validMobile.validCode) {
        return common_vendor.index.showToast({
          title: "请检查填写数据",
          icon: "none",
          duration: 1e3
        });
      }
      app.globalData.utils.request({
        url: "/user/authentication",
        method: "POST",
        data: {
          tel: validMobile.phone,
          code: validMobile.validCode
        },
        success: (res) => {
          common_vendor.index.setStorageSync("token", res.data.token);
        },
        fail: (res) => {
          common_vendor.index.showToast({
            title: res.msg,
            icon: "none",
            duration: 1e3
          });
        }
      });
    };
    let flag = false;
    const countdownChange = () => {
      if (!validMobile.phone.trim()) {
        return common_vendor.index.showToast({
          title: "请输入手机号",
          icon: "none",
          duration: 1e3
        });
      }
      if (flag)
        return;
      const time = setInterval(() => {
        if (countdown.time <= 0) {
          countdown.validText = "获取验证码";
          countdown.time = 60;
          flag = false;
          clearInterval(time);
        } else {
          countdown.time -= 1;
          countdown.validText = `剩余${countdown.time}s`;
        }
      }, 1e3);
      flag = true;
      app.globalData.utils.request({
        url: "/get/code",
        method: "POST",
        data: {
          tel: validMobile.phone
        },
        success: (res) => {
          common_vendor.index.showToast({
            title: "验证码发送成功，请尽快验证",
            icon: "none",
            duration: 1e3
          });
        },
        fail: (res) => {
          common_vendor.index.showToast({
            title: res.msg,
            icon: "none",
            duration: 1e3
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: showFirstImage.value
      }, showFirstImage.value ? {} : {
        b: common_vendor.o(wxLogin),
        c: common_vendor.o(phoneLogin),
        d: validMobile.phone,
        e: common_vendor.o(($event) => validMobile.phone = $event.detail.value),
        f: validMobile.validCode,
        g: common_vendor.o(($event) => validMobile.validCode = $event.detail.value),
        h: common_vendor.t(countdown.validText),
        i: common_vendor.o(countdownChange),
        j: common_vendor.o(cancal),
        k: common_vendor.o(ok),
        l: common_vendor.sr(popup, "1cf27b2a-0", {
          "k": "popup"
        }),
        m: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      }, {
        n: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/to_do_list/小程序开发/test/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
