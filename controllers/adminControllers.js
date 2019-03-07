const bookService  = require("../servers/book");
const bookModel =require("../models/bookModel")
var controller = {
    getBookList:async function (ctx, next){
        // var body=ctx.request.body;
        let result=await bookService.getBookList()
        let bookList=[]
        result.forEach(item => {
            let book=new bookModel(item)
            bookList.push(book)
        });
        ctx.rest(200,"",bookList)
    },
    addBook:async function (ctx, next){
        var body=ctx.request.body;
        let result=await bookService.addBook(body)
        ctx.rest(200,"",result)
    },
    searchBook:async function (ctx, next) {
        let result=await bookService.searchBook(ctx.request.body.ISBN)
        let book=new bookModel(result)
        ctx.rest(200,"",book)
    },
    delBook:async function (ctx, next) {
        let result=await bookService.delBook(ctx.request.body.ISBN)
        ctx.rest(200,"",result)
    },
    updateBook:async function (ctx, next) {
        let result=await bookService.updateBook(ctx.request.body)
        ctx.rest(200,"",result)
    },
}
module.exports = controller;