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
document.getElementById("backlogs").textContent = student.backlogs;
document.getElementById("interest").textContent = student.interest;
document.getElementById("feeStatus").textContent = student.feeStatus;

// Prediction
document.getElementById("risk").textContent = student.risk;

// Calculate the prediction score again
let score = 0;

if (Number(student.attendance) < 75) score += 30;
if (Number(student.cgpa) < 6.5) score += 20;
if (Number(student.marks) < 50) score += 20;

let backlog = student.backlogs;
if (backlog === "More than 3") backlog = 4;
if (Number(backlog) >= 2) score += 15;

if (student.interest === "Low") score += 15;
if (student.feeStatus === "Pending") score += 10;

document.getElementById("score").textContent = score + "%";

// Reasons
document.getElementById("reasons").innerHTML =
    student.reason
        ? "<li>" + student.reason.replace(/<br>/g, "</li><li>") + "</li>"
        : "<li>No major dropout risk factors identified.</li>";

// Counseling Recommendation
document.getElementById("counseling").innerHTML =
    "<li>" + student.advice + "</li>";
