import CryptoJS from 'crypto-js';

const secretKey = process.env.REACT_APP_AES_SECRETKEY;

//암호화
export const encrypt = (val) => {
  const encrypted = CryptoJS.AES.encrypt(val, secretKey);

  let result = encrypted.toString();

  return result;
};

//복호화
// export const decrypt = (encrypted) => {
//   var decrypted = CryptoJS.AES.decrypt(encrypted, secretKey);

//   return decrypted;
// };
