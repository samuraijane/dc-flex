var form = document.getElementById("form");
var submit = document.getElementById("submit");

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



  var popupSpin = document.createElement("div");
  popupSpin.appendChild("main");
  popupSpin.style.position = "fixed";

  var spin = document.createElement('img');
  spin.appendChild("popupSpin");
  spin.src = "throbber_12.gif"
  