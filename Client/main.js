registration.addEventListener("submit", callback);

function callback(e) {
  e.preventDefault();

  let xh = new XMLHttpRequest();
  xh.open("POST", "http://localhost:9987/path");
  xh.addEventListener("load", () => {
    console.log("response");
  });
  xh.addEventListener("error", (e) => {
    console.log(e.response, "error");
  });
  xh.send();
}
