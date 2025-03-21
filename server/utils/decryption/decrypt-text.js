const CryptoJS = require("crypto-js");

function decrypt(cipherText, secret) {
    try {
        const key = CryptoJS.enc.Utf8.parse(secret);
        let iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4)); // Using first 4 words as IV

        const cipherBytes = CryptoJS.enc.Base64.parse(cipherText);

        const decrypted = CryptoJS.AES.decrypt({ ciphertext: cipherBytes }, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });

        const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

        if (decryptedText) {
            return decryptedText;
        } else {
            return 'Base64'; 
        }
    } catch (error) {
        console.error("Decryption error:", error);
        return 'Base64'; 
    }}

module.exports = { decrypt };
