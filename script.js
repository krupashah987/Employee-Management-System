// Static Employee Data
let employees = [
    { id: "101", name: "Amit", dept: "IT", salary: 30000 },
    { id: "102", name: "Neha", dept: "HR", salary: 25000 }
];

// Render Table
function renderTable(data = employees) {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    data.forEach((emp, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.dept}</td>
                <td>${emp.salary}</td>
                <td>
                    <button onclick="editEmp(${index})">Edit</button>
                    <button onclick="deleteEmp(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Add / Update Employee
document.getElementById("empForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const emp = {
        id: empId.value,
        name: empName.value,
        dept: empDept.value,
        salary: empSalary.value
    };

    const index = empIndex.value;

    if (index === "") {
        employees.push(emp);
    } else {
        employees[index] = emp;
        empIndex.value = "";
    }

    this.reset();
    renderTable();
});

// Edit
function editEmp(index) {
    const emp = employees[index];
    empId.value = emp.id;
    empName.value = emp.name;
    empDept.value = emp.dept;
    empSalary.value = emp.salary;
    empIndex.value = index;
}

// Delete
function deleteEmp(index) {
    employees.splice(index, 1);
    renderTable();
}

// Search
document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    renderTable(
        employees.filter(e =>
            e.name.toLowerCase().includes(value) || e.id.includes(value)
        )
    );
});

// Filter by Department
document.getElementById("deptFilter").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    renderTable(
        employees.filter(e => e.dept.toLowerCase().includes(value))
    );
});

renderTable();
