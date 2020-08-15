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

    }
);
});

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
        }, 1500);
    });
    return promise;
}