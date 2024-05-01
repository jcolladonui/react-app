import React, { useState } from "react";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import SubmitRequest from "./components/SubmitRequest";
import ReviewRequest from "./components/ReviewRequest";
import ManageEmployees from "./components/ManageEmployees";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

function App() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication status

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Set authentication status to true on successful login
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const userLevel = 2; //Change this value to test that the level access works

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header2 />
      {isAuthenticated ? ( // Render components conditionally based on authentication status
        <div style={{ display: "flex", flex: 1 }}>
          <Sidebar
            items={[
              "Dashboard",
              "Profile",
              "Submit Request",
              "Review Request",
              "Manage Employees",
              "Create Account",
            ]}
            onSelectOption={handleSelectOption}
            selectedOption={selectedOption} // Pass the selectedOption to highlight the active button
            textColor="#fff"
            backgroundColor="#82029b"
            userLevel={userLevel} // Pass the user level as a prop
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedOption === "Dashboard" && <Dashboard />}
            {selectedOption === "Profile" && <Profile />}
            {selectedOption === "Submit Request" && <SubmitRequest />}
            {selectedOption === "Review Request" && <ReviewRequest />}
            {selectedOption === "Manage Employees" && <ManageEmployees />}
            {selectedOption === "Create Account" && <CreateAccount />}
          </div>
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} /> // Render Login component if user is not authenticated
      )}
      <Footer />
    </div>
  );
}

export default App;
