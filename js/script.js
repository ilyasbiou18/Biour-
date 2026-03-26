document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name  = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg   = document.getElementById("message").value;

  let text = `الاسم: ${name}%0Aالبريد: ${email}%0Aالرسالة: ${msg}`;

  let phone = "212772940647"; // 212 = رمز المغرب
  let url = `https://wa.me/${phone}?text=${text}`;

  window.open(url, "_blank");
});