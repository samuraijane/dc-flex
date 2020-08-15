const form = document.getElementById("contact-form");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    console.log(stringifyFormData(data));
});

function stringifyFormData(fd){
    const data = {};
    for(let key of fd.keys()){
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 4);
};