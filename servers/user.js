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
    async updateBook(bookData){
        let states=`update user set user_name="${bookData.userName}",password="${bookData.password}",user_sex="${bookData.userSex}",user_dept="${bookData.userDept}",note="${bookData.note}" where user_id="${bookData.userId}"`
        let res=await Mysql.linkMySQL(states);
        if(res==undefined)
        return "success"
        else ""
    }
}
module.exports = user;