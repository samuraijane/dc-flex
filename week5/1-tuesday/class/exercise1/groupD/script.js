const form = document.getElementById("contact-form");
const button = document.getElementById("submit");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const stringified = stringifyFormData(data);
    postData(stringified).then(data => console.log(`Your form has been submitted with the following data.\n\n${data}`));
});

function stringifyFormData(fd){
    const data = {};
    for(let key of fd.keys()){
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 4);
}

const postData = (data) => {
    const promise = new Promise((res, rej) => {
        button.disabled = true;
        setTimeout(() => {
            res(data);
        }, 1500);
    });
    setTimeout(() => {
        button.disabled = false;
    }, 2000);
    return promise;
}
