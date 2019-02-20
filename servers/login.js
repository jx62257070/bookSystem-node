const data = require('../utils/testMysql');
const util = require('../utils/util');
const login = {
    async login(bodyData) {

        bodyData.isAdmin = +bodyData.isAdmin; //1,0化bodyData.isAdmin,1=true,0=false
        let states = "";
        if (bodyData.isAdmin == 1) {
            states = `select * from admin where admin_id="${bodyData.name}"`;
        } else {
            states = `select * from user where user_id="${bodyData.name}"`;
        }
        let res = await data.linkMySQL(states); //获取数据库数据
        let returnData = {
            state: "",
            data: '',
        }
        if (res == undefined) {
            returnData = {
                state: "wrong id", //用户名不存在
                data:''
            }
            return returnData
        } else {
            if (res.password == bodyData.pass) {
                returnData = {
                    state: "right pass", //密码正确 
                    data: res.user_name
                }
                return returnData
            } else {
                returnData = {
                    state: "wrong pass", //密码错误 
                    data: ''
                }
                return returnData
            }

        }
    }
}
module.exports = login;