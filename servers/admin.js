const Mysql = require('../utils/testMysql');
const admin = {
    async getAdminList(){
        let states = `select * from admin`;
        let adminList=await Mysql.getAllDataMySQL(states);
        return adminList
    },
    async searchAdmin(adminId){
        let states=`select * from admin where admin_id="${adminId}"`
        let adminData=await Mysql.linkMySQL(states);    
        if(adminData==undefined){
            return "no admin"
        }
        return adminData
    },
}
module.exports = admin;