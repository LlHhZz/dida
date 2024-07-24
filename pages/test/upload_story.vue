<template>
  <navbar :isHome="false" />
  <view class="container">
    <!-- 可选框1：部位 -->
    <view class="option">
      <text class="option-title">部位：</text>
      <picker mode="selector" :range="bodyParts" @change="onBodyPartChange">
        <view class="picker">
          {{ bodyParts[selectedBodyIndex] }}
        </view>
      </picker>
    </view>

    <!-- 可选框2：信号灯 -->
    <view class="option">
      <text class="option-title">信号灯：</text>
      <picker mode="selector" :range="signals" @change="onSignalChange">
        <view class="picker">
          {{ signals[selectedSignalIndex] }}
        </view>
      </picker>
    </view>

    <!-- 可选框3：主题 -->
    <view class="option">
      <text class="option-title">主题：</text>
      <picker mode="selector" :range="themes" @change="onThemeChange">
        <view class="picker">
          {{ themes[selectedThemeIndex] }}
        </view>
      </picker>
    </view>

    <!-- 输入故事内容 -->
    <textarea v-model="storyContent" maxlength="-1" placeholder="请输入故事内容"></textarea>

    <!-- 保存按钮 -->
    <button @click="saveToDatabase">保存</button>

    <!-- 批量操作 故事上传按钮 -->
    <button @click="chooseFile" style="background-color: aquamarine;">选择故事文件上传</button>

    <!-- 批量操作 题库上传按钮 -->
    <button @click="chooseQuestionAnswer" style="background-color:cadetblue;">选择题库文件上传</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 可选框1：部位
        bodyParts: ['头部', '脸部', '肩部', '胸部', '腹部', '臀部', '阴部', '腿部', '脚部'],
        selectedBodyIndex: 0,

        // 可选框2：信号灯
        signals: ['友好的触碰', '礼貌的触碰', '谁都不可以碰', '随机'],
        selectedSignalIndex: 0,

        // 可选框3：主题
        themes: ['权利和价值观', '性与性行为', '关系', '文化与性', '人体与发育', '暴力和安全保障', '理解性别', '性与生殖健康'],
        selectedThemeIndex: 0,

        // 文本框：输入故事内容
        storyContent: '',
        // 文件
        selectedFile: null,
      };
    },
    methods: {
      // 处理部位选择变化
      onBodyPartChange(event) {
        this.selectedBodyIndex = event.detail.value;
      },
      // 处理信号灯选择变化
      onSignalChange(event) {
        this.selectedSignalIndex = event.detail.value;
      },
      // 处理主题选择变化
      onThemeChange(event) {
        this.selectedThemeIndex = event.detail.value;
      },
      // 保存到数据库
      saveToDatabase() {
        const bodyParts = this.bodyParts[this.selectedBodyIndex]
        const signals = this.signals[this.selectedSignalIndex]
        const themes = this.themes[this.selectedThemeIndex]
        const storyContent = this.storyContent
        console.log('部位：', bodyParts);
        console.log('信号灯：', signals);
        console.log('主题：', themes);
        console.log('故事内容：', storyContent);

        // 保存到数据库
        /*
        uniCloud.callFunction({
          name: 'fun',
          data: {
            api: 'story_upload',
            bodyParts: bodyParts,
            signals: signals,
            themes: themes,
            storyContent: storyContent,
          }
        }).then(res => {
          console.log(res)
        })
        */
        uni.showToast({
          title: '仅测试使用，请通过文件一键上传',
          icon: 'none'
        });
      },
      // 选择文件
      chooseFile() {
        uni.chooseImage({
          count: 1, // 选择数量，这里选择一个文件
          sourceType: ['file'], // 指定文件来源，这里选择文件
          success: (res) => {
            const filePath = res.tempFiles[0].path;
            const fileName = res.tempFiles[0].name;

            // 调用上传文件方法
            this.uploadStoryFile(filePath, fileName);
          },
          fail: (err) => {
            console.error('选择文件失败', err);
          }
        });
      },
      // 上传文件到后端
      uploadStoryFile(filePath, fileName) {
        uni.uploadFile({
          url: 'https://dida.012331.com/upload/story/',
          filePath: filePath,
          name: 'file',
          fileName: fileName, // 可选，文件名
          formData: {},
          success: (res) => {
            console.log('文件上传成功', res.data);
          },
          fail: (err) => {
            console.error('文件上传失败', err);
          }
        });
      },
      // 选择文件
      chooseQuestionAnswer() {
        uni.chooseImage({
          count: 1, // 选择数量，这里选择一个文件
          sourceType: ['file'], // 指定文件来源，这里选择文件
          success: (res) => {
            const filePath = res.tempFiles[0].path;
            const fileName = res.tempFiles[0].name;

            // 调用上传文件方法
            this.uploadQuestionFile(filePath, fileName);
          },
          fail: (err) => {
            console.error('选择文件失败', err);
          }
        });
      },
      // 上传文件到后端
      uploadQuestionFile(filePath, fileName) {
        uni.uploadFile({
          url: 'https://dida.012331.com/upload/question/',
          filePath: filePath,
          name: 'file',
          fileName: fileName, // 可选，文件名
          formData: {},
          success: (res) => {
            console.log('文件上传成功', res.data);
          },
          fail: (err) => {
            console.error('文件上传失败', err);
          }
        });
      },
    }
  }
</script>

<style>
  .container {
    padding: 40rpx;
    margin-top: 100rpx;
  }

  .option {
    margin-bottom: 40rpx;
  }

  .option-title {
    margin-right: 10px;
  }

  .picker {
    border: 2rpx solid #ccc;
    border-radius: 8rpx;
    padding: 20rpx;
  }

  textarea {
    width: 100%;
    height: 400rpx;
    border: 2rpx solid #ccc;
    border-radius: 8rpx;
    margin-bottom: 40rpx;
  }

  .upload-csv-file {
    width: 100%;
    height: 5%;
  }

  button {
    width: 100%;
    padding: 10rpx;
    margin-bottom: 20rpx;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8rpx;
    cursor: pointer;
  }
</style>