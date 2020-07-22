const { loginCheck } = require('../controller/user');

const handleUserRouter = (req, res) => {
  const method = req.method; // GET POST
  const url = req.url;
  const path = url.split('?')[0];

  // 登录
  if (method === 'POST' && path === '/api/user/login') {
    const { username, passwrod } = req.body;
    const result = loginCheck(username, passwrod);
    return result
      ? new SuccessModel('删除登录成功')
      : new ErrorModel('删除登录失败');
  }
};

module.exports = handleUserRouter;
