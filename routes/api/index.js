const router = require('koa-router')()
// const login =require('../servers/login')
const loginRouter = require('./loginRouter');
const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');

// //登陆login接口
// router.post('/Login', async (ctx, next) => {
//   // let data= await login.login("demo",ctx.request.body)
//   let data= await loginController.login(ctx)
//   ctx.body = data;
// })

router.use("/Login", loginRouter.routes(),loginRouter.allowedMethods());
router.use("/Admin", adminRouter.routes(),adminRouter.allowedMethods());
router.use("/User", userRouter.routes(),userRouter.allowedMethods());
module.exports = router
