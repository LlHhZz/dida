"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const common_js_utils = require("./common/js/utils.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/ask/index.js";
  "./pages/user/index.js";
  "./pages/story/index.js";
  "./pages/test/upload_story.js";
  "./pages/test/upload_answer.js";
  "./pagesA/ask/child_info.js";
  "./pagesA/ask/question_bank.js";
  "./pagesA/ask/role_choose.js";
  "./pagesB/ai/index.js";
  "./pagesC/user/question_label.js";
  "./pagesC/user/story_house.js";
  "./pagesC/user/associate_family.js";
  "./pagesC/user/problem_feedback.js";
  "./pagesC/user/setting.js";
  "./pagesC/user/changeUsername.js";
  "./pagesC/user/changeIdentity.js";
  "./pagesD/story/body_choose.js";
  "./pagesD/story/signal_choose.js";
  "./pagesD/story/story_topic.js";
  "./pagesE/display/collection.js";
  "./pagesE/display/story_page.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    let menuButtonInfo = common_vendor.index.getStorageSync("MenuButton");
    if (!menuButtonInfo) {
      const menuButtonInfo2 = common_vendor.index.getMenuButtonBoundingClientRect();
      common_vendor.index.setStorageSync("MenuButton", menuButtonInfo2);
    }
    common_vendor.wx$1.cloud.init({
      env: "test-0gh13n9b5cfb2db5"
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  globalData: {
    utils: common_js_utils.utils
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
