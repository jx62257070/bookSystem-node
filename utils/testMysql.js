var mysql = require('mysql');//引用Mysql
const testService={
    linkMySQL(name){
        var promise = new Promise(function(resolve,reject){
            let states=`select * from user where userName="${name}"`
            var connection = mysql.createConnection({//配置连接
                host: 'localhost',//数据库地址
                user : "root",//数据库用户
                password: "sj123654",//数据库密码
                database : 'demo'//需要连接的数据库
            });         
            connection.connect();//连接数据库
            connection.query(states,function(err,rows,fields){//执行sql语句,data='select * from city'
                    if(err) throw err ;              
                    resolve(rows[0]);
            });  
            connection.end();//断开连接
        });
        return promise;
    },
}

module.exports = testService;