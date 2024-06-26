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
  __name: "signal_choose",
  setup(__props) {
    const body = common_vendor.ref("");
    const img_url = common_vendor.ref("");
    const body_ = common_vendor.ref("");
    const signals = ["绿", "黄", "红"];
    common_vendor.onLoad((options) => {
      body.value = options.body;
      if (body.value === "头部") {
        body_.value = "head";
      } else if (body.value === "肩部") {
        body_.value = "shoulder";
      } else if (body.value === "脚部") {
        body_.value = "feet";
      } else if (body.value === "脸部") {
        body_.value = "face";
      } else if (body.value === "臀部") {
        body_.value = "hip";
      } else if (body.value === "胸部") {
        body_.value = "chest";
      } else if (body.value === "阴部") {
        body_.value = "private";
      } else if (body.value === "腿部") {
        body_.value = "leg";
      } else if (body.value === "腹部") {
        body_.value = "belly";
      }
      img_url.value = "http://175.27.162.149:8000/media/" + body_.value + ".png";
    });
    const buttonOneClicked = () => {
      img_url.value = "http://175.27.162.149:8000/media/" + body_.value + "_green.png";
      common_vendor.index.navigateTo({
        url: "/pagesD/story/story_topic?body=" + body.value + "&color=绿"
      });
    };
    const buttonTwoClicked = () => {
      img_url.value = "http://175.27.162.149:8000/media/" + body_.value + "_yellow.png";
      common_vendor.index.navigateTo({
        url: "/pagesD/story/story_topic?body=" + body.value + "&color=黄"
      });
    };
    const buttonThreeClicked = () => {
      img_url.value = "http://175.27.162.149:8000/media/" + body_.value + "_red.png";
      common_vendor.index.navigateTo({
        url: "/pagesD/story/story_topic?body=" + body.value + "&color=红"
      });
    };
    const buttonFourClicked = () => {
      img_url.value = "http://175.27.162.149:8000/media/" + body_.value + ".png";
      const index = Math.floor(Math.random() * signals.length);
      common_vendor.index.navigateTo({
        url: "/pagesD/story/story_topic?body=" + body.value + "&color=" + signals[index]
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          isHome: false
        }),
        b: img_url.value,
        c: common_vendor.o(buttonOneClicked),
        d: common_vendor.o(buttonTwoClicked),
        e: common_vendor.o(buttonThreeClicked),
        f: common_vendor.o(buttonFourClicked)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/pagesD/story/signal_choose.vue"]]);
wx.createPage(MiniProgramPage);
