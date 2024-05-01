import React, { useState } from "react";

const CreateAccount: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSave = () => {
    // Logic to save the account details
    console.log("Saving account details...");
  };

  const handleClear = () => {
    // Clear input fields
    setName("");
    setEmail("");
    setPosition("");
    setDepartment("");
    setStartDate("");
  };

  return (
    <div>
      <h2>Create Account</h2>
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
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <strong>Email:</strong>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <strong>Position:</strong>
        </div>
        <div>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <strong>Department:</strong>
        </div>
        <div>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div>
          <strong>Start Date:</strong>
        </div>
        <div>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="button-container">
          <button onClick={handleSave}>Submit</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
