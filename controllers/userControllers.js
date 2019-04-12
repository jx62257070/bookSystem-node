const bookService  = require("../servers/book");
const bookModel =require("../models/bookModel")

var controller = {
    getBookListByType:async function (ctx, next){
        var body=ctx.request.body;     
        let result=await bookService.getBookListByType(body.type)
        let bookList=[]
        result.forEach(item => {
            let book=new bookModel(item)
            bookList.push(book)
        });
        ctx.rest(200,"",bookList)
    },
}
module.exports = controller;