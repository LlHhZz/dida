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
  __name: "changeIdentity",
  setup(__props) {
    const role = common_vendor.ref("");
    const childsex = common_vendor.ref("");
    const childage = common_vendor.ref("");
    const sex = common_vendor.ref("");
    const age = common_vendor.ref("");
    const onRoleTap = (v) => {
      role.value = v;
    };
    const onChildSexTap = (v) => {
      childsex.value = v;
    };
    const onSexTap = (v) => {
      sex.value = v;
    };
    const modify_info = () => {
      common_vendor.index.request({
        url: "http://175.27.162.149:8000/user/modify/roleinfo/",
        method: "POST",
        data: {
          openid: common_vendor.index.getStorageSync("openid"),
          role: role.value,
          childsex: childsex.value,
          childage: childage.value,
          sex: sex.value,
          age: age.value
        },
        success: (res) => {
          console.log(res);
          if (res.data.result === "success") {
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
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          isHome: false
        }),
        b: common_vendor.o(($event) => onRoleTap("家长")),
        c: role.value === "家长"
      }, role.value === "家长" ? {} : {}, {
        d: common_vendor.o(($event) => onRoleTap("性教育讲师")),
        e: role.value === "性教育讲师"
      }, role.value === "性教育讲师" ? {} : {}, {
        f: common_vendor.o(($event) => onRoleTap("性教育关注者")),
        g: role.value === "性教育关注者"
      }, role.value === "性教育关注者" ? {} : {}, {
        h: common_vendor.o(($event) => onChildSexTap("男")),
        i: childsex.value === "男"
      }, childsex.value === "男" ? {} : {}, {
        j: common_vendor.o(($event) => onChildSexTap("女")),
        k: childsex.value === "女"
      }, childsex.value === "女" ? {} : {}, {
        l: childage.value,
        m: common_vendor.o(($event) => childage.value = $event.detail.value),
        n: common_vendor.o(($event) => onSexTap("男")),
        o: sex.value === "男"
      }, sex.value === "男" ? {} : {}, {
        p: common_vendor.o(($event) => onSexTap("女")),
        q: sex.value === "女"
      }, sex.value === "女" ? {} : {}, {
        r: age.value,
        s: common_vendor.o(($event) => age.value = $event.detail.value),
        t: common_vendor.o(modify_info)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/to_do_list/小程序开发/test/pagesC/user/changeIdentity.vue"]]);
wx.createPage(MiniProgramPage);
