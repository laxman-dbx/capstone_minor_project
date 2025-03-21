const CryptoJS = require("crypto-js");
require("dotenv").config();

function encrypt_text(plaintext, secret) {
  const key = CryptoJS.enc.Utf8.parse(secret);
  const iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));

  const cipherText = CryptoJS.AES.encrypt(plaintext, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return cipherText.toString();
}

module.exports = { encrypt_text };
