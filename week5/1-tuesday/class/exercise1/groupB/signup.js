let form = document.getElementById("formcoookie");


form.addEventListener("submit", function(e){
    e.preventDefault();
    let subbut = document.getElementById("submit-button");
    subbut.disabled=true;
    let newDiv = document.createElement('div');
    newDiv.innerHTML = "Please wait while we review your order..."
    form.appendChild(newDiv);

    console.log(e);
    const data = new FormData(form);
    console.log(stringifyFormData(data));
    const stringified = stringifyFormData(data);

    postData(stringified).then(data => {
        subbut.disabled=false;
        console.log(`Your form has been submitted with the following data.\n\n${data}`)
        let dataInfo = data.forEach(listIt)
        function listIt(item, index) {
            newDiv.innerHTML += index + ":" + item + "<br>"; 
        }
        newDiv.innerHTML = `Here is your order: \n\n ${data}`;
    }
);
});

// NEED TO FIGURE OUT HOW TO INCOPORATE THIS AND THEN CALL IT IN postData function

// let dataInfo = data.forEach(listIt);

// function listIt(item, index) {
//    newDiv.innerHTML += index + ": " + item + "<br />";
// } 

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()){
        data[key] = fd.get(key);
    }
    return JSON.stringify(data,null,4);
};


const postData = (data) => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res(data);
        }, 3000);
    });
    return promise;
}
