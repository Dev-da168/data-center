import { useState } from "react";
import {
  LayoutDashboard,
  Folder,
  Users,
  Shield,
  LogOut,
  Search,
  Bell,
  CircleHelp,
  UserCircle,
  UserPlus,
  Upload,
  SlidersHorizontal,
  Pencil,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
} from "lucide-react";

import "./user-control.css";

interface User {
  id: number;
  initials: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Suspended";
}

function UserControl() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");

  const [department, setDepartment] = useState("All Departments");
  const [currentPage, setCurrentPage] = useState(1);

  const users: User[] = [
    {
      id: 1,
      initials: "JD",
      firstName: "Jonathan",
      lastName: "Doe",
      email: "j.doe@emerald.vault",
      role: "Admin",
      department: "Ministry of Interior",
      status: "Active",
    },
    {
      id: 2,
      initials: "ES",
      firstName: "Elena",
      lastName: "Smith",
      email: "e.smith@emerald.vault",
      role: "CARDI",
      department: "Ministry of Justice",
      status: "Active",
    },
    {
      id: 3,
      initials: "MR",
      firstName: "Marcus",
      lastName: "Reed",
      email: "m.reed@external.corp",
      role: "CRRI",
      department: "External Agency",
      status: "Active",
    },
    {
      id: 4,
      initials: "AL",
      firstName: "Anna",
      lastName: "Lee",
      email: "a.lee@emerald.vault",
      role: "Contributor",
      department: "National Police",
      status: "Suspended",
    },
  ];

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !role) {
      alert("Please complete all fields.");
      return;
    }

    setShowAddUser(false);
    setShowSuccess(true);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setRole("Admin");
  };

  const closeAddUser = () => {
    setShowAddUser(false);
    resetForm();
  };

  return (
    <div className="user-control-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="admin-sidebar">

        {/* Logo */}
        <div className="admin-logo">
          <img
            src="/CASA LOGO.png"
            alt="CASA Logo"
          />
        </div>

        {/* Navigation */}
        <nav className="admin-nav">

          <button className="admin-nav-item">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>

          <button className="admin-nav-item">
            <Folder size={21} />
            <span>Documents</span>
          </button>

          <div className="access-title">
            ACCESS MANAGEMENT
          </div>

          <button className="admin-nav-item">
            <Users size={20} />
            <span>Role Control</span>
          </button>

          <button className="admin-nav-item active">
            <Shield size={20} />
            <span>Permission Control</span>
          </button>

        </nav>

        {/* Bottom */}
        <div className="admin-sidebar-bottom">

          <button className="admin-bottom-item">
            <Shield size={19} />
            <span>Security Settings</span>
          </button>

          <button className="admin-bottom-item logout">
            <LogOut size={19} />
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="user-control-main">

        {/* Top Header */}

        <header className="top-header">

          <div className="search-box">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search archive..."
            />
          </div>

          <div className="header-icons">
            <Bell size={19} />
            <CircleHelp size={19} />
            <UserCircle size={20} />
          </div>

        </header>


        {/* Content */}

        <section className="user-content">

          {/* Page heading */}

          <div className="page-heading">

            <div>
              <h1>Access Control</h1>

              <p>
                Manage user permissions, departments, and system access.
              </p>
            </div>

            <div className="heading-buttons">

              <button className="upload-button">
                <Upload size={15} />
                Upload Document
              </button>

              <button
                className="add-user-button"
                onClick={() => setShowAddUser(true)}
              >
                <UserPlus size={16} />
                Add New User
              </button>

            </div>

          </div>


          {/* ================= STATISTICS ================= */}

          <section className="stats-grid">

            <div className="stat-card stat-green">

              <span className="stat-title">
                TOTAL USERS
              </span>

              <div className="stat-number">
                1,248
                <small>↗ +12</small>
              </div>

            </div>


            <div className="stat-card stat-dark">

              <span className="stat-title">
                INSTITUTION
              </span>

              <div className="stat-number">
                34
              </div>

            </div>


            <div className="stat-card stat-light">

              <span className="stat-title">
                ACTIVE USERS
              </span>

              <div className="stat-number">
                412
                <small>◉ Secure</small>
              </div>

            </div>

          </section>


          {/* ================= USER TABLE ================= */}

          <section className="user-table-container">

            {/* Filter bar */}

            <div className="table-toolbar">

              <button className="filter-button">
                <SlidersHorizontal size={14} />
                Filter
              </button>

              <div className="department-select">

                <select
                  value={department}
                  onChange={(e) =>
                    setDepartment(e.target.value)
                  }
                >
                  <option>All Departments</option>
                  <option>Ministry of Interior</option>
                  <option>Ministry of Justice</option>
                  <option>External Agency</option>
                  <option>National Police</option>
                </select>

                <ChevronDown size={15} />

              </div>

              <span className="results-count">
                Showing 1-10 of 1,248
              </span>

            </div>


            {/* Table */}

            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>USER</th>
                    <th>ROLE</th>
                    <th>DEPARTMENT</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>

                  {users.map((user) => (

                    <tr key={user.id}>

                      {/* User */}

                      <td>

                        <div className="user-info">

                          <div
                            className={`user-avatar ${
                              user.status === "Suspended"
                                ? "suspended-avatar"
                                : ""
                            }`}
                          >
                            {user.initials}
                          </div>

                          <div>

                            <strong>
                              {user.firstName}{" "}
                              {user.lastName}
                            </strong>

                            <small>
                              {user.email}
                            </small>

                          </div>

                        </div>

                      </td>


                      {/* Role */}

                      <td>
                        {user.role}
                      </td>


                      {/* Department */}

                      <td>
                        {user.department}
                      </td>


                      {/* Status */}

                      <td>

                        <span
                          className={`user-status ${
                            user.status === "Active"
                              ? "active-status"
                              : "suspended-status"
                          }`}
                        >
                          <span className="status-dot"></span>
                          {user.status}
                        </span>

                      </td>


                      {/* Actions */}

                      <td>

                        <div className="action-buttons">

                          <button
                            className="action-icon"
                            title="Manage permissions"
                          >
                            <SlidersHorizontal size={16} />
                          </button>

                          <button
                            className="action-icon"
                            title="Edit user"
                          >
                            <Pencil size={16} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            {/* Pagination */}

            <div className="pagination">

              <button className="previous">
                <ChevronLeft size={14} />
                Previous
              </button>

              <div className="page-numbers">

                <button
                  className={currentPage === 1 ? "page-active" : ""}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </button>

                <button
                  className={currentPage === 2 ? "page-active" : ""}
                  onClick={() => setCurrentPage(2)}
                >
                  2
                </button>

                <button
                  className={currentPage === 3 ? "page-active" : ""}
                  onClick={() => setCurrentPage(3)}
                >
                  3
                </button>

                <span>...</span>

              </div>

              <button className="next">
                Next
                <ChevronRight size={14} />
              </button>

            </div>

          </section>

        </section>

      </main>


      {/* ================================================= */}
      {/* ADD NEW USER MODAL */}
      {/* ================================================= */}

      {showAddUser && (

        <div className="modal-overlay">

          <div className="add-user-modal">

            <div className="modal-header">

              <h2>Add New User</h2>

              <button
                className="close-modal"
                onClick={closeAddUser}
              >
                <X size={20} />
              </button>

            </div>


            <form onSubmit={handleCreateUser}>

              {/* First name */}

              <div className="modal-field">

                <label>
                  FIRST NAME
                </label>

                <input
                  type="text"
                  placeholder="e.g. John Smith"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value)
                  }
                />

              </div>


              {/* Last name */}

              <div className="modal-field">

                <label>
                  LAST NAME
                </label>

                <input
                  type="text"
                  placeholder="e.g. John Smith"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value)
                  }
                />

              </div>


              {/* Email */}

              <div className="modal-field">

                <label>
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  placeholder="j.smith@emerald.vault"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>


              {/* Role */}

              <div className="modal-field">

                <label>
                  ROLE
                </label>

                <div className="role-select">

                  <select
                    value={role}
                    onChange={(e) =>
                      setRole(e.target.value)
                    }
                  >
                    <option>Admin</option>
                    <option>CARDI</option>
                    <option>CRRI</option>
                    <option>Contributor</option>
                  </select>

                  <ChevronDown size={16} />

                </div>

              </div>


              {/* Buttons */}

              <div className="modal-actions">

                <button
                  type="button"
                  className="cancel-button"
                  onClick={closeAddUser}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="create-button"
                >
                  Create User
                </button>

              </div>

            </form>

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/* SUCCESS MODAL */}
      {/* ================================================= */}

      {showSuccess && (

        <div className="modal-overlay">

          <div className="success-modal">

            <button
              className="success-close"
              onClick={() => setShowSuccess(false)}
            >
              <X size={18} />
            </button>

            <div className="success-icon">
              <Check size={40} />
            </div>

            <h2>
              User Created Successfully
            </h2>

            <p>
              {firstName} {lastName} has been added
              to the system and an invitation has
              been sent to their email.
            </p>

            <button
              className="success-primary"
              onClick={() => setShowSuccess(false)}
            >
              Go to User List
            </button>

            <button
              className="success-secondary"
              onClick={() => {
                setShowSuccess(false);
                setShowAddUser(true);
                resetForm();
              }}
            >
              Add Another User
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default UserControl;