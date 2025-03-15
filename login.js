function login() {
    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");
    let inputUser = document.getElementById("login-username").value;
    let inputPass = document.getElementById("login-password").value;

    if (inputUser === storedUser && inputPass === storedPass) {
        alert("Login successful!");
        window.location.href = "menu.html"; // Redirect to another page after login
    } else {
        alert("Invalid username or password!");
    }
}
