const { savePayment } = require("./storage");
const { isValidWallet } = require("./wallet");

let counter = 1;

function createPayment(from, to, amount) {
  if (!isValidWallet(from) || !isValidWallet(to)) {
    return null;
  }

  const payment = {
    id: counter++,
    from: from,
    to: to,
    amount: amount,
    status: "PENDING",
    time: new Date().toISOString()
  };

  savePayment(payment);
  return payment.id;
}

module.exports = {
  createPayment
};
