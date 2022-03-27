// submit buttons
let cipherSubmit = document.getElementById("submit_cipher");
let decipherSubmit = document.getElementById("submit_decipher");
// get the h3 elements that will display encrypted and decrypted messages
let encryptedP = document.getElementById("encrypted");
let decryptedP = document.getElementById("decrypted");

// encoding the secret message
cipherSubmit.addEventListener("click", function () {
  let secretVal = document.getElementById("secret").value;
  let shiftVal = Number(document.getElementById("shift").value);
  let message1 = caesarCipher(secretVal, shiftVal);
  encryptedP.innerText = message1;
});

// decoding the secret message
decipherSubmit.addEventListener("click", function () {
  let cipherVal = document.getElementById("cipher").value;
  let keyVal = Number(document.getElementById("key").value);
  let message2 = caesarDecipher(cipherVal, keyVal);
  decryptedP.innerText = message2;
});

// functions below
// cipher
function caesarCipher(message, key) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let secret = "";
  message = message.toUpperCase();
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let pos = alphabet.indexOf(char);
    if (pos > -1) {
      let newPos = pos - key;
      if (newPos < 0) {
        newPos = 25 + ((newPos + 1) % 26);
      }
      let newChar = alphabet[newPos];
      secret += newChar;
    } else {
      secret += char;
    }
  }
  return secret;
}

//decipher
function caesarDecipher(secret, shift) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let message = "";
  secret = secret.toUpperCase();
  for (let i = 0; i < secret.length; i++) {
    let char = secret[i];
    let pos = alphabet.indexOf(char);
    if (pos > -1) {
      let newPos = (pos + shift) % 26;
      let newChar = alphabet[newPos];
      message += newChar;
    } else {
      message += char;
    }
  }
  return message;
}
