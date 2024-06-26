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
  __name: "index",
  setup(__props) {
    const body = common_vendor.ref(["头部", "脸部", "肩部", "胸部", "腹部", "臀部", "阴部", "腿部", "脚部"]);
    const color = common_vendor.ref(["绿", "黄", "红"]);
    const topic = common_vendor.ref(["权利和价值观", "性与性行为", "关系", "文化与性", "人体与发育", "暴力和安全保障", "理解性别", "性与生殖健康"]);
    function getRandomItem(items) {
      const index = Math.floor(Math.random() * items.value.length);
      return items.value[index];
    }
    const buttonOneClicked = () => {
      const randomBody = getRandomItem(body);
      const randomColor = getRandomItem(color);
      const randomTopic = getRandomItem(topic);
      common_vendor.index.navigateTo({
        url: `/pagesE/display/story_page?body=${randomBody}&color=${randomColor}&topic=${randomTopic}`
      });
    };
    const buttonTwoClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesD/story/body_choose"
      });
    };
    const buttonThreeClicked = () => {
      common_vendor.index.navigateTo({
        url: "/pagesE/display/collection"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: true
        }),
        b: common_vendor.o(buttonOneClicked),
        c: common_vendor.o(buttonTwoClicked),
        d: common_vendor.o(buttonThreeClicked)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-78027fd3"], ["__file", "E:/to_do_list/小程序开发/test/pages/story/index.vue"]]);
wx.createPage(MiniProgramPage);
