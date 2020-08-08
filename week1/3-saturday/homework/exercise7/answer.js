function printBanner(text) {
    let str = "*";
    console.log(str.repeat(text.length + 2));
    console.log(str + text + str);
    console.log(str.repeat(text.length + 2));
}

printBanner("I love cats!");