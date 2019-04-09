const Mysql = require('../utils/testMysql');
const utils = require('../utils/util')
const BR = {
    async borrowBook(borrowData){
        // console.log(borrowData);
        let SQLTime = utils.timeForMat('+',30)
        console.log(SQLTime);
        
            // let states = `select * from admin`;
            // let adminList=await Mysql.getAllDataMySQL(states);
        return '借书成功'
    },
    async returnBook(borrowData){
        console.log(borrowData);
        let addTime =new Date()
        let SQLTime = utils.changeTimeDetil(addTime)
            // let states = `select * from admin`;
            // let adminList=await Mysql.getAllDataMySQL(states);
        return '还书成功'
    },

}
module.exports = BR;