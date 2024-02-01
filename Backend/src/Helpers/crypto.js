import CryptoJS from "crypto-js";
import { asyncHandler } from "../utils/aysncHandler.js";

export const encryptMethods = asyncHandler((msg, key) => {
  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(msg, key).toString();
  return ciphertext;
});

// Decrypt
export const Decrypt = asyncHandler((encryptMsg, key) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  console.log(originalText); // 'my message'
});
