const randomString = "Random String";

function checkForSorE(string){
    var lowerCase = string.toLowerCase();
    var splitString = lowerCase.split('');
    for(var i = 0; i < splitString.length; i++){
        switch(splitString[i]){
            case 's':
            case 'e':
                return true;
            default:
                break;
        }
    }
    return false;
}

console.log(checkForSorE(randomString));
