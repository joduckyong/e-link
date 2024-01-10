import cryptoJs from 'crypto-js';

const secretKey = '12345678901234567890123456789012';
const iv = 'abcdefghijklmnop';

// 암호화
export const encrypt = (text) => {
  const cipher = cryptoJs.AES.encrypt(text, cryptoJs.enc.Utf8.parse(secretKey), {
    iv: cryptoJs.enc.Utf8.parse(iv),
    padding: cryptoJs.pad.Pkcs7,
    mode: cryptoJs.mode.CBC,
  });

  return cipher.toString();
};

// 복호화
export const decrypt = (encryptedText) => {
  const decipher = cryptoJs.AES.decrypt(encryptedText, cryptoJs.enc.Utf8.parse(secretKey), {
    iv: cryptoJs.enc.Utf8.parse(iv),
    padding: cryptoJs.pad.Pkcs7,
    mode: cryptoJs.mode.CBC,
  });

  return decipher.toString(cryptoJs.enc.Utf8);
};
