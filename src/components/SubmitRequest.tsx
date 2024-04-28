import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SubmitRequest.css"; // Add CSS file for styling

const SubmitRequest: React.FC = () => {
  const [requestFrom, setRequestFrom] = useState<Date | null>(null);
  const [requestTo, setRequestTo] = useState<Date | null>(null);
  const [totalDays, setTotalDays] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRequestFromChange = (date: Date | null) => {
    setRequestFrom(date);
    calculateTotalDays(date, requestTo);
    // Clear error message when "Request From" date changes
    setErrorMessage("");
  };

  const handleRequestToChange = (date: Date | null) => {
    setRequestTo(date);
    calculateTotalDays(requestFrom, date);
    // Check if "Request To" date is before "Request From" date
    if (requestFrom && date && date < requestFrom) {
      setErrorMessage("Request To date cannot be before Request From date");
    } else {
      setErrorMessage("");
    }
  };

  const calculateTotalDays = (from: Date | null, to: Date | null) => {
    if (from && to) {
      const daysDifference =
        Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      setTotalDays(daysDifference);
    } else {
      setTotalDays(null);
    }
  };

  const handleSubmit = () => {
    // Validate if "Request To" is not before "Request From"
    if (!errorMessage) {
      // Logic to handle submit action
      console.log("Submit button clicked");
    }
  };

  const handleClear = () => {
    // Logic to handle clear action
    setRequestFrom(null);
    setRequestTo(null);
    setTotalDays(null);
  };

  return (
    <div>
      <h2>Submit Request</h2>
      <div className="date-picker-container">
        <div className="date-picker">
          <label>Request From:</label>
          <DatePicker
            selected={requestFrom}
            onChange={handleRequestFromChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="date-picker">
          <label>Request To:</label>
          <DatePicker
            selected={requestTo}
            onChange={handleRequestToChange}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div className="total-days-container">
        <div className="total-days-label">
          <label>Total Days:</label>
        </div>
      </div>
      <div className="total-days-input">
        <input type="text" value={totalDays || ""} readOnly />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="button-container">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default SubmitRequest;
