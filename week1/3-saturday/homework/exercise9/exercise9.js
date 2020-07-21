function cipher(str, offset) {
    let alphabet = ["A","B","C","D","E","F",
    "G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z"];
    let ciphered = "";
    for(let i=0; i<str.length; i++) {
        let charToCipher = str[i];
        if(alphabet.includes(charToCipher.toUpperCase())) {
            let position = alphabet.indexOf(charToCipher.toUpperCase());
            let newPosition = (position + offset)%26;
            ciphered = ciphered.concat(alphabet[newPosition]);
        } else {
            ciphered = ciphered.concat(str[i]);
        }
    }
    return ciphered;
}

console.log(cipher("I love cats!", 3));