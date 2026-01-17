const { getPayment, updateStatus } = require("./storage");

function confirmPayment(id) {
  const payment = getPayment(id);
  if (!payment) {
    return "NOT FOUND";
  }

  updateStatus(id, "CONFIRMED");
  return "CONFIRMED";
}

module.exports = {
  confirmPayment
};
