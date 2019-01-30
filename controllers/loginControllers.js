const loginService  = require("../servers/login");
var controller = {
    login:async function (ctx, next){
        var body=ctx.request.body;
        let result=await loginService.login("demo",body)
        ctx.rest(200,"",result)
    },
}
module.exports = controller;