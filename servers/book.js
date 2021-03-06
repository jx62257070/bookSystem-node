const Mysql = require('../utils/testMysql');
const utils = require('../utils/util')

const book={
    async getBookList(){
        let states = `select * from book`;
        let bookList=await Mysql.getAllDataMySQL(states);
        return bookList
    },
    async addBook(bookData){
        let states = `select * from book where ISBN="${bookData.ISBN}"`;
        if(bookData.pressTime=='NaN-NaN-NaN') bookData.pressTime='0000-00-00'
        let canAdd=await Mysql.linkMySQL(states);    
        if(canAdd==undefined){
            states = `INSERT INTO book(ISBN,book_name,author,type,press,press_date,price,stock,position,note)VALUES("${bookData.ISBN}","${bookData.bookName}","${bookData.author}","${bookData.type}","${bookData.press}","${bookData.pressTime}","${bookData.price}","${bookData.stock}","${bookData.position}","${bookData.note}");`;
            let res=await Mysql.linkMySQL(states);
            let addTime =new Date()
            let SQLTime = utils.changeTimeDetil(addTime)
            states = `INSERT INTO admin_book(admin_id,ISBN,add_time)VALUES("${bookData.adminId}","${bookData.ISBN}","${SQLTime}");`
            res=await Mysql.linkMySQL(states);
            return "success"
        }else{
            return "added" 
        }
    },
    async searchBook(bookISBN){
        let states=`select * from book where ISBN="${bookISBN}"`
        let bookData=await Mysql.linkMySQL(states);    
        if(bookData==undefined){
            return "no book"
        }
        return bookData
    },
    async delBook(bookISBN){
        let states=`delete from book where ISBN="${bookISBN}"`
        let bookData=await Mysql.linkMySQL(states);
        return bookData
    },
    async updateBook(bookData){
        if(bookData.pressTime=='NaN-NaN-NaN') bookData.pressTime='0000-00-00'
        let states=`update book set book_name="${bookData.bookName}",author="${bookData.author}",type="${bookData.type}",press="${bookData.press}",press_date="${bookData.pressTime}",price="${bookData.price}",stock="${bookData.stock}",position="${bookData.position}",note="${bookData.note}" where ISBN="${bookData.ISBN}"`
        let res=await Mysql.linkMySQL(states);
        if(res==undefined)
        return "success"
        else ""
    },
    async getBookListByType(type){
        let states = `select * from book where type="${type}"`;
        let bookList=await Mysql.getAllDataMySQL(states);
        return bookList
    },

}

module.exports = book;