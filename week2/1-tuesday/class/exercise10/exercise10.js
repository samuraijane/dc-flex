function fiveOrThree(number){
    if(number % 5 === 0 || number % 3 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(fiveOrThree(9));
