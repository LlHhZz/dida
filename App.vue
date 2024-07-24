<script>
  import utils from './common/js/utils'
  export default {
    onLaunch: function() {
      console.log('App Launch')
      // 获取胶囊按钮坐标 从本地缓存中取出
      let menuButtonInfo = uni.getStorageSync('MenuButton')
      if (!menuButtonInfo) {
        const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
        // 缓存到本地
        uni.setStorageSync('MenuButton', menuButtonInfo)
      }
      wx.cloud.init({
        env: 'test-6g3p0ggu89153d4d'
      })
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    },
    globalData: {
      utils: utils
    }
  }
</script>

<style>
  /*每个页面公共css */
</style>