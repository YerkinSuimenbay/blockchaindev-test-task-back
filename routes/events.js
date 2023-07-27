const express = require("express");
const router = express.Router();

const { getAllEvents, populateEvents } = require("../controllers/events");

router.get("/", getAllEvents);
router.get("/populate", populateEvents);

module.exports = router;
