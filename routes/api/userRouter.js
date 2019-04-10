const router = require('koa-router')();
const controller = require('../../controllers/userControllers');
// 登陆
router.post("/getBookListByType", controller.getBookListByType);

module.exports = router