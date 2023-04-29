const { chat, getAllChats,simple } = require("../controllers/chat");
const { checkApiKey } = require("../middlewares/apiKey");
const router = require("express").Router();

router.route("/chat/:apiKey").post(checkApiKey, chat);
router.route("/getchats/:apiKey").get(checkApiKey, getAllChats);
router.post('/test',simple)

module.exports = router;
