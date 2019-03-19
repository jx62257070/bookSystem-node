const bookService  = require("../servers/book");
const bookModel =require("../models/bookModel")
const userService  = require("../servers/user");
const userModel =require("../models/userModel")
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
        try {
            let result=await bookService.addBook(body)
            ctx.rest(200,"",result)
        } catch (err) {
            ctx.rest(1000, "添加用户异常", null);
            throw err;
        }

    },
    searchBook:async function (ctx, next) {
        let result=await bookService.searchBook(ctx.request.body.ISBN)
        if(result=="no book") ctx.rest(200,"",result)
        else {
            let book=new bookModel(result)
            ctx.rest(200,"",book)
        }
    },
    delBook:async function (ctx, next) {
        let result=await bookService.delBook(ctx.request.body.ISBN)
        ctx.rest(200,"",result)
    },
    updateBook:async function (ctx, next) {
        try {
            let result=await bookService.updateBook(ctx.request.body)
            ctx.rest(200,"",result)
        } catch (err) {
            ctx.rest(1000, "更新书籍异常", null);
            throw err;
        }
    },
    getUserList:async function (ctx, next){
        // var body=ctx.request.body;
        let result=await userService.getUserList()
        let userList=[]
        result.forEach(item => {
            let user=new userModel(item)
            userList.push(user)
        });
        ctx.rest(200,"",userList)
    },
    searchUser:async function (ctx, next) {    
        let result=await userService.searchUser(ctx.request.body.userId)
        if(result=="no user") ctx.rest(200,"",result)
        else {
            let user=new userModel(result)
            ctx.rest(200,"",user)
        }
    },
    updateUser:async function (ctx, next) {
        try {
            let result=await userService.updateBook(ctx.request.body)
            ctx.rest(200,"",result)
        } catch (err) {
            ctx.rest(1000, "更新用户异常", null);
            throw err;
        }

    },
}
module.exports = controller;