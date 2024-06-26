"use strict";
const common_vendor = require("../vendor.js");
class Utils {
  constructor() {
    this.baseUrl = "http://175.27.162.149:8000";
  }
  // 获取用户信息
  getUserInfo() {
    common_vendor.index.login({
      success: (res) => {
        this.request({
          url: "/wechat/login/",
          method: "POST",
          data: {
            code: res.code
          },
          success: (res2) => {
            console.log(res2);
          },
          fail: (err) => {
            console.log(err);
            common_vendor.index.setStorageSync("token", err.data.token);
            console.log(common_vendor.index.getStorageSync("token"));
            common_vendor.index.setStorageSync("openid", err.data.openid);
            console.log(common_vendor.index.getStorageSync("openid"));
            this.request({
              url: "/user/info/",
              method: "POST",
              data: {
                openid: common_vendor.index.getStorageSync("openid")
              },
              success: (res2) => {
                console.log(res2);
              },
              fail: (err2) => {
                console.log(err2);
                common_vendor.index.setStorageSync("openid", err2.data.openid);
                console.log(common_vendor.index.getStorageSync("openid"));
                common_vendor.index.setStorageSync("phone", err2.data.phone);
                console.log(common_vendor.index.getStorageSync("phone"));
                common_vendor.index.setStorageSync("photo", err2.data.photo);
                console.log(common_vendor.index.getStorageSync("photo"));
                common_vendor.index.setStorageSync("username", err2.data.username);
                console.log(common_vendor.index.getStorageSync("username"));
                common_vendor.index.setStorageSync("description", err2.data.description);
                console.log(common_vendor.index.getStorageSync("description"));
                common_vendor.index.setStorageSync("gender", err2.data.gender);
                console.log(common_vendor.index.getStorageSync("gender"));
                common_vendor.index.setStorageSync("age", err2.data.age);
                console.log(common_vendor.index.getStorageSync("age"));
                common_vendor.index.setStorageSync("role", err2.data.role);
                console.log(common_vendor.index.getStorageSync("role"));
                common_vendor.index.setStorageSync("childsex", err2.data.childsex);
                console.log(common_vendor.index.getStorageSync("childsex"));
                common_vendor.index.setStorageSync("childage", err2.data.childage);
                console.log(common_vendor.index.getStorageSync("childage"));
              }
            });
          }
        });
      }
    });
  }
  request(option = {
    showLoading: false
  }) {
    if (!option.url) {
      return false;
    }
    if (option.showLoading) {
      this.showLoading();
    }
    common_vendor.index.request({
      url: this.baseUrl + option.url,
      data: option.data ? option.data : {},
      header: option.header ? option.header : {},
      method: option.method ? option.method : "GET",
      success: (response) => {
        common_vendor.index.hideLoading();
        if (response.data.code != 1e4) {
          if (option.fail && typeof option.fail == "function") {
            option.fail(response);
          }
        } else {
          if (option.success && typeof option.success == "function") {
            option.success(response);
          }
        }
      },
      fail: (response) => {
        common_vendor.index.hideLoading();
        console.log(response);
      }
    });
  }
  // 创建加载Loading效果
  showLoading() {
    const isShowLoading = common_vendor.index.getStorageSync("isShowLoading");
    if (isShowLoading) {
      common_vendor.index.hideLoading();
      common_vendor.index.setStorageSync("isShowLoading", false);
    }
    common_vendor.index.showLoading({
      title: "加载中...",
      complete: function() {
        common_vendor.index.setStorageSync("isShowLoading", true);
      },
      fail: function() {
        common_vendor.index.setStorageSync("isShowLoading", false);
      }
    });
  }
}
const utils = new Utils();
exports.utils = utils;
