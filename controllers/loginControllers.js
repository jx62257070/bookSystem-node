const loginService  = require("../servers/login");
const registerService  = require("../servers/register");
var controller = {
    login:async function (ctx, next){
        var body=ctx.request.body;
        let result=await loginService.login(body)
        ctx.rest(200,"",result)
    },
    register:async function (ctx, next) {
        console.log(ctx.request.body);
        var body=ctx.request.body;
        let result=await registerService.register(body)
        ctx.rest(200,"",result)
    }
}
module.exports = controller;