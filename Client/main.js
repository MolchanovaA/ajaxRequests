registration.addEventListener("submit", callback);

function callback(e) {
  e.preventDefault();

  let xh = new XMLHttpRequest();
  xh.open("POST", "http://localhost:4556/path");
  xh.addEventListener("load", () => {
    console.log(xh.response, "response");
  });
  xh.addEventListener("error", (e) => {
    console.log(e.response, "error");
  });
  xh.send();
}
