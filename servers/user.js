const Mysql = require('../utils/testMysql');
const user = {
    async getUserList(){
        let states = `select * from user`;
        let userList=await Mysql.getAllDataMySQL(states);
        return userList
    },
    async searchUser(userId){
        let states=`select * from user where user_id="${userId}"`
        let userData=await Mysql.linkMySQL(states);    
        if(userData==undefined){
            return "no user"
        }
        return userData
    },
    async updateUser(userData){
        let states=`update user set user_name="${userData.userName}",password="${userData.password}",user_sex="${userData.userSex}",user_dept="${userData.userDept}",note="${userData.note}" where user_id="${userData.userId}"`
        let res=await Mysql.linkMySQL(states);
        if(res==undefined)
        return "success"
        else ""
    }
}
module.exports = user;