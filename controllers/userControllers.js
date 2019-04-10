const bookService  = require("../servers/book");
var controller = {
    getBookListByType:async function (ctx, next){
        var body=ctx.request.body;     
        let result=await bookService.getBookListByType(body.type)
        ctx.rest(200,"",result)
    },
}
module.exports = controller;