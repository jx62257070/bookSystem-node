const router = require('koa-router')();
const controller = require('../../controllers/adminControllers');
// 获取书籍列表
router.post("/getBookList", controller.getBookList);
// 添加书籍
router.post("/addBook", controller.addBook);
//搜索书籍
router.post("/searchBook", controller.searchBook);
//删除书籍
router.post("/delBook", controller.delBook);
//删除书籍
router.post("/updateBook", controller.updateBook);
module.exports = router