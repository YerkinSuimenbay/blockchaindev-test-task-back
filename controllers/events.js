const getTransferEvents = require("../services/get-transfer-events");
const { getManyEvents, createManyEvents } = require("../services/events");

const getAllEvents = async (req, res) => {
  try {
    const events = await getManyEvents();

    res.status(200).json({ count: events.length, events });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const populateEvents = async (req, res) => {
  try {
    const events = await getTransferEvents();
    await createManyEvents(events);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  getAllEvents,
  populateEvents,
};
