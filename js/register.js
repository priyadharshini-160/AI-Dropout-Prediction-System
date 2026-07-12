document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const student = {

        id: document.getElementById("studentId").value,

        name: document.getElementById("studentName").value,

        department: document.getElementById("department").value,

        attendance: document.getElementById("attendance").value,

        cgpa: document.getElementById("cgpa").value,

        marks: document.getElementById("marks").value,

        backlogs: document.getElementById("backlogs").value,

        interest: document.getElementById("interest").value,

        feeStatus: document.getElementById("feeStatus").value

    };
    alert(JSON.stringify(student));

// Get all previously saved students
let students = JSON.parse(localStorage.getItem("students")) || [];

// Add the new student
students.push(student);

// Save the updated list
localStorage.setItem("students", JSON.stringify(students));

alert("Student Registered Successfully!");
    window.location.href = "success.html";

});