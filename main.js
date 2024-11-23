const apiUrl = `https://demo-api.siit.ro/api`;

// Function to get the list of all students
function getStudentsList() {
    const requestUrl = ${apiUrl}/students;
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data));
}

// Function to get details of a specific student by ID
function getStudent(studentId) {
    const requestUrl = ${apiUrl}/students/${studentId};
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => console.log(data));
}

// Function to add a new student
function addStudent(student) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(student),
    };

    const requestUrl = ${apiUrl}/students;
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}

// Function to update details of an existing student by ID
function updateStudent(studentId, student) {
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(student),
    };

    const requestUrl = ${apiUrl}/students/${studentId};
    fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}

// Function to delete a student by ID
function deleteStudent(studentId) {
    const requestOptions = {
        method: 'DELETE',
    };

    const requestUrl = ${apiUrl}/students/${studentId};
    fetch(requestUrl, requestOptions); // Response is 204 (No Content), so no parsing is needed
}

// CREATE
const newStudent = {
    name: Iulia Vilceanu,
    email: Iulia@vilvceanu.com,
    phone: 070000000,
};
addStudent(newStudent);

// READ
// Get the list of all students
// getStudentsList();

// Get details of a specific student with ID 1
// getStudent(42);

// UPDATE
// const updatedStudent = {
//     name: Iulia Vilceanu Updated,
//     email: Iulia@vilvceanu.com,
//     phone: 070000001,
// };
// updateStudent(42, updatedStudent);
// getStudent(42);

// DELETE
// deleteStudent(42)
