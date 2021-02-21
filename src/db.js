const mysql = require('promise-mysql');
let pool = null;

exports.getPool = function() {
  if (pool) {
    return pool;
  }

    pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'Juhomi@123',
        database: 'lims',
        port: 3306,
        connectionLimit: 5
    });
  return pool;
}

exports.getConnection = async function() {
  let dbPool = exports.getPool();
  let poolConnection = await dbPool.getConnection();
  return poolConnection;
}

exports.releaseConnection = async function(connection) {
  try {
    console.log("In releaseConnection")
    connection.release();
  } catch(error) {
    console.error("Error in release connection", error);
    throw error;
  }
}