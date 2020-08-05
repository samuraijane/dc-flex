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

//Rudy's Frankenstein solution
//Caesar Cipher and Caesar Cipher 2
// parameter 1 is the string, parameter 2 is the value to shift
// function cipher(text, shift) {
//     var cipher_string = "";
//     for (var i = 0; i < text.length; i++) {
//         var char_original = text.charAt(i).charCodeAt(text);
//         if (shift > 0){
//             // console.log(z);
//             if (char_original === 32) {
//                 cipher_string += (String.fromCharCode(char_original));    
//             }
//             else if (char_original >= 97 && char_original <= 122) {
//                 while ( shift > 26) {
//                     shift = shift - 26;
//                 }
//                 var char_shift = (text.charAt(i).charCodeAt(text)) + shift;
//                 if ((122 - char_shift) < 0 ) {
//                     char_shift = (char_shift - 122 - 1) + 97;
//                 }
//                 else {
//                 }
//                 cipher_string += (String.fromCharCode(char_shift));
//             }
//             else if (char_original >= 65 && char_original <= 90) {
//                 while ( shift > 26) {
//                     shift = shift - 26;
//                 }
//                 var char_shift = (text.charAt(i).charCodeAt(text)) + shift;
//                 if ((90 - char_shift) < 0) {
//                     char_shift = (char_shift - 90 - 1) + 65;
//                 }
//                 else {
//                 }
//                 cipher_string += (String.fromCharCode(char_shift));
//             }
//         }
//         else if (shift < 0) {
//             if (char_original === 32) {
//                 cipher_string += (String.fromCharCode(char_original));    
//             }
//             else if (char_original >= 97 && char_original <= 122) {
//                 while ( shift < -26) {
//                     shift = shift + 26;
//                 }
//                 var char_shift = (text.charAt(i).charCodeAt(text)) + shift;
//                 // console.log(z);
//                 if ((char_shift - 97) < 0 ) {
//                     char_shift = 122 - (97 - char_shift - 1);
//                 }
//                 else {
//                 }
//                 cipher_string += (String.fromCharCode(char_shift));
//             }
//             else if (char_original >= 65 && char_original <= 90) {
//                 while ( shift < -26) {
//                     shift = shift + 26;
//                 }
//                 var char_shift = (text.charAt(i).charCodeAt(text)) + shift;
//                 // console.log(z);
//                 if ((char_shift - 65) < 0 ) {
//                     char_shift = 90 - (65 - char_shift - 1);
//                 }
//                 else {
//                 }
//                 cipher_string += (String.fromCharCode(char_shift));
//             }
//         }
//         else {
//         }
//     }

//     console.log(cipher_string);
//     // Unicode A - Z : 65 - 90
//     // Unicode a - z : 97 - 122
//     // console.log(String.fromCharCode(92));
// }
// cipher("JB is our Direction in RESIDENCE", 13);
// cipher("WO vf bhe Qverpgvba va ERFVQRAPR", -13);