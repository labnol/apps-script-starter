import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const encryptWithAES = (text, passphrase) => {
  return AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext, passphrase) => {
  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};

global.testAES = () => {
  const inputText = 'Hello World';
  const passphrase = 'My Secret Passphrase';

  Logger.log({ inputText });

  const encryptedText = encryptWithAES(inputText, passphrase);
  Logger.log({ encryptedText });

  const decryptedText = decryptWithAES(encryptedText, passphrase);
  Logger.log({ decryptedText });
};
