"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 可选框1：部位
      bodyParts: ["头部", "脸部", "肩部", "胸部", "腹部", "臀部", "阴部", "腿部", "脚部"],
      selectedBodyIndex: 0,
      // 可选框2：信号灯
      signals: ["友好的触碰", "礼貌的触碰", "谁都不可以碰", "随机"],
      selectedSignalIndex: 0,
      // 可选框3：主题
      themes: ["权利和价值观", "性与性行为", "关系", "文化与性", "人体与发育", "暴力和安全保障", "理解性别", "性与生殖健康"],
      selectedThemeIndex: 0,
      // 文本框：输入故事内容
      storyContent: "",
      // 文件
      selectedFile: null
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
      const bodyParts = this.bodyParts[this.selectedBodyIndex];
      const signals = this.signals[this.selectedSignalIndex];
      const themes = this.themes[this.selectedThemeIndex];
      const storyContent = this.storyContent;
      console.log("部位：", bodyParts);
      console.log("信号灯：", signals);
      console.log("主题：", themes);
      console.log("故事内容：", storyContent);
      common_vendor.index.showToast({
        title: "仅测试使用，请通过文件一键上传",
        icon: "none"
      });
    },
    // 选择文件
    chooseFile() {
      common_vendor.index.chooseImage({
        count: 1,
        // 选择数量，这里选择一个文件
        sourceType: ["file"],
        // 指定文件来源，这里选择文件
        success: (res) => {
          const filePath = res.tempFiles[0].path;
          const fileName = res.tempFiles[0].name;
          this.uploadStoryFile(filePath, fileName);
        },
        fail: (err) => {
          console.error("选择文件失败", err);
        }
      });
    },
    // 上传文件到后端
    uploadStoryFile(filePath, fileName) {
      common_vendor.index.uploadFile({
        url: "http://175.27.162.149:8000/upload/story/",
        filePath,
        name: "file",
        fileName,
        // 可选，文件名
        formData: {},
        success: (res) => {
          console.log("文件上传成功", res.data);
        },
        fail: (err) => {
          console.error("文件上传失败", err);
        }
      });
    },
    // 选择文件
    chooseQuestionAnswer() {
      common_vendor.index.chooseImage({
        count: 1,
        // 选择数量，这里选择一个文件
        sourceType: ["file"],
        // 指定文件来源，这里选择文件
        success: (res) => {
          const filePath = res.tempFiles[0].path;
          const fileName = res.tempFiles[0].name;
          this.uploadQuestionFile(filePath, fileName);
        },
        fail: (err) => {
          console.error("选择文件失败", err);
        }
      });
    },
    // 上传文件到后端
    uploadQuestionFile(filePath, fileName) {
      common_vendor.index.uploadFile({
        url: "http://175.27.162.149:8000/upload/question/",
        filePath,
        name: "file",
        fileName,
        // 可选，文件名
        formData: {},
        success: (res) => {
          console.log("文件上传成功", res.data);
        },
        fail: (err) => {
          console.error("文件上传失败", err);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      isHome: false
    }),
    b: common_vendor.t($data.bodyParts[$data.selectedBodyIndex]),
    c: $data.bodyParts,
    d: common_vendor.o((...args) => $options.onBodyPartChange && $options.onBodyPartChange(...args)),
    e: common_vendor.t($data.signals[$data.selectedSignalIndex]),
    f: $data.signals,
    g: common_vendor.o((...args) => $options.onSignalChange && $options.onSignalChange(...args)),
    h: common_vendor.t($data.themes[$data.selectedThemeIndex]),
    i: $data.themes,
    j: common_vendor.o((...args) => $options.onThemeChange && $options.onThemeChange(...args)),
    k: $data.storyContent,
    l: common_vendor.o(($event) => $data.storyContent = $event.detail.value),
    m: common_vendor.o((...args) => $options.saveToDatabase && $options.saveToDatabase(...args)),
    n: common_vendor.o((...args) => $options.chooseFile && $options.chooseFile(...args)),
    o: common_vendor.o((...args) => $options.chooseQuestionAnswer && $options.chooseQuestionAnswer(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/to_do_list/小程序开发/test/pages/test/upload_story.vue"]]);
wx.createPage(MiniProgramPage);
