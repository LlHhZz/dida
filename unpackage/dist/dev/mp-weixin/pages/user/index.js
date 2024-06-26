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
    let openid = common_vendor.ref("");
    let photo = common_vendor.ref("");
    let username = common_vendor.ref("");
    let phone = common_vendor.ref("");
    let description = common_vendor.ref("");
    common_vendor.onLoad(() => {
      openid.value = common_vendor.index.getStorageSync("openid");
      photo.value = common_vendor.index.getStorageSync("photo");
      phone.value = common_vendor.index.getStorageSync("phone");
      username.value = common_vendor.index.getStorageSync("username");
      description.value = common_vendor.index.getStorageSync("description");
    });
    common_vendor.onShow(() => {
      photo.value = common_vendor.index.getStorageSync("photo");
      phone.value = common_vendor.index.getStorageSync("phone");
      username.value = common_vendor.index.getStorageSync("username");
      description.value = common_vendor.index.getStorageSync("description");
    });
    const onQuestionLabelTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesC/user/question_label"
      });
    };
    const onStoryHouseTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesC/user/story_house"
      });
    };
    const onAssociateFamilyTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesC/user/associate_family"
      });
    };
    const onProblemFeedbackTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesC/user/problem_feedback"
      });
    };
    const onSettingTap = () => {
      common_vendor.index.navigateTo({
        // url: '/pages/test/upload_story'
        url: "/pagesC/user/setting"
      });
    };
    const onFileLoadTap = () => {
      common_vendor.index.navigateTo({
        url: "/pages/test/upload_story"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          isHome: true
        }),
        b: common_vendor.unref(photo).value == ""
      }, common_vendor.unref(photo).value == "" ? {} : {
        c: common_vendor.unref(photo)
      }, {
        d: common_vendor.t(common_vendor.unref(username)),
        e: common_vendor.t(common_vendor.unref(description)),
        f: common_vendor.o(onQuestionLabelTap),
        g: common_vendor.o(onStoryHouseTap),
        h: common_vendor.o(onAssociateFamilyTap),
        i: common_vendor.o(onProblemFeedbackTap),
        j: common_vendor.o(onSettingTap),
        k: common_vendor.o(onFileLoadTap)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/pages/user/index.vue"]]);
wx.createPage(MiniProgramPage);
