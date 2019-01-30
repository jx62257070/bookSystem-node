const router = require('koa-router')()
// const login =require('../servers/login')
const loginController =require('../../controllers/loginControllers')
const loginRouter = require('./loginRouter');

// //登陆login接口
// router.post('/Login', async (ctx, next) => {
//   // let data= await login.login("demo",ctx.request.body)
//   let data= await loginController.login(ctx)
//   ctx.body = data;
// })

router.use("/Login", loginRouter.routes(),loginRouter.allowedMethods());
module.exports = router
