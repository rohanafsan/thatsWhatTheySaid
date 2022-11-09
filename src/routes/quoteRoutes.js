const { Router } = require('express');
const controller = require('../controller/controller')

const router = Router();

router.get("/", controller.getCharacterQuotes);
router.get("/:id", controller.getCharacterQuotesByID);
router.post("/", controller.postQuote);
router.delete("/:id", controller.deleteCharacterQuotesByID);


module.exports=router;
