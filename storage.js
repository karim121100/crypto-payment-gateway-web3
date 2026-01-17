const payments = [];

function savePayment(payment) {
  payments.push(payment);
}

function getPayment(id) {
  return payments.find(p => p.id === id);
}

function updateStatus(id, status) {
  const payment = getPayment(id);
  if (payment) {
    payment.status = status;
  }
}

module.exports = {
  savePayment,
  getPayment,
  updateStatus
};
