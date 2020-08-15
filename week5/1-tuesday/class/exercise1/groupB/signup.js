let form = document.getElementById("formcoookie");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    const data = new FormData(form);
    console.log(stringifyFormData(data));
    const stringified = stringifyFormData(data);
    postData(stringified).then(data => console.log(`${data} Your form has been submitted`))
});

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()){
        data[key] = fd.get(key);
    }
    return JSON.stringify(data,null,4);
};


// const handleSubmit = e => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const stringified = stringifyFormData(data);
//     postData(stringified).then(data => console.log(`${data} Your form has been submitted`));
// }

const postData = (data) => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res('Success!');
        }, 1500);
    });
    return promise;
}