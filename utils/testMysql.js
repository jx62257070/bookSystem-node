var mysql = require('mysql'); //引用Mysql
const testService = {
    linkMySQL(states) {
        var promise = new Promise(function (resolve, reject) {
            var connection = mysql.createConnection({ //配置连接
                host: 'localhost', //数据库地址
                user: "root", //数据库用户
                password: "sj123654", //数据库密码
                database: 'booksystem' //需要连接的数据库
            });
            
            connection.connect(); //连接数据库
            connection.query(states, function (err, rows, fields) { //执行sql语句,data='select * from city'
                if (err) throw err;
                resolve(rows[0]);
            });
            connection.end(); //断开连接
        });
        return promise;
    },
    getAllDataMySQL(states) {
        var promise = new Promise(function (resolve, reject) {
            var connection = mysql.createConnection({ //配置连接
                host: 'localhost', //数据库地址
                user: "root", //数据库用户
                password: "sj123654", //数据库密码
                database: 'booksystem' //需要连接的数据库
            });
            
            connection.connect(); //连接数据库
            connection.query(states, function (err, rows, fields) { //执行sql语句,data='select * from city'
                if (err) throw err;
                resolve(rows);
            });
            connection.end(); //断开连接
        });
        return promise;
    },
}

module.exports = testService;