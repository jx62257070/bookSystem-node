const Mysql = require('../utils/testMysql');
const utils = require('../utils/util')
const BR = {
    async borrowBook(borrowData){
        let borrowTime = utils.timeForMat('+',0)
        let returnTime = utils.timeForMat('+',30)
        let states = `INSERT INTO borrow_return(admin_id,user_id,ISBN,borrow_time,return_time,is_return,note)VALUES("${borrowData.adminId}","${borrowData.user_id}","${borrowData.ISBN},"${borrowTime}","${returnTime}","0","${borrowData.note}");`
        let res=await Mysql.linkMySQL(states);
        states = `INSERT INTO admin_user(admin_id,ISBN,confirm,time)VALUES("${returnData.adminId}","${returnData.ISBN}","0",${borrowTime}");`//借还书日志,confirm=0:借书,1:还书
        let res=await Mysql.linkMySQL(states);
        return '借书成功'
    },
    async returnBook(returnData){
        let returnTime = utils.timeForMat('+',0)
        let states=`update borrow_return set is_return="${'1'}" where user_id="${returnData.user_id}" and ISBN="${returnData.ISBN}" and is_return="0"`
        let res=await Mysql.linkMySQL(states);
        states = `INSERT INTO admin_user(admin_id,ISBN,confirm,time)VALUES("${returnData.adminId}","${returnData.ISBN}","1",${returnTime}");`
        let res=await Mysql.linkMySQL(states);
        return '还书成功'
    },

}
module.exports = BR;