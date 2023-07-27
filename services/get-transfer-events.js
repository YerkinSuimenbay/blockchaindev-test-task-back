const { Web3 } = require("web3");
const abi = require("../constants/abi");

// Connect to an Ethereum node
const web3 = new Web3(process.env.WEB3_PROVIDER);

async function getTransferEvents() {
  const usdtContractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
  const usdtContractABI = abi;

  const usdtContract = new web3.eth.Contract(
    usdtContractABI,
    usdtContractAddress
  );

  const fromBlock = 17612968;
  const toBlock = 17612970;

  try {
    const events = await usdtContract.getPastEvents("Transfer", {
      fromBlock: fromBlock,
      toBlock: toBlock,
    });

    // Process Transfer events
    // events.forEach((event) => {
    //   const sender = event.returnValues._from;
    //   const recipient = event.returnValues._to;
    //   const amount = event.returnValues._value;
    //   console.log(typeof amount, typeof sender);
    //   console.log(`From: ${sender}, To: ${recipient}, Amount: ${amount}`);
    // });

    return events;
  } catch (error) {
    console.error("Error fetching events:", error);

    return [];
  }
}

module.exports = getTransferEvents;
