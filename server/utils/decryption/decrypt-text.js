const CryptoJS = require("crypto-js");

function decrypt(cipherText, secret) {
  const key = CryptoJS.enc.Utf8.parse(secret);
  const iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));
  const cipherBytes = CryptoJS.enc.Base64.parse(cipherText);

  const decrypted = CryptoJS.AES.decrypt({ ciphertext: cipherBytes }, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

  if (!decryptedText) {
    return decrypted.toString(CryptoJS.enc.Base64);
  }

  return decryptedText;
}

module.exports = { decrypt };
