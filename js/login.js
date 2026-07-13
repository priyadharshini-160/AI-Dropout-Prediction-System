document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if(user == null){

        alert("No registered user found. Please register first.");

        window.location.href = "register1.html";

        return;

    }

    if(email === user.email && password === user.password){

    localStorage.setItem("role", role);
    localStorage.setItem("loggedInUser", email);

    alert("Login Successful!");

    window.location.href = "dashboard.html";

}

    else{

        alert("Invalid Email or Password!");

    }

});
