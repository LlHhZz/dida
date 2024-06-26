// Define the MenuButton function
class MenuButton {
  getMenuButton() {
    // 从本地缓存中取出即可
    let menuButtonInfo = uni.getStorageSync('MenuButton');
    const top = menuButtonInfo.top * 2 + 'rpx';
    const height = menuButtonInfo.height * 2 + 'rpx';
    const left = menuButtonInfo.left * 2 + 'rpx';
    const right = menuButtonInfo.right * 2 + 'rpx';
    const width = menuButtonInfo.width * 2 + 'rpx';
    const seViewHeight = menuButtonInfo.top * 2 + menuButtonInfo.height * 2 + 'rpx';
    return {
      top,
      height,
      left,
      right,
      width,
      seViewHeight
    }
  }
}

export default new MenuButton()