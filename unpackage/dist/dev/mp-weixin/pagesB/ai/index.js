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
  __name: "index",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "35bc9732": common_vendor.unref(common_js_menuButton.MenuButton).getMenuButton().seViewHeight
    }));
    const problemData = common_vendor.ref([
      "孩子的生殖健康",
      "性与性行为教育",
      "权利和价值观"
    ]);
    const text = common_vendor.ref("");
    const SocketTask = common_vendor.ref(null);
    const historyTestList = common_vendor.ref([]);
    const sparkResult = common_vendor.ref("");
    const messageData = common_vendor.ref([]);
    const sendIngState = common_vendor.ref(false);
    async function sendMessage() {
      if (text.value.trim().length > 0) {
        text.value = text.value.trim();
      } else {
        common_vendor.wx$1.showToast({
          title: "请输入询问内容",
          icon: "none"
        });
        return false;
      }
      if (sendIngState.value) {
        common_vendor.wx$1.showToast({
          title: "等待AI回复完毕",
          icon: "none"
        });
        return false;
      }
      messageData.value.push({
        "role": "user",
        "content": text.value
      });
      messageData.value.push({
        "role": "assistant",
        "content": "",
        "loadShow": true,
        // 开始发送时，展示加载
        "copyIcon": false
        // 开始发送时，不显示复制按钮
      });
      sparkResult.value = "";
      sendIngState.value = true;
      const wssUrl = await common_vendor.wx$1.cloud.callFunction({
        name: "gpt-wx"
      });
      SocketTask.value = common_vendor.index.connectSocket({
        url: wssUrl.result.url,
        success: (res) => {
          console.log(res, "ws连接成功");
        },
        fail: (err) => {
          console.log(err, "ws连接失败");
          common_vendor.wx$1.showToast({
            title: "出现异常错误",
            icon: "none"
          });
          messageData.value = [];
          sendIngState.value = false;
        }
      });
      SocketTask.value.onError((res) => {
        console.log("监听到错误", res);
        common_vendor.wx$1.showToast({
          title: "出现异常错误",
          icon: "none"
        });
        messageData.value = [];
        sendIngState.value = false;
      });
      SocketTask.value.onOpen((data) => {
        console.log("连接成功，接下来可以发送消息了", data);
        historyTestList.value.push({
          "role": "user",
          "content": text.value
        });
        text.value = "";
        let params = {
          "header": {
            "app_id": wssUrl.result.APPID,
            "uid": "12345"
          },
          "parameter": {
            "chat": {
              "domain": "generalv3.5",
              "temperature": 1,
              "max_tokens": 2048
            }
          },
          "payload": {
            "message": {
              "text": historyTestList.value
            }
          }
        };
        SocketTask.value.send({
          data: JSON.stringify(params),
          success: (res) => {
            console.log("发送消息成功");
          },
          fail: (err) => {
            console.log("发送消息失败");
            common_vendor.wx$1.showToast({
              title: "出现异常错误",
              icon: "none"
            });
            messageData.value = [];
            sendIngState.value = false;
          }
        });
      });
      returnMessage();
    }
    function returnMessage() {
      SocketTask.value.onMessage((res) => {
        messageData.value[messageData.value.length - 1].loadShow = false;
        const obj = JSON.parse(res.data);
        console.log(obj);
        if (obj.header.code !== 0) {
          sparkResult.value += obj.header.message.replace(/↵/g, "\n");
          messageData.value[messageData.value.length - 1].content = sparkResult.value;
          sendIngState = false;
          messageData.value[messageData.value.length - 1].copyIcon = true;
          return false;
        }
        const dataArray = obj.payload.choices.text;
        dataArray.forEach((item) => {
          sparkResult.value += item.content.replace(/↵/g, "\n");
          messageData.value[messageData.value.length - 1].content = sparkResult.value;
        });
        if (obj.header.code === 0 && obj.header.status === 2) {
          historyTestList.value.push({
            "role": "assistant",
            "content": sparkResult.value
          });
          messageData.value[messageData.value.length - 1].copyIcon = true;
          sendIngState.value = false;
        }
      });
    }
    function copyData(val) {
      common_vendor.wx$1.setClipboardData({
        data: val
      });
    }
    function selectText(val) {
      text.value = val;
      sendMessage();
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          isHome: false,
          background: ""
        }),
        b: messageData.value.length <= 0
      }, messageData.value.length <= 0 ? {
        c: common_vendor.f(problemData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => selectText(item), index)
          };
        })
      } : {}, {
        d: common_vendor.f(messageData.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.role == "user"
          }, item.role == "user" ? {
            b: common_vendor.t(item.content)
          } : common_vendor.e({
            c: item.loadShow
          }, item.loadShow ? {} : {}, {
            d: item.content != ""
          }, item.content != "" ? common_vendor.e({
            e: common_vendor.t(item.content),
            f: item.copyIcon
          }, item.copyIcon ? {
            g: common_vendor.o(($event) => copyData(item.content), index)
          } : {}) : {}), {
            h: index
          });
        }),
        e: common_vendor.o(sendMessage),
        f: sendIngState.value,
        g: text.value,
        h: common_vendor.o(($event) => text.value = $event.detail.value),
        i: common_vendor.o(sendMessage),
        j: common_vendor.o(sendMessage),
        k: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ae547360"], ["__file", "E:/to_do_list/小程序开发/test/pagesB/ai/index.vue"]]);
wx.createPage(MiniProgramPage);
