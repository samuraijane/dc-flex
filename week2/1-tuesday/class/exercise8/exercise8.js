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

// @caitlincraw : pretty much did the same thing besides created an empty object at the beginning and then added the summations to it. 

function sums(nums) {
    var summationOfSigns = {};
    var sumOfNeg = 0;
    var sumOfPos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            sumOfNeg = sumOfNeg + nums[i];
        } else if (numsList[i] > 0) {
            sumOfPos = sumOfPos + nums[i];
        }
    }
    summationOfSigns["Summation of Negative Numbers"] = sumOfNeg;
    summationOfSigns["Summation of Positive Numbers"] = sumOfPos;
    return summationOfSigns;
}

console.log(sums(randomNumbers));