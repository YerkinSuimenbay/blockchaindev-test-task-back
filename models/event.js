const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  address: String,
  blockHash: String,
  blockNumber: String,
  data: String,
  logIndex: String,
  removed: Boolean,
  topics: [String],
  transactionHash: String,
  transactionIndex: String,
  returnValues: {
    0: String,
    1: String,
    2: BigInt,
    __length__: Number,
    _from: String,
    _to: String,
    _value: BigInt,
  },
  event: String,
  signature: String,
  raw: {
    data: String,
    topics: [String],
  },
});

module.exports = model("Event", EventSchema);
