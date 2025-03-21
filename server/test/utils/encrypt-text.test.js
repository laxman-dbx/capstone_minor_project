let chai;
let expect;
before(async () => {
    chai = await import("chai");
    expect = chai.expect;
});

const CryptoJS = require('crypto-js');
const { encrypt_text } = require('../../utils/encryption/encrypt-text'); // Update with the correct path

describe('encrypt_text', function () {
  const secretKey = '64bf25e4c8ac44ff8b34a1d5e29cd9326a0ef02304c8de83547fb85b50a94a38';
  const plainText = 'This is a secret message from vethan';
  
  it('should encrypt text correctly', function () {
    const encryptedText = encrypt_text(plainText, secretKey);
    
    expect(encryptedText).to.not.equal(plainText);

    expect(encryptedText).to.be.a('string');

    const key = CryptoJS.enc.Utf8.parse(secretKey);
    const iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));
    const expectedEncryptedText = CryptoJS.AES.encrypt(plainText, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();

    expect(encryptedText).to.equal(expectedEncryptedText);
  });

  it('should handle empty plaintext', function () {
    const encryptedText = encrypt_text('', secretKey);
    expect(encryptedText).to.not.equal('');
    expect(encryptedText).to.be.a('string');
  });

  it('should handle invalid key length gracefully', function () {
    const invalidKey = 'short-key';
    const encryptedText = encrypt_text(plainText, invalidKey);
    expect(encryptedText).to.not.equal(plainText);
    expect(encryptedText).to.be.a('string');
  });
});
