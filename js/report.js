const student = JSON.parse(localStorage.getItem("selectedStudent"));

if (!student) {

    alert("Please select a student.");

    window.location.href = "dashboard.html";

}

// Student Details
document.getElementById("sid").textContent = student.id;
document.getElementById("name").textContent = student.name;
document.getElementById("department").textContent = student.department;
document.getElementById("attendance").textContent = student.attendance + "%";
document.getElementById("cgpa").textContent = student.cgpa;
document.getElementById("marks").textContent = student.marks;

// Prediction
document.getElementById("risk").textContent = student.risk;
document.getElementById("advice").innerHTML = student.advice;