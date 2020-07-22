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

module.exports = { getList };
