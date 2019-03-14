const router = require('koa-router')();
const controller = require('../../controllers/loginControllers');
// 登陆
router.post("/login", controller.login);
//注册
router.post("/register", controller.register);

module.exports = router