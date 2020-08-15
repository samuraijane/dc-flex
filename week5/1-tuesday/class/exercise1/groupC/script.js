var form = document.getElementById("form");
var submit = document.getElementById("submit");
var spin = document.createElement('div');

form.addEventListener('submit', (e) => handleSubmit(e));


function stringifyFormData(fd){
    const data = {};
    for (let key of fd.keys()){
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 4);
}

const handleSubmit = e => {
    e.preventDefault();
    submit.disabled = true;
    // wait message
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    //console.log(stringified);
    postData(stringified).then(data => {
        submit.disabled = false;
        console.log(`Your form has been submitted with the following data.\n\n${data}`)
    });
}

  const postData = (data) => {
    console.log(data);
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 1500);
    });
    return promise;
  };