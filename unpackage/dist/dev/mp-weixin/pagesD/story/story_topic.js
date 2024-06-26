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
  __name: "story_topic",
  setup(__props) {
    const body = common_vendor.ref("");
    const color = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      body.value = options.body;
      color.value = options.color;
    });
    const buttonOneClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=权利和价值观"
      });
    };
    const buttonTwoClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=性与性行为"
      });
    };
    const buttonThreeClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=关系"
      });
    };
    const buttonFourClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=文化与性"
      });
    };
    const buttonFiveClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=人体与发育"
      });
    };
    const buttonSixClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=暴力和安全保障"
      });
    };
    const buttonSevenClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=理解性别"
      });
    };
    const buttonEightClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=性与生殖健康"
      });
    };
    const topics = ["权利和价值观", "性与性行为", "关系", "文化与性", "人体与发育", "暴力和安全保障", "理解性别", "性与生殖健康"];
    const onRandomTap = () => {
      const index = Math.floor(Math.random() * topics.length);
      common_vendor.index.navigateTo({
        url: "/pagesE/display/story_page?body=" + body.value + "&color=" + color.value + "&topic=" + topics[index]
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: false
        }),
        b: common_vendor.o(buttonOneClicked),
        c: common_vendor.o(buttonTwoClicked),
        d: common_vendor.o(buttonThreeClicked),
        e: common_vendor.o(buttonFourClicked),
        f: common_vendor.o(buttonFiveClicked),
        g: common_vendor.o(buttonSixClicked),
        h: common_vendor.o(buttonSevenClicked),
        i: common_vendor.o(buttonEightClicked),
        j: common_vendor.o(onRandomTap)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/pagesD/story/story_topic.vue"]]);
wx.createPage(MiniProgramPage);
