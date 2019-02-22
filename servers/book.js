const data = require('../utils/testMysql');

const book={
    async getBookList(){
        let states = `select * from book`;
        let bookList=await data.getAllDataMySQL(states);
        bookList.forEach(function(item){
            item.bookName = item.book_name;
            delete item.book_name;     
            item.pressTime =item.press_date.getFullYear() + "-" + (item.press_date.getMonth() + 1) + "-" + item.press_date.getDate();;
            delete item.press_date;
        })
        return bookList
    }
}

module.exports = book;