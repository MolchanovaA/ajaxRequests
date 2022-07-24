function registrationCallback(e) {
  e.preventDefault();

  let info = new InfoFromForm(this);
  if (info.collectInfo.emptyFieldName) return;
  new AjaxRequest(ajaxHelperRegistration, info.collectInfo);
}

let regg = document.querySelector("#reg");
regg.addEventListener("submit", registrationCallback);

let ajaxHelperRegistration = {
  succes(e) {
    console.log(e.response, "succes FROM OBJECT");
  },
  error() {
    console.log("error");
  },
  path: "/registration",
};

let ajaxHelperAuth = {
  succes(e) {
    console.log(e.response, "succes FROM OBJECT");
  },
  error() {
    console.log("error");
  },
  path: "/authorisation",
};

function authCallback(e) {
  e.preventDefault();

  let info = new InfoFromForm(this);
  if (info.collectInfo.emptyFieldName) return;
  new AjaxRequest(ajaxHelperAuth, info.collectInfo);
}

let auth = document.querySelector("#auth");
auth.addEventListener("submit", authCallback);
