const Mysql = require('../utils/testMysql');
const utils = require('../utils/util')
const BR = {
    async borrowBook(borrowData){
        try {
            let states = `select * from book where ISBN="${borrowData.ISBN}"`;
            let canAdd=await Mysql.linkMySQL(states);  
            if(canAdd!=undefined){
                let stock=+canAdd.stock  
                if(stock!=0){
                    let borrowTime = utils.timeForMat('+',0)
                    let returnTime = utils.timeForMat('+',30)
                    let states = `INSERT INTO borrow_return(admin_id,user_id,ISBN,borrow_time,return_time,is_return,is_reborrow,note)VALUES("${borrowData.adminId}","${borrowData.userId}","${borrowData.ISBN}","${borrowTime}","${returnTime}","0","0","${borrowData.note}");`
                    let res=await Mysql.linkMySQL(states);
                    states = `INSERT INTO admin_user(admin_id,user_id,ISBN,confirm,time)VALUES("${borrowData.adminId}","${borrowData.userId}","${borrowData.ISBN}","0","${borrowTime}");`//借还书日志,confirm=0:借书,1:还书
                    res=await Mysql.linkMySQL(states);
                    stock=stock-1
                    states=`update book set stock="${stock}" where ISBN="${borrowData.ISBN}"`
                    res=await Mysql.linkMySQL(states);
                    return '借书成功！'
                }else{
                    return "库存不足！" 
                }

            }else{
                return "未收录的书籍！" 
            }
        } catch (error) {
            console.log(error);
        }
    },
    async returnBook(returnData){
        let states = `select * from book where ISBN="${returnData.ISBN}"`;
        let canAdd=await Mysql.linkMySQL(states);
        if(canAdd!=undefined){
            let stock=+canAdd.stock 
            let states = `select * from borrow_return where user_id="${returnData.userId}" and ISBN="${returnData.ISBN}" and is_return="0"`;
            let canReturn=await Mysql.linkMySQL(states);
            if(canReturn!=undefined){
                let returnTime = utils.timeForMat('+',0)
                let states=`update borrow_return set is_return="1" where user_id="${returnData.userId}" and ISBN="${returnData.ISBN}" and is_return="0"`
                let res=await Mysql.linkMySQL(states);
                states = `INSERT INTO admin_user(admin_id,ISBN,user_id,confirm,time)VALUES("${returnData.adminId}","${returnData.ISBN}","${returnData.userId}","1","${returnTime}");`
                res=await Mysql.linkMySQL(states);
                stock=stock+1
                states=`update book set stock="${stock}" where ISBN="${returnData.ISBN}"`
                res=await Mysql.linkMySQL(states);
                return '还书成功'
            }else{
                return '无借书记录！'
            }

        }else{
            return "未收录的书籍！" 
        }

    },

}
module.exports = BR;