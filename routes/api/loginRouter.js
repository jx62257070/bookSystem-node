const router = require('koa-router')();
const controller = require('../../controllers/loginControllers');
// 获取首页活动列表
router.post("/login", controller.login);

module.exports = router