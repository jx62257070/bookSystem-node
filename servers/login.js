const data = require('../utils/testMysql');
const util = require('../utils/util');
const login={
    async login(bodyData){

        bodyData.isAdmin=+bodyData.isAdmin;                  //1,0化bodyData.isAdmin,1=true,0=false
        let states = `select * from user where userName="${bodyData.name}"`;
        let res=await data.linkMySQL(states);       //获取数据库数据
        
        if(res==undefined) return "wrong name"                                  //用户名不存在
        else {
            if(res.ifAdmin==bodyData.isAdmin){                                  //判断用户身份，1:管理员,0:用户
                if(res.password==bodyData.pass)      return "right pass"        //密码正确
                else return "wrong pass"                                        //密码错误
            }else{
                if(bodyData.isAdmin==1)
                return "unknow admin"
                else return "unknow user"
            }
        }
    }
}
module.exports = login;