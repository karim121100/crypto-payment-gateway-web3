function formatPayment(payment) {
  return payment.id + " | " + payment.amount + " TOKEN | " + payment.status;
}

module.exports = {
  formatPayment
};
