<template>
  <view class="nav">
    <!-- <view :style="'height:' + status + 'rpx;' + containerStyle"></view> -->
    <view v-if="isHome" class="headNav"
      :style="'height:' + navHeight + 'rpx;line-height:' + navHeight + 'rpx;padding-left:20rpx;margin-top:40rpx;'">
      <text class="city"></text>
      <view style="flex: 1">
        <!-- 
        <navigator url="/pages/search/index"
          :style="'height:' + menu.height * 2 + 'rpx;line-height:' + menu.height * 2 + 'rpx;margin-top:' + (menu.top * 2 - status) + 'rpx;margin-left:32rpx;margin-right:' + (menu.width * 2 + 24) + 'rpx;background-color: #f4f4f4f4;border-radius:200rpx;text-align:center;'">
          <text class="search-text"></text>
        </navigator>
        -->

      </view>
    </view>
    <view v-else class="navbar" :style="'height:' + navHeight + 'rpx;' + containerStyle">
      <view class="back-icon" @click="backOrHome">
        <image v-if="pages > 1"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggOWExIDEgMCAxIDAgMC0ydjJ6TS4yOTMgNy4yOTNhMSAxIDAgMCAwIDAgMS40MTRsNi4zNjQgNi4zNjRhMSAxIDAgMCAwIDEuNDE0LTEuNDE0TDIuNDE0IDhsNS42NTctNS42NTdBMSAxIDAgMCAwIDYuNjU3LjkzTC4yOTMgNy4yOTN6TTE4IDdIMXYyaDE3Vjd6IiBmaWxsPSIjMUUxRTFFIi8+PC9zdmc+">
        </image>
      </view>
      <view class="nav-title" v-if="titleText">
        <view :style="'height:' + navHeight + 'rpx;line-height:' + navHeight + 'rpx;' + textStyle">
          {{titleText}}
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    onBeforeMount,
    ref,
    reactive,
    defineProps
  } from 'vue'
  onBeforeMount(() => {
    setNavSize(),
      setStyle()
  })
  // 计算状态栏高度
  const status = ref(0)
  // 内容高度
  const navHeight = ref(0)
  // 一个单一的逻辑，封装为一个方法
  // 一个单一的功能，封装为一个组件
  const props = defineProps({
    background: {
      type: String,
    },
    color: {
      type: String,
      default: 'rgba(0, 0, 0, 1)'
    },
    fontSize: {
      type: String,
      default: 32
    },
    iconWidth: {
      type: String,
      default: 116
    },
    iconHeight: {
      type: String,
      default: 38
    },
    titleText: {
      type: String,
      default: ''
    },
    isHome: {
      type: Boolean,
      default: false
    }
  })

  const setNavSize = () => {
    const {
      system,
      statusBarHeight
    } = uni.getSystemInfoSync()
    // 系统获取的px 准换为rpx 乘2即可
    status.value = statusBarHeight * 2
    const isiOS = system.indexOf('iOS') > -1
    if (!isiOS) {
      navHeight.value = 128
    } else {
      navHeight.value = 120
    }
  }
  // 背景颜色
  const containerStyle = ref('')
  // 字体样式
  const textStyle = ref('')
  // 图标样式
  const iconStyle = ref('')
  // 页面栈数量 通过调取api获取目标数据
  const pages = ref(getCurrentPages().length)
  // 获取胶囊的位置属性
  const menu = reactive(uni.getMenuButtonBoundingClientRect())
  // 样式设置
  const setStyle = () => {
    containerStyle.value = ['background:' + props.background].join(';')
    textStyle.value = ['color:' + props.color, 'font-size:' + props.fontSize + 'rpx'].join(';')
    iconStyle.value = ['width:' + props.iconWidth + 'rpx', 'height:' + props.iconHeight + 'rpx'].join(';')
  }
  const backOrHome = () => {
    if (pages.value > 1) {
      uni.navigateBack()
    } else {
      uni.switchTab({
        url: '/pages/user/index'
      })
    }
  }
</script>

<style>
  .nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .back-icon {
    display: flex;
    align-items: center;
    width: 64rpx;
    height: 100%;
    margin-left: 20rpx;
    margin-top: 40rpx;
  }

  .back-icon image {
    width: 45rpx;
    height: 45rpx;
  }

  .headNav {
    display: flex;
  }
</style>