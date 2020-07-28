const env = process.env.NODE_ENV; // 环境变量

// 配置
let MYSQL_CONF;

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'Lxf.198912190319',
    port: '3306',
    database: 'myblog',
  };
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'Lxf.198912190319',
    port: '3306',
    database: 'myblog',
  };
}
console.log(MYSQL_CONF);
module.exports = {
  MYSQL_CONF,
};
