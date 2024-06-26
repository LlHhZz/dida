"use strict";
const common_vendor = require("../vendor.js");
class MenuButton {
  getMenuButton() {
    let menuButtonInfo = common_vendor.index.getStorageSync("MenuButton");
    const top = menuButtonInfo.top * 2 + "rpx";
    const height = menuButtonInfo.height * 2 + "rpx";
    const left = menuButtonInfo.left * 2 + "rpx";
    const right = menuButtonInfo.right * 2 + "rpx";
    const width = menuButtonInfo.width * 2 + "rpx";
    const seViewHeight = menuButtonInfo.top * 2 + menuButtonInfo.height * 2 + "rpx";
    return {
      top,
      height,
      left,
      right,
      width,
      seViewHeight
    };
  }
}
const MenuButton$1 = new MenuButton();
exports.MenuButton = MenuButton$1;
