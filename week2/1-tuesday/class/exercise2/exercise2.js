const fullName = ["Adam", "Michael", "Szaruga"];

function printInitials(name){
    for(i = 0; i < name.length; i++){
        console.log(name[i][0]);
    }
}

printInitials(fullName);