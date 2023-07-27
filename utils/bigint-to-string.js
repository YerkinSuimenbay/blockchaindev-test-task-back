function bigintToString(data) {
  if (typeof data !== "bigint") return;
  return `${data.toString()}n`;
}

module.exports = bigintToString;
