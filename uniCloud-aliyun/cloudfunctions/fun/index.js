// 初始云数据库
let db = uniCloud.database({
  throwOnNotFound: false,
})
const Segment = require('segment')

exports.main = async (event, context) => {
  // 后端 uniCloud 编写函数并与前端通信
  // 如果 api为 story_upload 就对应将内容存入 story 数据表中
  if (event.api === 'story_upload') {
    return await db.collection('story').add({
      bodyParts: event.bodyParts,
      signals: event.signals,
      themes: event.themes,
      storyContent: event.storyContent,
    });
  }

  if (event.api === 'answer_upload') {
    return await db.collection('answer').add({
      question: event.question,
      ageGroup0: event.ageGroup0,
      ageGroup1: event.ageGroup1,
      ageGroup2: event.ageGroup2,
      ageGroup3: event.ageGroup3,
      ageGroup4: event.ageGroup4,
      keyWord: event.keyWord,
    });
  }

  if (event.api === 'get_story') {
    const collection = db.collection('story')
    const query = {
      bodyParts: event.bodyParts,
      signals: event.signals,
      themes: event.themes,
    }

    try {
      const res = await collection.where(query).get()
      return res
    } catch (err) {
      return err
    }
  }

  // 模糊比对查询
  if (event.api === 'get_answer') {
    const collection = db.collection('answer');

    const keyWords = splitWords(event.question);

    let searchConditions = []

    for (let i = 0; i < keyWords.length; i++) {
      const query = {
        keyWord: new RegExp(keyWords[i].w)
      }
      searchConditions.push(query)
    }

    try {
      const dbCmd = db.command
      // 解构
      const res = await collection.where(dbCmd.or(...searchConditions)).get();
      return res
    } catch (err) {
      return err;
    }
  }

  // 返回数据给客户端
  return "无效的 API 请求";
};

const fs = require('fs');
const path = require('path');

function readStopWordsFromFile(filePath) {
  try {
    // 构建正确的文件路径
    const absoluteFilePath = path.resolve(__dirname, filePath);
    // 读取文件内容
    const data = fs.readFileSync(absoluteFilePath, 'utf8');
    // 将内容按行分割成数组
    const stopWordsArray = data.split('\n').map(word => word.trim());
    return stopWordsArray;
  } catch (err) {
    console.error('Error reading stopwords file:', err);
    return [];
  }
}

// 使用 Segment 分词
function splitWords(text) {
  const segment = new Segment();
  segment.useDefault();
  const result = segment.doSegment(text);

  const stopWordsFilePath = './stopwords.txt';
  const stopWords = readStopWordsFromFile(stopWordsFilePath);

  const filteredResult = result.filter(word => !stopWords.includes(word.w));

  // 例如: return [{w: '为什么', p: 1000}, {w: '你要', p: 500}, {}, ... ];
  return filteredResult
}