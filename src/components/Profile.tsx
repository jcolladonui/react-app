import React from "react";

const Profile: React.FC = () => {
  // Sample employee data
  const employee = {
    name: "John Doe",
    email: "john.doe@example.com",
    position: "Software Engineer",
    department: "Engineering",
    startDate: "2022-01-01",
    // Add more fields as needed
  };

  return (
    <div>
      <h2>Employee Profile</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "150px auto",
          gap: "10px",
        }}
      >
        <div>
          <strong>Name:</strong>
        </div>
        <div>{employee.name}</div>
        <div>
          <strong>Email:</strong>
        </div>
        <div>{employee.email}</div>
        <div>
          <strong>Position:</strong>
        </div>
        <div>{employee.position}</div>
        <div>
          <strong>Department:</strong>
        </div>
        <div>{employee.department}</div>
        <div>
          <strong>Start Date:</strong>
        </div>
        <div>{employee.startDate}</div>
        {/* Add more fields and information here */}
      </div>
    </div>
  );
};

export default Profile;
