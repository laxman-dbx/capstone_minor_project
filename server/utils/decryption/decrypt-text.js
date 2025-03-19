const CryptoJS = require("crypto-js");

function decrypt(cipherText, secret) {
    let key = CryptoJS.enc.Utf8.parse(secret);
    const iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));
    let cipherBytes = CryptoJS.enc.Base64.parse(cipherText);

    let decrypted = CryptoJS.AES.decrypt({ ciphertext: cipherBytes }, key, {
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
