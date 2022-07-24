let regg = document.querySelector("#reg");
regg.addEventListener("submit", callback);

let ajaxHelper = {
  succes(e) {
    console.log(e.response, "succes FROM OBJECT");
  },
  error() {
    console.log("error");
  },
  path: "/path",
};

function callback(e) {
  e.preventDefault();

  let info = new InfoFromForm(this);

  if (info.collectInfo.emptyFieldName) return;

  new AjaxRequest(ajaxHelper, info.collectInfo);
}
