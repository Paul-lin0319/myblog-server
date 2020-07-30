const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method; // GET POST
  const url = req.url;
  const path = url.split('?')[0];
  const id = req.qurety.id;

  // 获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    const author = req.qurety.author || '';
    const keyword = req.qurety.keyword || '';
    // const listData = getList(author, keyword);
    // return new SuccessModel(listData);
    const result = getList(author, keyword);
    return result.then((listData) => new SuccessModel(listData));
  }

  // 获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    const result = getDetail(id);
    return result.then((detailData) => new SuccessModel(detailData));
  }

  // 新建一篇博客
  if (method === 'POST' && path === '/api/blog/new') {
    req.body.author = 'zhangsan'; // 假数据,待开发登录时再改成真实数据
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // 更新一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    return result.then((val) => {
      return val
        ? new SuccessModel('博客更新成功')
        : new ErrorModel('博客更新失败');
    });
  }

  // 删除一篇博客
  if (method === 'POST' && path === '/api/blog/del') {
    const result = delBlog(id);
    return result
      ? new SuccessModel('删除博客成功')
      : new ErrorModel('删除博客失败');
  }
};

module.exports = handleBlogRouter;
