const { createPayment } = require("./payment");
const { confirmPayment } = require("./confirm");
const { logInfo } = require("./logger");

const userWallet = "0xUserWalletHere";
const merchantWallet = "0xMerchantWalletHere";

function startApp() {
  logInfo("Starting Crypto Payment Gateway");

  const paymentId = createPayment(userWallet, merchantWallet, 25);
  logInfo("Payment Created: " + paymentId);

  const status = confirmPayment(paymentId);
  logInfo("Payment Status: " + status);
}

startApp();
