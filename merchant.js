function isValidMerchant(wallet) {
  return wallet && wallet.startsWith("0x");
}

module.exports = {
  isValidMerchant
};
