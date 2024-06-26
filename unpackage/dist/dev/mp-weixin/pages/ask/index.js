"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const onQuestionBaseTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesA/ask/role_choose"
      });
    };
    const onAiTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesB/ai/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onQuestionBaseTap),
        b: common_vendor.o(onAiTap)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-137be786"], ["__file", "E:/to_do_list/小程序开发/test/pages/ask/index.vue"]]);
wx.createPage(MiniProgramPage);
