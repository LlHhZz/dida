"use strict";
const common_vendor = require("../../common/vendor.js");
const common_js_menuButton = require("../../common/js/menuButton.js");
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  _easycom_navbar();
}
const _sfc_main = {
  __name: "question_bank",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "4ad57e4c": common_vendor.unref(common_js_menuButton.MenuButton).getMenuButton().seViewHeight
    }));
    const ageGroup = common_vendor.ref("");
    const gender = common_vendor.ref("");
    const description = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      ageGroup.value = options.ageGroup;
      gender.value = options.gender;
      description.value = options.description;
    });
    common_vendor.ref([]);
    common_vendor.ref("");
    common_vendor.ref("");
    const choosedTopic = common_vendor.ref("");
    const onTopicOneTap = () => {
      choosedTopic.value = "权利和价值观";
    };
    const onTopicTwoTap = () => {
      choosedTopic.value = "性与性行为";
    };
    const onTopicThreeTap = () => {
      choosedTopic.value = "关系";
    };
    const onTopicFourTap = () => {
      choosedTopic.value = "文化与性";
    };
    const onTopicFiveTap = () => {
      choosedTopic.value = "人体和发育";
    };
    const onTopicSixTap = () => {
      choosedTopic.value = "暴力和安全保障";
    };
    const onTopicSevenTap = () => {
      choosedTopic.value = "理解性别";
    };
    const onTopicEightTap = () => {
      choosedTopic.value = "性与生殖健康";
    };
    const roundcontents = common_vendor.ref([]);
    const text = common_vendor.ref("");
    const onQuestionTap = (question) => {
      text.value = question;
      sendMessage();
    };
    const sendMessage = () => {
      common_vendor.index.request({
        url: "http://175.27.162.149:8000/get/answer/",
        method: "POST",
        data: {
          question: text.value,
          childage: common_vendor.index.getStorageSync("childage")
        },
        success: (res) => {
          roundcontents.value.push({
            question: text.value,
            answer: res.data.answer
          });
          text.value = "";
          console.log(res);
        },
        fail: (err) => {
          console.error("请求失败", err);
          common_vendor.index.showToast({
            title: "提问失败，请重试",
            icon: "none"
          });
        }
      });
    };
    const calculateCharCount = function(text2) {
      if (!text2) {
        return 0;
      }
      return text2.length;
    };
    const computePosition = (text2, flag) => {
      if (flag === 0) {
        return Math.ceil(calculateCharCount(text2) / 8) * 2 + 2;
      } else if (flag === 1) {
        return Math.ceil(calculateCharCount(text2) / 21) * 2.5 + 2;
      }
    };
    const onNeedAnswerFeedBackTap = () => {
      common_vendor.wx$1.showToast({
        title: "好的，您后续可以在问题反馈处查看答案。",
        icon: "none"
      });
    };
    const onNoNeedAnswerFeedBackTap = () => {
      common_vendor.wx$1.showToast({
        title: "好的，您可以继续提问我其他内容哟！",
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          isHome: false,
          background: ""
        }),
        b: common_vendor.o(onTopicOneTap),
        c: common_vendor.o(onTopicTwoTap),
        d: common_vendor.o(onTopicThreeTap),
        e: common_vendor.o(onTopicFourTap),
        f: common_vendor.o(onTopicFiveTap),
        g: common_vendor.o(onTopicSixTap),
        h: common_vendor.o(onTopicSevenTap),
        i: common_vendor.o(onTopicEightTap),
        j: choosedTopic.value !== ""
      }, choosedTopic.value !== "" ? {
        k: common_vendor.t(choosedTopic.value)
      } : {}, {
        l: choosedTopic.value !== ""
      }, choosedTopic.value !== "" ? {
        m: common_vendor.t(choosedTopic.value),
        n: common_vendor.o(($event) => onQuestionTap("女生用安全套时，男生不用嘛？")),
        o: common_vendor.o(($event) => onQuestionTap("男生对怀孕的女生不负责怎么办？")),
        p: common_vendor.o(($event) => onQuestionTap("女生一般几岁来月经？"))
      } : {}, {
        q: common_vendor.f(roundcontents.value, (content, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(content.question),
            b: common_vendor.s(`padding: 1vh ;height: ${computePosition(content.question, 0)}vh; width: 40vw; margin-top: 1.5vh; margin-left: 50vw; font-size: 4vw; background-color: #ffdc60; z-index: 1; border-radius: 20rpx;`),
            c: content.answer !== "暂时没有这个问题的回答，你需要向滴答计划反馈，并获得后续回答吗？"
          }, content.answer !== "暂时没有这个问题的回答，你需要向滴答计划反馈，并获得后续回答吗？" ? {
            d: common_vendor.t(content.answer),
            e: common_vendor.s(`padding: 1vh ; height: ${computePosition(content.answer, 1)}vh; width: 85vw; margin-top: 1.5vh; margin-left: 7vw; font-size: 4vw; background-color: #fffefa; z-index: 1; border-radius: 20rpx;`)
          } : {
            f: common_vendor.t(content.answer),
            g: common_vendor.o(onNeedAnswerFeedBackTap),
            h: common_vendor.o(onNoNeedAnswerFeedBackTap),
            i: common_vendor.s(`height: ${computePosition(content.answer, 1) + 10}vh; width: 85vw; margin-top: 1.5vh; margin-left: 7vw; font-size: 4vw; background-color: #fffefa; z-index: 1; border-radius: 20rpx;`)
          });
        }),
        r: common_vendor.o(sendMessage),
        s: text.value,
        t: common_vendor.o(($event) => text.value = $event.detail.value),
        v: common_vendor.o(sendMessage),
        w: common_vendor.o(sendMessage),
        x: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-00d40595"], ["__file", "E:/to_do_list/小程序开发/test/pagesA/ask/question_bank.vue"]]);
wx.createPage(MiniProgramPage);
