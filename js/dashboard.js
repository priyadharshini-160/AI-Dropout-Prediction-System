// Logged in user
let role = localStorage.getItem("role");
let loggedInUser = localStorage.getItem("loggedInUser");

// Welcome message
document.getElementById("welcome").innerHTML = "Welcome, " + role + " 👋";
// Get all registered students
let students = JSON.parse(localStorage.getItem("students")) || [];

let total = students.length;
let high = 0;
let medium = 0;
let low = 0;

const table = document.getElementById("studentTable");

students.forEach(function(student) {
// Student can see only their own details
if (role === "Student" && student.email !== loggedInUser) {
    return;
}
    let score = 0;

    // Calculate score
    if (Number(student.attendance) < 75)
        score += 30;

    if (Number(student.cgpa) < 6.5)
        score += 20;

    if (Number(student.marks) < 50)
        score += 20;

    let backlog = student.backlogs;

    if (backlog == "More than 3")
        backlog = 4;

    if (Number(backlog) >= 2)
        score += 15;

    if (student.interest == "Low")
        score += 15;

    if (student.feeStatus == "Pending")
        score += 10;

    // Risk Level
    let risk = "🟢 LOW RISK";

    if (score >= 60) {
        risk = "🔴 HIGH RISK";
        high++;
    }
    else if (score >= 30) {
        risk = "🟡 MEDIUM RISK";
        medium++;
    }
    else {
        low++;
    }

    // Save risk inside student object
    student.risk = risk;

    let row = `
    <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.department}</td>
        <td>${student.attendance}%</td>
        <td>${student.cgpa}</td>
        <td>${risk}</td>
        <td>
            <button onclick="predictStudent('${student.id}')">
                🤖 Predict
            </button>
        </td>
    </tr>
    `;

    table.innerHTML += row;
});

// Save updated students
localStorage.setItem("students", JSON.stringify(students));

// Dashboard Cards
document.getElementById("totalStudents").innerHTML = total;
document.getElementById("highRisk").innerHTML = high;
document.getElementById("mediumRisk").innerHTML = medium;
document.getElementById("lowRisk").innerHTML = low;

// Predict Button
function predictStudent(id) {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let student = students.find(s => s.id == id);

    localStorage.setItem("selectedStudent", JSON.stringify(student));

    window.location.href = "prediction.html";
}
