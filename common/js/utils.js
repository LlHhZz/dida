class Utils {
  constructor() {
    this.baseUrl = 'http://175.27.162.149:8000'
  }
  // 获取用户信息
  getUserInfo() {
    // 调用登录的api
    uni.login({
      success: res => {
        // 通过code 调用相关api
        this.request({
          url: '/wechat/login/',
          method: 'POST',
          data: {
            code: res.code
          },
          success: res => {
            console.log(res)
          },
          fail: err => {
            console.log(err)
            uni.setStorageSync('token', err.data.token)
            console.log(uni.getStorageSync('token'))
            uni.setStorageSync('openid', err.data.openid)
            console.log(uni.getStorageSync('openid'))

            this.request({
              url: '/user/info/',
              method: 'POST',
              data: {
                openid: uni.getStorageSync('openid')
              },
              success: res => {
                console.log(res)
              },
              fail: err => {
                console.log(err)
                uni.setStorageSync('openid', err.data.openid)
                console.log(uni.getStorageSync('openid'))
                uni.setStorageSync('phone', err.data.phone)
                console.log(uni.getStorageSync('phone'))
                uni.setStorageSync('photo', err.data.photo)
                console.log(uni.getStorageSync('photo'))
                uni.setStorageSync('username', err.data.username)
                console.log(uni.getStorageSync('username'))
                uni.setStorageSync('description', err.data.description)
                console.log(uni.getStorageSync('description'))
                uni.setStorageSync('gender', err.data.gender)
                console.log(uni.getStorageSync('gender'))
                uni.setStorageSync('age', err.data.age)
                console.log(uni.getStorageSync('age'))
                uni.setStorageSync('role', err.data.role)
                console.log(uni.getStorageSync('role'))
                uni.setStorageSync('childsex', err.data.childsex)
                console.log(uni.getStorageSync('childsex'))
                uni.setStorageSync('childage', err.data.childage)
                console.log(uni.getStorageSync('childage'))
              }
            })
          }
        })
      }
    })
  }
  request(option = {
    showLoading: false
  }) {
    // 判断用户传入的url是否存在
    if (!option.url) {
      return false
    }
    // 接口请求之前 添加Loading效果
    if (option.showLoading) {
      this.showLoading()
    }
    uni.request({
      url: this.baseUrl + option.url,
      data: option.data ? option.data : {},
      header: option.header ? option.header : {},
      method: option.method ? option.method : 'GET',
      success: (response) => {
        // 成功后 关闭loading效果
        uni.hideLoading()
        // 接口调用成功 
        // 后端返回结果编号异常
        if (response.data.code != 10000) {
          // 将失败的结果返回出去
          if (option.fail && typeof option.fail == 'function') {
            option.fail(response)
          }
        } else {
          // 将成功的结果返回出去
          if (option.success && typeof option.success == 'function') {
            option.success(response)
          }
        }
      },
      fail: response => {
        uni.hideLoading()
        console.log(response)
      }
    })
  }
  // 创建加载Loading效果
  showLoading() {
    // 缓存
    const isShowLoading = uni.getStorageSync('isShowLoading')
    // 如果目前存在加载效果
    if (isShowLoading) {
      // 关闭所有的加载效果
      uni.hideLoading()
      uni.setStorageSync('isShowLoading', false)
    }
    // 重新创建Loading效果
    uni.showLoading({
      title: '加载中...',
      complete: function() {
        uni.setStorageSync('isShowLoading', true)
      },
      fail: function() {
        uni.setStorageSync('isShowLoading', false)
      }
    })
  }
}

export default new Utils()