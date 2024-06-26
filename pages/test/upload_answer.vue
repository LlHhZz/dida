<template>
  <navbar :isHome="false" />
  <view class="container">
    <textarea v-model="question" maxlength="-1" placeholder="请输入问题内容"></textarea>
    <textarea v-model="ageGroup0" maxlength="-1" placeholder="请输入0-3年龄段回答"></textarea>
    <textarea v-model="ageGroup1" maxlength="-1" placeholder="请输入3-6年龄段回答"></textarea>
    <textarea v-model="ageGroup2" maxlength="-1" placeholder="请输入6-9年龄段回答"></textarea>
    <textarea v-model="ageGroup3" maxlength="-1" placeholder="请输入9-12年龄段回答"></textarea>
    <textarea v-model="ageGroup4" maxlength="-1" placeholder="请输入12-15年龄段回答"></textarea>
    <textarea v-model="keyWord" maxlength="-1" placeholder="请输入问题关键词"></textarea>
    <!-- 保存按钮 -->
    <button @click="saveToDatabase">保存</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        question: '',
        ageGroup0: '',
        ageGroup1: '',
        ageGroup2: '',
        ageGroup3: '',
        ageGroup4: '',
        keyWord: ''
      };
    },
    methods: {
      // 保存到数据库
      saveToDatabase() {
        // 保存到数据库
        uniCloud.callFunction({
          name: 'fun',
          data: {
            api: 'answer_upload',
            question: this.question,
            ageGroup0: this.ageGroup0,
            ageGroup1: this.ageGroup1,
            ageGroup2: this.ageGroup2,
            ageGroup3: this.ageGroup3,
            ageGroup4: this.ageGroup4,
            keyWord: this.keyWord
          }
        }).then(res => {
          console.log(res)
          this.question = ''
          this.ageGroup0 = ''
          this.ageGroup1 = ''
          this.ageGroup2 = ''
          this.ageGroup3 = ''
          this.ageGroup4 = ''
          this.keyWord = ''
        })
      }
    }
  }
</script>

<style>
  .container {
    padding: 40rpx;
    margin-top: 100rpx;
  }

  textarea {
    width: 100%;
    height: 40rpx;
    border: 2rpx solid #ccc;
    border-radius: 8rpx;
    padding: 20rpx;
    margin-bottom: 40rpx;
  }

  button {
    width: 100%;
    padding: 20rpx;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8rpx;
    cursor: pointer;
  }
</style>