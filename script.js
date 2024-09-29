document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Attendance Form
    const attendanceForm = document.getElementById('attendanceForm');
    const attendanceList = document.getElementById('attendanceList');

    // Sample student data
    const students = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
    ];

    // Populate attendance list
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td><input type="radio" name="attendance_${student.id}" value="present"></td>
            <td><input type="radio" name="attendance_${student.id}" value="absent"></td>
        `;
        attendanceList.appendChild(row);
    });

    attendanceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the data to a server
        alert('Attendance saved!');
    });

    // Homework Form
    const homeworkForm = document.getElementById('homeworkForm');
    homeworkForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the data to a server
        alert('Homework assigned!');
    });

    // Announcements Form
    const announcementForm = document.getElementById('announcementForm');
    const announcementList = document.getElementById('announcementList');

    announcementForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('announcement-title').value;
        const content = document.getElementById('announcement-content').value;
        const announcement = document.createElement('div');
        announcement.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <small>Posted on: ${new Date().toLocaleString()}</small>
        `;
        announcementList.prepend(announcement);
        this.reset();
    });

    // Student Profiles
    const studentList = document.getElementById('studentList');
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <img src="https://via.placeholder.com/100" alt="${student.name}">
            <h3>${student.name}</h3>
            <p>Student ID: ${student.id}</p>
            <button onclick="alert('View profile for ${student.name}')">View Profile</button>
        `;
        studentList.appendChild(card);
    });
});
