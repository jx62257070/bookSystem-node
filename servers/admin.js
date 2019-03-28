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
    async updateAdmin(adminData){
        let states=`update admin set admin_name="${adminData.adminName}",password="${adminData.password}",admin_sex="${adminData.adminSex}",admin_phone="${adminData.adminPhone}",permission="${adminData.permission}",note="${adminData.note}" where admin_id="${adminData.adminId}"`
        let res=await Mysql.linkMySQL(states);
        if(res==undefined)
        return "success"
        else ""
    }
}
module.exports = admin;