document.addEventListener("DOMContentLoaded", function() {
    const attendanceList = document.getElementById("attendanceList");
    const markAttendanceBtn = document.getElementById("markAttendanceBtn");
    
    // Sample list of students
    const students = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
    
    // Display students list
    students.forEach(student => {
        const listItem = document.createElement("div");
        listItem.textContent = student;
        attendanceList.appendChild(listItem);
    });

    // Mark attendance
    markAttendanceBtn.addEventListener("click", function() {
        students.forEach(student => {
            const isPresent = confirm(`Is ${student} present?`);
            const listItem = document.createElement("div");
            listItem.textContent = `${student} - ${isPresent ? "Present" : "Absent"}`;
            attendanceList.appendChild(listItem);
        });
    });
});

