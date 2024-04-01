document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passField = document.getElementById("user-pass");
  const pass = passField.value;
  console.log(email, pass);

  if (email === "asd@gmail.com" && pass === "asdf") {
    console.log("valid user");
  } else {
    console.log("invelid user");
  }
});
