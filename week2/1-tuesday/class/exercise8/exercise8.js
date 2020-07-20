const randomNumbers = [-1, 5, -25, -3, 99, 20];

function numberCounter(numbers){
    var positiveCount = 0;
    var negativeCount = 0;
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            positiveCount++;
        } else if(numbers[i] < 0){
            negativeCount++;
        }
    }
    return console.log("Positive Numbers: " + positiveCount + '\n' + "Negative Numbers: " + negativeCount);
}

numberCounter(randomNumbers);