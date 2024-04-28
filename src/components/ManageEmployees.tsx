import React from "react";

const ManageEmployees: React.FC = () => {
  // Sample employee data
  const employees = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "Engineering",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "HR Manager",
      department: "Human Resources",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "Sales Executive",
      department: "Sales",
    },
    // Add more sample data as needed
  ];

  const handleEdit = (id: number) => {
    console.log(`Edit employee with ID ${id}`);
  };

  return (
    <div>
      <h2>Manage Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEmployees;
