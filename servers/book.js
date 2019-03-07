const data = require('../utils/testMysql');

const book={
    async getBookList(){
        let states = `select * from book`;
        let bookList=await data.getAllDataMySQL(states);
        return bookList
    },
    async addBook(bookData){
        let states = `select * from book where ISBN="${bookData.ISBN}"`;
        if(bookData.pressTime=='NaN-NaN-NaN') bookData.pressTime='0000-00-00'
        let canAdd=await data.linkMySQL(states);    
        if(canAdd==undefined){
            states = `INSERT INTO book(ISBN,book_name,author,type,press,press_date,price,stock,position,note)VALUES("${bookData.ISBN}","${bookData.bookName}","${bookData.author}","${bookData.type}","${bookData.press}","${bookData.pressTime}","${bookData.price}","${bookData.stock}","${bookData.position}","${bookData.note}");`;
            let res=await data.linkMySQL(states);
            return "success"
        }else{
            return "added" 
        }
    },
    async searchBook(bookISBN){
        let states=`select * from book where ISBN="${bookISBN}"`
        let bookData=await data.linkMySQL(states);    
        if(bookData==undefined){
            return "no book"
        }
        return bookData
    },
    async delBook(bookISBN){
        let states=`delete from book where ISBN="${bookISBN}"`
        let bookData=await data.linkMySQL(states);
        return bookData
    },
    async updateBook(bookData){
        if(bookData.pressTime=='NaN-NaN-NaN') bookData.pressTime='0000-00-00'
        let states=`update book set book_name="${bookData.bookName}",author="${bookData.author}",type="${bookData.type}",press="${bookData.press}",press_date="${bookData.pressTime}",price="${bookData.price}",stock="${bookData.stock}",position="${bookData.position}",note="${bookData.note}" where ISBN="${bookData.ISBN}"`
        let res=await data.linkMySQL(states);
        if(res==undefined)
        return "success"
        else ""
    }
}

module.exports = book;