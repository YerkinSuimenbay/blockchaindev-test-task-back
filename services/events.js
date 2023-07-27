const Event = require("../models/event");
const bigintToString = require("../utils/bigint-to-string");

const getManyEvents = async () => {
  let tasks = await Event.find({});

  tasks = tasks.map((task) => {
    const { _doc } = task;

    return {
      ..._doc,
      returnValues: {
        ..._doc.returnValues,
        2: _doc.returnValues[2].toString(),
        2: bigintToString(_doc.returnValues[2]),
        _value: bigintToString(_doc.returnValues._value),
      },
    };
  });

  return tasks;
};

const createManyEvents = async (events) => {
  try {
    const tasks = await Event.create(events);

    return tasks;
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  getManyEvents,
  createManyEvents,
};

// EXAMPLE
// const newEvent = await Event.create({
//   address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
//   blockHash:
//     "0x7da02ead67f43ddefd9af143975d3463dc7a43175ec5c648a014fa2ba47dfd0f",
//   blockNumber: 17612970n,
//   data: "0x0000000000000000000000000000000000000000000000000000000005f5e100",
//   logIndex: 318n,
//   removed: false,
//   topics: [
//     "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//     "0x00000000000000000000000006f4e52f1dbb2ec7ad34a26eb2cdf245ee0b6c82",
//     "0x000000000000000000000000f15910599b421b35aa488ca7c84be3246f14c40b",
//   ],
//   transactionHash:
//     "0x4383e841b42301c32a11319382372a7db4c859c0ff501e1ec17a9ed19a902f10",
//   transactionIndex: 171n,
//   returnValues: {
//     0: "0x06F4e52f1DbB2EC7Ad34a26Eb2CDF245eE0b6c82",
//     1: "0xf15910599B421b35AA488Ca7C84be3246f14C40b",
//     2: 100000000n,
//     __length__: 3,
//     _from: "0x06F4e52f1DbB2EC7Ad34a26Eb2CDF245eE0b6c82",
//     _to: "0xf15910599B421b35AA488Ca7C84be3246f14C40b",
//     _value: 100000000n,
//   },
//   event: "Transfer",
//   signature:
//     "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//   raw: {
//     data: "0x0000000000000000000000000000000000000000000000000000000005f5e100",
//     topics: [
//       "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//       "0x00000000000000000000000006f4e52f1dbb2ec7ad34a26eb2cdf245ee0b6c82",
//       "0x000000000000000000000000f15910599b421b35aa488ca7c84be3246f14c40b",
//     ],
//   },
// });
