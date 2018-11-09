const router = require("express").Router();
const forumRoutes = require("./forumApi");

router.use("/forum", forumRoutes);

module.exports = router;
