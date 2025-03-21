let chai;
let expect;
before(async () => {
    chai = await import("chai");
    expect = chai.expect;
});


const CryptoJS = require('crypto-js');
const { decrypt } = require('../../utils/decryption/decrypt-text'); // Update with the correct path to your decrypt function

describe('decrypt', function () {
  const secretKey = '64bf25e4c8ac44ff8b34a1d5e29cd9326a0ef02304c8de83547fb85b50a94a38';
  const plainText = 'This is a secret message from vethan';
  
  let encryptedText;

  beforeEach(function () {
    const encrypted = CryptoJS.AES.encrypt(plainText, CryptoJS.enc.Utf8.parse(secretKey), {
      iv: CryptoJS.lib.WordArray.create(CryptoJS.enc.Utf8.parse(secretKey).words.slice(0, 4)),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    encryptedText = encrypted.toString();
  });

  it('should decrypt the text correctly', function () {
    const decryptedText = decrypt(encryptedText, secretKey);
    
    expect(decryptedText).to.equal(plainText);
  });

  it('should return Base64 if decryption fails (invalid ciphertext)', function () {
    
        const invalidCipherText = 'invalid-cipher-text';
        const result = decrypt(invalidCipherText, secretKey);
        expect(result).to.equal('Base64');
  });
});
