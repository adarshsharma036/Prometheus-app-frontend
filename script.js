const baseUrl = 'https://prometheus-app.onrender.com'; // Your backend

// Select form fields for signup
const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");

// Signup handler
document.getElementById("signupForm").onsubmit = async (e) => {
  e.preventDefault();
  const res = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    }),
  });
  alert(await res.text());
};

// Select login fields
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

// Login handler
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
