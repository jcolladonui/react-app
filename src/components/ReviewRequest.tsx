import React from "react";

const ReviewRequest: React.FC = () => {
  // Sample request data
  const requests = [
    {
      id: 1,
      employeeName: "John Doe",
      dateFrom: "01/04/2022",
      dateTo: "05/04/2022",
      numberOfDays: 5,
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      dateFrom: "10/04/2022",
      dateTo: "15/04/2022",
      numberOfDays: 6,
    },
    {
      id: 3,
      employeeName: "Alice Johnson",
      dateFrom: "20/04/2022",
      dateTo: "25/04/2022",
      numberOfDays: 6,
    },
    // Add more sample data as needed
  ];

  const handleApprove = (id: number) => {
    console.log(`Request ${id} approved`);
  };

  const handleReject = (id: number) => {
    console.log(`Request ${id} rejected`);
  };

  return (
    <div>
      <h2>Review Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date From</th>
            <th>Date To</th>
            <th>Number of Days</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.employeeName}</td>
              <td>{request.dateFrom}</td>
              <td>{request.dateTo}</td>
              <td>{request.numberOfDays}</td>
              <td>
                <button
                  className="approve-btn"
                  onClick={() => handleApprove(request.id)}
                >
                  Approve
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewRequest;
