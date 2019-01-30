let codes = require('../utils/statuscode')
module.exports = {
    restify:(pathPrefix)=>{
        pathPrefix = pathPrefix || '/api'
        return async(ctx, next) => {
            if (ctx.request.path.startsWith(pathPrefix)) {
                ctx.rest = (code, msg, data) => {
                    ctx.response.type = 'application/json'
                    ctx.response.body = {
                        code,
                        msg,
                        data
                    }        
                }
                try {
                    await next()
                    if (ctx.response.body && (ctx.response.body.code == 1000 || (ctx.response.body.code >= 3000 && ctx.response.body.code < 4000))) {
                        ctx.rest(ctx.response.body.code, ctx.response.body.msg, ctx.response.body.data)
                    }else if (ctx.response.body) {
                        ctx.rest(ctx.response.body.code, codes[ctx.response.body.code], ctx.response.body.data)
                    } else {
                        ctx.rest(500, codes[500], "");
                    }
                } catch (e) {
                    // 记录日志
                    throw e;
                }
            } else {
                await next()
            }
        }
    }
}