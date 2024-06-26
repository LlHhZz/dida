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
  __name: "setting",
  setup(__props) {
    let openid = common_vendor.ref("");
    let photo = common_vendor.ref("");
    let username = common_vendor.ref("");
    let phone = common_vendor.ref("");
    let description = common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.onLoad(() => {
      openid.value = common_vendor.index.getStorageSync("openid");
      photo.value = common_vendor.index.getStorageSync("photo");
      phone.value = common_vendor.index.getStorageSync("phone");
      username.value = common_vendor.index.getStorageSync("username");
      description.value = common_vendor.index.getStorageSync("description");
    });
    const onChangeUsernameTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesC/user/changeUsername"
      });
    };
    const onChangeIdentityTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesC/user/changeIdentity"
      });
    };
    const onQuitTap = () => {
      common_vendor.index.navigateTo({
        url: "/pagesC/index/index"
      });
    };
    const chooseImage = () => {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          common_vendor.index.uploadFile({
            url: "http://175.27.162.149:8000/user/modify/photo/",
            filePath: res.tempFilePaths[0],
            name: "file",
            formData: {
              "openid": common_vendor.index.getStorageSync("openid")
            },
            success: (res2) => {
              const data = JSON.parse(res2.data);
              if (data.result === "success") {
                common_vendor.index.setStorageSync("photo", data.photo_path);
                photo.value = common_vendor.index.getStorageSync("photo");
                common_vendor.index.showToast({
                  title: "更改成功",
                  icon: "success"
                });
              }
            },
            fail: (err) => {
              console.error("请求失败", err);
              common_vendor.index.showToast({
                title: "更改失败，请重试",
                icon: "none"
              });
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          isHome: false
        }),
        b: common_vendor.unref(photo) === ""
      }, common_vendor.unref(photo) === "" ? {} : {
        c: common_vendor.unref(photo)
      }, {
        d: common_vendor.o(chooseImage),
        e: common_vendor.t(common_vendor.unref(username)),
        f: common_vendor.t(common_vendor.unref(description)),
        g: common_vendor.o(onChangeUsernameTap),
        h: common_vendor.o(onChangeIdentityTap),
        i: common_vendor.o(onQuitTap)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/pagesC/user/setting.vue"]]);
wx.createPage(MiniProgramPage);
