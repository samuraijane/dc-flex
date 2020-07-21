function rockPaperScissors (throw1, throw2) {
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    if (throw1 === throw2) {
        return "draw"
    } 
    else if ((throw1 === r && throw2 === p) || (throw1 === p && throw2 === s) || (throw1 === s && throw2 === r)) {
        return "player 2"
    } 
    else {
        return "player 1"
    }
}

console.log(rockPaperScissors ("rock", "paper"));