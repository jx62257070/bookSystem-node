const router = require('koa-router')();
const controller = require('../../controllers/adminControllers');
// 获取首页活动列表
router.post("/getBookList", controller.getBookList);

module.exports = router