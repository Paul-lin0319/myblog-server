const { exec } = require('../db/mysql');

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`;
  }

  sql += `order by createtime desc;`;

  // 返回promise
  return exec(sql);
};

const getDetail = (id) => {
  let sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => rows[0]);
};

const newBlog = (blogData = {}) => {
  // blogData 是一个博客的对象，包含 title content 属性
  const { title, content, author } = blogData,
    createtime = Date.now();

  const sql = `insert into blogs (title, content, createtime, author) values ('${title}', '${content}', ${createtime}, '${author}')`;

  return exec(sql).then((insertData) => {
    return {
      id: insertData.insertId,
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  // id 就是呀更新博客的 id
  // blogData 是一个博客的对象，包含 title content 属性

  const { title, content } = blogData;

  const sql = `
    updata blogs set title='${title}', content='${content} where id='${id}''
  `;

  return exec(sql).then((updateData) => {
    if (updateData.affctedRows > 0) {
      return true;
    } else {
      return false;
    }
  });
};

const delBlog = (id) => {
  // id 就是要删除博客的id
  return true;
};

module.exports = { getList, getDetail, newBlog, updateBlog, delBlog };
