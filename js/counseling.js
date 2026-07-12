const student = JSON.parse(localStorage.getItem("selectedStudent"));

if (!student) {
    alert("Please select a student from the dashboard.");
    window.location.href = "dashboard.html";
}

// Student Details
document.getElementById("sid").innerHTML = student.id;
document.getElementById("sname").innerHTML = student.name;
document.getElementById("dept").innerHTML = student.department;
document.getElementById("risk").innerHTML = student.risk;

const list = document.getElementById("recommendation");

function add(text) {
    let li = document.createElement("li");
    li.innerHTML = text;
    list.appendChild(li);
}

// HIGH RISK
if (student.risk == "🔴 HIGH RISK") {

    add("<b>📌 Faculty Advisor Meeting:</b> Meet your class advisor every week.");

    add("<b>👨‍👩‍👧 Parent Meeting:</b> Parents should discuss academic progress with faculty.");

    add("<b>📚 Remedial Coaching:</b> Attend extra classes for weak subjects.");

    add("<b>📅 Attendance Plan:</b> Maintain attendance above 85%.");

    add("<b>🧠 Mental Health Counseling:</b> Meet the college counselor if you feel stressed.");

    add("<b>💰 Scholarship Guidance:</b> Apply through the National Scholarship Portal.");

    add('<a href="https://scholarships.gov.in" target="_blank">National Scholarship Portal</a>');

    add("<b>🏦 Education Loan:</b>");

    add('<a href="https://www.vidyalakshmi.co.in" target="_blank">Vidya Lakshmi Education Loan</a>');

}

// MEDIUM RISK
else if (student.risk == "🟡 MEDIUM RISK") {

    add("<b>📖 Improve Attendance:</b> Attend all classes regularly.");

    add("<b>📝 Submit Assignments:</b> Complete assignments on time.");

    add("<b>👨‍🏫 Faculty Mentor:</b> Meet your mentor once every month.");

    add("<b>👥 Study Group:</b> Join peer learning sessions.");

    add("<b>⏰ Time Management:</b> Prepare a weekly study timetable.");

}

// LOW RISK
else {

    add("<b>🏆 Excellent Performance:</b> Continue your current progress.");

    add("<b>💻 Coding Practice:</b>");

    add('<a href="https://leetcode.com" target="_blank">LeetCode</a>');

    add('<a href="https://www.hackerrank.com" target="_blank">HackerRank</a>');

    add("<b>🎯 Career Guidance:</b>");

    add('<a href="https://www.careers360.com" target="_blank">Careers360</a>');

}

// Interest-based counseling
if (student.interest == "Low") {

    add("<hr>");

    add("<b>🎯 Low Interest in Studies</b>");

    add("Attend career guidance sessions.");

    add("Meet the department counselor.");

    add("Participate in motivational seminars.");

    add('<a href="https://www.ted.com/topics/motivation" target="_blank">TED Motivation Talks</a>');

    add('<a href="https://www.youtube.com/results?search_query=student+motivation" target="_blank">Student Motivation Videos</a>');
}

// Fee-based counseling
if (student.feeStatus == "Pending") {

    add("<hr>");

    add("<b>💰 Financial Support</b>");

    add("Meet the scholarship coordinator.");

    add('<a href="https://scholarships.gov.in" target="_blank">National Scholarship Portal</a>');

    add('<a href="https://www.vidyalakshmi.co.in" target="_blank">Vidya Lakshmi Education Loan</a>');
}