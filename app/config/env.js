const env = {
  database: 'testdb',
  username: 'cs731',
  password: 'Abcd_1234',
  host: 'localhost',
  port: '8081',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 100
  }
};
 
module.exports = env;
