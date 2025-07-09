const baseUrl = 'https://prometheus-app.onrender.com'; // Change this after deployment

document.getElementById("signupForm").onsubmit = async (e) => {
  e.preventDefault();
  const res = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
    }),
  });
  alert(await res.text());
};

document.getElementById("loginForm").onsubmit = async (e) => {
  e.preventDefault();
  const res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
  });
  const data = await res.json();
  if (data.success) {
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = "profile.html";
  } else {
    alert("Login failed");
  }
};
