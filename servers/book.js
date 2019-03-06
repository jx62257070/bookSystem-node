const data = require('../utils/testMysql');

const book={
    async getBookList(){
        let states = `select * from book`;
        let bookList=await data.getAllDataMySQL(states);
        bookList.forEach(function(item){
            item.bookName = item.book_name;
            delete item.book_name;     
            if(item.press_date != "0000-00-00"){
                item.pressTime =item.press_date.getFullYear() + "-" + (item.press_date.getMonth() + 1) + "-" + item.press_date.getDate();
                delete item.press_date;
            }else item.pressTime == ''
        })
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
        }else{
            bookData.press_date =bookData.press_date.getFullYear() + "-" + (bookData.press_date.getMonth() + 1) + "-" + bookData.press_date.getDate();;
            return bookData
        }
    },
    async delBook(bookISBN){
        let states=`delete from book where ISBN="${bookISBN}"`
        let bookData=await data.linkMySQL(states);
        return bookData
    }
}

module.exports = book;