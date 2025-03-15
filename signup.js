function signup() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    if (username && password) {
        localStorage.setItem("user", username);
        localStorage.setItem("pass", password);
        alert("Sign-up successful! Now, log in.");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert("Please enter a username and password!");
    }
}
