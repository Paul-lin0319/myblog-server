const getList = (author, keyword) => {
  // 先返回假数据， 格式是正确的
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1595372609668,
      author: 'zhangsan',
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1595372619668,
      author: 'lisi',
    },
  ];
};

const getDetail = (id) => {
  // 先返回假数据
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1595372609668,
      author: 'zhangsan',
    },
  ];
};

const newBlog = (blogData = {}) => {
  // blogData 是一个博客的对象，包含 title content 属性

  return {
    id: 3, // 表示新建博客，插入到数据表里的 id
  };
};

const updateBlog = (id, blogData = {}) => {
  // id 就是呀更新博客的 id
  // blogData 是一个博客的对象，包含 title content 属性
  console.log('update blog', id, blogData);

  return true;
};

const delBlog = (id) => {
  // id 就是要删除博客的id
  return true;
};

module.exports = { getList, getDetail, newBlog, updateBlog, delBlog };
