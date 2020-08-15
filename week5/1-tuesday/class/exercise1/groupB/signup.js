let form = document.getElementById("formcoookie");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    const data = new FormData(form);
    console.log(stringifyFormData(data));
    const stringified = stringifyFormData(data);
    postData(stringified).then(data => console.log(`Your form has been submitted with the following data.\n\n${data}`))
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