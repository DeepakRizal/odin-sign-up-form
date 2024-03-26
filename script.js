const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

console.log(password, confirmPassword);

confirmPassword.addEventListener("blur", function () {
  if (password.value !== confirmPassword.value) {
    let errorPara = document.createElement("p");
    errorPara.textContent = "* Passwords do not match";
    errorPara.classList.add("error");
    password.parentNode.appendChild(errorPara);
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
  }
});
