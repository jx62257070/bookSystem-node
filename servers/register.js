const Mysql = require('../utils/testMysql');

const register={
    async register(bodyData){
        let states = `select * from user where user_id="${bodyData.userId}"`;  
        let canRegister=await Mysql.linkMySQL(states);
        if(canRegister==undefined){
            states = `INSERT INTO user(user_id,user_name,password,user_sex,user_dept)VALUES("${bodyData.userId}","${bodyData.userName}","${bodyData.userPass}","${bodyData.userSex}","${bodyData.userDept}");`;
            let res=await Mysql.linkMySQL(states);
            return "success"
        }else{
            return "registered" 
        }

    }
}

module.exports = register;