"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "navbar",
  props: {
    background: {
      type: String
    },
    color: {
      type: String,
      default: "rgba(0, 0, 0, 1)"
    },
    fontSize: {
      type: String,
      default: 32
    },
    iconWidth: {
      type: String,
      default: 116
    },
    iconHeight: {
      type: String,
      default: 38
    },
    titleText: {
      type: String,
      default: ""
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    common_vendor.onBeforeMount(() => {
      setNavSize(), setStyle();
    });
    const status = common_vendor.ref(0);
    const navHeight = common_vendor.ref(0);
    const props = __props;
    const setNavSize = () => {
      const {
        system,
        statusBarHeight
      } = common_vendor.index.getSystemInfoSync();
      status.value = statusBarHeight * 2;
      const isiOS = system.indexOf("iOS") > -1;
      if (!isiOS) {
        navHeight.value = 128;
      } else {
        navHeight.value = 120;
      }
    };
    const containerStyle = common_vendor.ref("");
    const textStyle = common_vendor.ref("");
    const iconStyle = common_vendor.ref("");
    const pages = common_vendor.ref(getCurrentPages().length);
    common_vendor.reactive(common_vendor.index.getMenuButtonBoundingClientRect());
    const setStyle = () => {
      containerStyle.value = ["background:" + props.background].join(";");
      textStyle.value = ["color:" + props.color, "font-size:" + props.fontSize + "rpx"].join(";");
      iconStyle.value = ["width:" + props.iconWidth + "rpx", "height:" + props.iconHeight + "rpx"].join(";");
    };
    const backOrHome = () => {
      if (pages.value > 1) {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.switchTab({
          url: "/pages/user/index"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.isHome
      }, __props.isHome ? {
        b: common_vendor.s("height:" + navHeight.value + "rpx;line-height:" + navHeight.value + "rpx;padding-left:20rpx;margin-top:40rpx;")
      } : common_vendor.e({
        c: pages.value > 1
      }, pages.value > 1 ? {} : {}, {
        d: common_vendor.o(backOrHome),
        e: __props.titleText
      }, __props.titleText ? {
        f: common_vendor.t(__props.titleText),
        g: common_vendor.s("height:" + navHeight.value + "rpx;line-height:" + navHeight.value + "rpx;" + textStyle.value)
      } : {}, {
        h: common_vendor.s("height:" + navHeight.value + "rpx;" + containerStyle.value)
      }));
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/components/navbar/navbar.vue"]]);
wx.createComponent(Component);
