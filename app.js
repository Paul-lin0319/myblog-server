const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json');

  const resData = {
    name: 'xiaofeng',
    site: 'imooc',
  };

  res.end(JSON.stringify(resData));
};

module.exports = serverHandle;
