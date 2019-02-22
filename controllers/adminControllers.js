const bookService  = require("../servers/book");
var controller = {
    getBookList:async function (ctx, next){
        // var body=ctx.request.body;
        let result=await bookService.getBookList()
        ctx.rest(200,"",result)
    },
}
module.exports = controller;