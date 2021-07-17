// submit buttons
let cypherSubmit = document.getElementById("submit_cypher");
let decypherSubmit = document.getElementById("submit_decypher");
// get the h3 elements that will display encrypted and decrypted messages
let encryptedP = document.getElementById("encrypted");
let decryptedP = document.getElementById("decrypted");


// encoding the secret message
cypherSubmit.addEventListener("click", function(){
    let secretVal = document.getElementById("secret").value;
    let shiftVal = Number(document.getElementById("shift").value);
    let message1 = caesarCypher(secretVal, shiftVal);
    encryptedP.innerText = message1;
});

// decoding the secret message
decypherSubmit.addEventListener("click", function(){
    let cypherVal = document.getElementById("cypher").value;
    let keyVal = Number(document.getElementById("key").value);
    let message2 = caesarDecypher(cypherVal, keyVal);
    decryptedP.innerText = message2;
});

// functions below
// cypher
function caesarCypher(secret, shift) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let cypher = "";
    secret = secret.toLowerCase();
    for (let i = 0; i < secret.length; i++){
        let char = secret[i];
        if (alpha.includes(char)) {
            let pos = alpha.indexOf(char);
            let newPos = pos+shift;
            if (newPos >= 26) {
                newPos = newPos % 26;
            }
            let newChar = alpha[newPos];
            cypher += newChar;
        } else {
            cypher += char;
        }
    }
    return cypher;
}

//decypher
function caesarDecypher(cypher, key){
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let decypher = "";
    cypher = cypher.toLowerCase();
    for (let i = 0; i < cypher.length; i++){
        let char = cypher[i];
        if (alpha.includes(char.toLowerCase())) {
            let pos = alpha.indexOf(char);
            let newPos = pos-key;
            if (newPos < 0) {
                newPos = 25-((newPos+1)*-1)%26;
            }
            let newChar = alpha[newPos];
            decypher += newChar;
        } else {
            decypher += char;
        }
    }
    return decypher;
}
