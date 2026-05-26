// Coupon Toggle Button

const offerBtn = document.getElementById("offerBtn");
const couponText = document.getElementById("couponText");

offerBtn.addEventListener("click", () => {
  if (couponText.innerText === "") {
    couponText.innerText = "Use Code: NOVA30";
  } else {
    couponText.innerText = "";
  }
});

// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email");
    return;
  }

  alert("Form Submitted Successfully!");

  form.reset();
});
