const positiveNumbers = [1, 5, 25, 3, 99, 20];

function findLargest(nums) {
    var largestNum = 0;
    for(var i =0; i < nums.length; i++){
        if(nums[i] > largestNum){
            largestNum = nums[i];
        }
    }
    return largestNum;
}

console.log(findLargest(positiveNumbers));