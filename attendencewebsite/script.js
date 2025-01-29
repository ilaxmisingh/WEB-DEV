// Sample students data
const students = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Sam Wilson" }
];

// Sample holiday data
const holidays = [
    "2025-01-01: New Year's Day",
    "2025-03-25: Good Friday",
    "2025-08-15: Independence Day",
    "2025-12-25: Christmas Day"
];

const app = document.getElementById("app");
const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");
const studentList = document.getElementById("attendanceForm");
const calendar = document.getElementById("calendar");

// Login function
function login() {
    loginPage.style.display = "none";
    dashboardPage.style.display = "block";
    displayStudents();
    displayHolidayCalendar();
    document.getElementById("loginBtn").style.display = "none"; // Hide login button on dashboard
}

// Logout function
function logout() {
    loginPage.style.display = "block";
    dashboardPage.style.display = "none";
    document.getElementById("loginBtn").style.display = "inline-block"; // Show login button again
}

// Display student list and mark attendance
function displayStudents() {
    studentList.innerHTML = '';
    students.forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.classList.add("student");

        studentDiv.innerHTML = `
            <span>${student.name}</span>
            <button onclick="markAttendance(${student.id})">Mark Attendance</button>
        `;
        studentList.appendChild(studentDiv);
    });
}

// Display holiday calendar
function displayHolidayCalendar() {
    calendar.innerHTML = '';
    const ul = document.createElement("ul");
    holidays.forEach(holiday => {
        const li = document.createElement("li");
        li.textContent = holiday;
        ul.appendChild(li);
    });
    calendar.appendChild(ul);
}

// Mark Attendance Function
function markAttendance(studentId) {
    const student = students.find(s => s.id === studentId);
    alert(`Attendance marked for ${student.name}`);
}
s
