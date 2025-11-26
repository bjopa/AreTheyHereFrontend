import React from "react";

const AdminOptions: React.FC = () => {
  const handleDeleteEmployee = () => {
    // TODO: Implement delete employee logic
    console.log("Delete employee clicked");
  };

  const handleCreateEmployee = () => {
    // TODO: Implement create employee logic
    console.log("Create employee clicked");
  };

  const handleViewAllEmployeesOnline = () => {
    // TODO: Implement handleViewAllEmployeesOnline logic
    console.log("View all employees online clicked");
  };

  return (
    <div className="admin-options">
      <h2>Admin Options</h2>
      <div className="options-container">
        <button onClick={handleCreateEmployee} className="option-button create">
          Create Employee
        </button>
        <button onClick={handleDeleteEmployee} className="option-button delete">
          Delete Employee
        </button>
        <button
          onClick={handleViewAllEmployeesOnline}
          className="option-button view-all-online"
        >
          View All Employees Online
        </button>
      </div>
    </div>
  );
};

export default AdminOptions;
