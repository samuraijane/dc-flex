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
    loading();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    //console.log(stringified);
    postData(stringified).then(data => {
        submit.disabled = false;
        removeLoading();
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
  var main = document.getElementsByClassName("main")[0];
  

function loading (){
  main.appendChild(popupSpin)
  popupSpin.style.position = "fixed";

  var spin = document.createElement('img');
  popupSpin.appendChild(spin);
  spin.src = "img/throbber_12.gif"

  popupSpin.style.minHeight = "100vh";
  popupSpin.style.width = "100%";

  popupSpin.style.display = "flex";
  popupSpin.style.justifyContent = "center";
  popupSpin.style.alignItems = "center";
  popupSpin.style.zIndex = "999";
  popupSpin.style.top = "0";
  popupSpin.style.left ="0";
  popupSpin.style.backgroundColor = "rgba(150,150,150,.8)";
} 

function removeLoading(){

main.removeChild(popupSpin);

}