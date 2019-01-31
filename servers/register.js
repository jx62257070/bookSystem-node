const data = require('../utils/testMysql');

const register={
    async register(bodyData){
        let states = `select * from user where userName="${bodyData.name}"`;  
        let canRegister=await data.linkMySQL(states);
        if(canRegister==undefined){
            states = `INSERT INTO user(userName,password,ifAdmin)VALUES("${bodyData.userName}","${bodyData.userPass}",0);`;
            let res=await data.linkMySQL(states);
            return "注册成功"
        }else{
            return "hhhh" 
        }

    }
}

module.exports = register;