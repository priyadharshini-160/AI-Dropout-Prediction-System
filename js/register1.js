document.getElementById("registerForm").addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        alert("Passwords do not match!");

        return;

    }

    const user = {

        email: email,

        password: password

    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!\nPlease login using your registered email and password.");

window.location.href = "index.html";

});