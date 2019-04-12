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
    },
    async addAdmin(adminData){
        let states = `select * from admin where admin_id="${adminData.adminId}"`;
        let canAdd=await Mysql.linkMySQL(states);    
        if(canAdd==undefined){
            states = `INSERT INTO admin(admin_id,admin_name,password,admin_sex,admin_phone,permission,note)VALUES("${adminData.newAdminId}","${adminData.adminName}","${adminData.pessword}","${adminData.adminSex}","${adminData.adminPhone}","${adminData.permission}","${adminData.note}");`;
            let res=await Mysql.linkMySQL(states);
            let addTime =new Date()
            let SQLTime = utils.changeTimeDetil(addTime)
            states = `INSERT INTO admin_admin(admin_id,newadmin_id,add_time)VALUES("${adminData.adminId}","${adminData.newAdminId}","${SQLTime}");`
            let res=await Mysql.linkMySQL(states);
            return "success"
        }else{
            return "added" 
        }
    },
}
module.exports = admin;