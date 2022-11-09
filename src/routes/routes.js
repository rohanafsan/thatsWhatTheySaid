const { Router } = require('express');
const controller = require('../controller/controller')

const router = Router();

router.get("/", controller.getCharacters);
router.post("/", controller.postCharacters);



module.exports=router;
