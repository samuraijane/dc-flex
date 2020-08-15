let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log(e);

  const data = new FormData(form);
  //   console.log(stringifyFormData(data));
});

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 4);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data2 = new FormData(e.target);
  console.log(data2);
  const stringified = stringifyFormData(data2);
  console.log(stringified);
  postData(stringified).then((data2) =>
    console.log(
      `Your form has been submitted with the following data.\n\n${data2}`
    )
  );
});
const postData = (data2) => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(data2);
    }, 1500);
  });
  return promise;
};
