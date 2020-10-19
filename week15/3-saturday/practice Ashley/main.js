let status = false;
const form = document.querySelector("#gitLog");

const logStatus = document.querySelector("#loggedIn");

const findStatus = () => {
  if (status === false) {
    return "logged out";
  } else {
    return "still logged in";
  }
};
logStatus.textContent = findStatus();

const submitHandler = () => {
  status = true;
  logStatus.textContent = findStatus();
  return;
};
form.addEventListener("click", submitHandler());

const logOutButton = document.querySelector("#loggedOut");
const logOutStatus = () => {
  status = false;
  logStatus.textContent = findStatus();
  return;
};
logOutButton.addEventListener("click", logOutStatus);
