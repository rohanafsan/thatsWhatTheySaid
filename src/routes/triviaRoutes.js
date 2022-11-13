const { Router } = require('express');
const controller = require('../controller/controller')

const router = Router();

router.get("/", controller.getTrivia);

module.exports=router;
