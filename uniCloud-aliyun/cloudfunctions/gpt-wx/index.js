// 科大讯飞服务器接口认证信息
// 保密
const APPID = 'f4921dd5'
const APISecret = 'MDU5YzQ5NGM3NTk5MDcwYWI1ZWNkM2I2'
const APIKey = '9870fc6da930cc0de300375963942dd6'

// 安装npm base64和CryptoJS
import * as base64 from "base-64"
import CryptoJS from "crypto-js"
const base64 = require('base-64')
const CryptoJS = require('crypto-js')

// 本地好像不行

exports.main = async (event, context) => {
  console.log(111);
  // 鉴权
  var url = "wss://spark-api.xf-yun.com/v3.5/chat";
  var host = "spark-api.xf-yun.com";
  var apiKeyName = "api_key";
  var date = new Date().toGMTString();
  var algorithm = "hmac-sha256";
  var headers = "host date request-line";
  var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v3.5/chat HTTP/1.1`;
  var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, APISecret);
  var signature = CryptoJS.enc.Base64.stringify(signatureSha);
  var authorizationOrigin =
    `${apiKeyName}="${APIKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
  var authorization = base64.encode(authorizationOrigin);
  url = `${url}?authorization=${authorization}&date=${encodeURI(date)}&host=${host}`;
  return {
    APPID,
    url
  }
};