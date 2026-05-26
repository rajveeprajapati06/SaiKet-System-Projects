// script.js

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const successMessage = document.getElementById("successMessage");

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email");
    return;
  }

  successMessage.innerText = "Message Sent Successfully!";

  form.reset();
});
