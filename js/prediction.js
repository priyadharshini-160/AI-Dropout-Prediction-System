const student = JSON.parse(localStorage.getItem("selectedStudent"));

if (!student) {
    alert("Please select a student from the dashboard.");
    window.location.href = "dashboard.html";
}

// Student Details
document.getElementById("sid").innerHTML = student.id;
document.getElementById("sname").innerHTML = student.name;
document.getElementById("sdepartment").innerHTML = student.department;
document.getElementById("attendance").innerHTML = student.attendance + "%";
document.getElementById("cgpa").innerHTML = student.cgpa;
document.getElementById("marks").innerHTML = student.marks;
document.getElementById("backlogs").innerHTML = student.backlogs;

// AI Prediction
let score = 0;
let reason = "";
let advice = "";

if (Number(student.attendance) < 75) {
    score += 30;
    reason += "• Low Attendance<br>";
}

if (Number(student.cgpa) < 6.5) {
    score += 20;
    reason += "• Low CGPA<br>";
}

if (Number(student.marks) < 50) {
    score += 20;
    reason += "• Low Internal Marks<br>";
}

let backlog = student.backlogs;

if (backlog === "More than 3") {
    backlog = 4;
}

if (Number(backlog) >= 2) {
    score += 15;
    reason += "• Multiple Backlogs<br>";
}

if (student.interest === "Low") {
    score += 15;
    reason += "• Low Interest in Studies<br>";
}

if (student.feeStatus === "Pending") {
    score += 10;
    reason += "• Financial Problems<br>";
}

let risk = "🟢 LOW RISK";

if (score >= 60) {
    risk = "🔴 HIGH RISK";
    advice = "Immediate counseling, parent meeting, academic mentoring, financial guidance and weekly monitoring are recommended.";
} else if (score >= 30) {
    risk = "🟡 MEDIUM RISK";
    advice = "Improve attendance, focus on academics, attend mentoring sessions and meet the faculty advisor.";
} else {
    advice = "Excellent performance. Continue your current progress and participate in skill development activities.";
}

document.getElementById("risk").innerHTML = risk;
document.getElementById("reason").innerHTML = reason;
document.getElementById("advice").innerHTML = advice;

// Save prediction for Counseling and Report
student.risk = risk;
student.reason = reason;
student.advice = advice;

localStorage.setItem("selectedStudent", JSON.stringify(student));