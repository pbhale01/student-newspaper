function login() {
  const name = document.getElementById("username").value;
  const mobile = document.getElementById("mobile").value;
  const role = document.getElementById("role").value;

  if (!name || !mobile) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userRole", role);

  window.location.href = "newspaper.html";
}

window.onload = function () {
  const user = localStorage.getItem("userName");
  const role = localStorage.getItem("userRole");

  if (user && document.getElementById("userInfo")) {
    document.getElementById("userInfo").innerText =
      `Welcome ${user} (${role})`;
  }
};
