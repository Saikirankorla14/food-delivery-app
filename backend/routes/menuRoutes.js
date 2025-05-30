const express = require("express");
const {
  getAllMenuItems,
  createMenuItem,
} = require("../controllers/menuController");

const router = express.Router();

router.get("/", getAllMenuItems);
router.post("/", createMenuItem);

module.exports = router;
