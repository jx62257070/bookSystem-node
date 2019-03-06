const bookService  = require("../servers/book");
var controller = {
    getBookList:async function (ctx, next){
        // var body=ctx.request.body;
        let result=await bookService.getBookList()
        ctx.rest(200,"",result)
    },
    addBook:async function (ctx, next){
        var body=ctx.request.body;
        let result=await bookService.addBook(body)
        ctx.rest(200,"",result)
    },
    searchBook:async function (ctx, next) {
        let result=await bookService.searchBook(ctx.request.body.ISBN)
        ctx.rest(200,"",result)
    },
    delBook:async function (ctx, next) {
        let result=await bookService.delBook(ctx.request.body.ISBN)
        ctx.rest(200,"",result)
    },
}
module.exports = controller;