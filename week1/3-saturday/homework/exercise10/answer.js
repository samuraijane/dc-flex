var dictionary = {
    a: "4",
    e: "3",
    g: "6",
    i: "1",
    s: "5",
    o: "0",
    t: "7",    
};

// function speakLeet(string) {
//     var word = "";
//     for (var i = 0; i < string.length; i++) {
//         let char = string[i];
//         if (dictionary[char.toLowerCase()]) {
//             word += dictionary[char.toLowerCase()];
//         }
//         else {
//             word += char;
//         }
//     }
//     console.log(word);
// }

// speakLeet("HELLO");
// speakLeet("Hello");
// speakLeet("LEET SPEAK leet speak")

function leetspeak (string) {
    var word = "";
    string.split("").forEach(function (letter){
        if (dictionary[letter.toLowerCase()]) {
            word += dictionary[letter.toLowerCase()];
            }
            else {
                word += letter;
            }
    });
    console.log(word);
}
leetspeak("Hello my friend");
// leetspeak("HELLO MY FRIEND");