const fs = require('fs');
const path = require('path');

// 写日志
function writeLog(writeStream, log) {
  writeStream.write(log + '\n'); // 关键代码
}

// 生成 write stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName);
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a',
  });
  return writeStream;
}

// 写访问日志
const accessWriteStream = createWriteStream('access.log');
function access(log) {
  writeLog(accessWriteStream, log);
}

// 写事件日志
const eventWriteStream = createWriteStream('event.log');
function event(log) {
  writeLog(eventWriteStream, log);
}

// 写报错日志
const errorWriteStream = createWriteStream('error.log');
function error(log) {
  writeLog(errorWriteStream, log);
}

module.exports = {
  access,
  event,
  error,
};
