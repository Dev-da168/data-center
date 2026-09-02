import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FolderOpen,
  ChevronDown,
  LogOut,
} from "lucide-react";

import "./sidenav.css";

function SideNav() {
  const navigate = useNavigate();

  const [documentOpen, setDocumentOpen] = useState(true);

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleDocument = () => {
    setDocumentOpen(!documentOpen);
  };

  const handleRoyalDecree = () => {
    navigate("/documents");
  };

  const handleSubDecree = () => {
    navigate("/documents");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside className="side-nav">

      {/* =========================
          LOGO
      ========================= */}
      <div className="sidebar-logo">

        <img
          src="/CASA LOGO.png"
          alt="CASA Logo"
        />

      </div>


      {/* =========================
          NAVIGATION
      ========================= */}
      <nav className="sidebar-nav">

        {/* DASHBOARD */}
        <button
          type="button"
          className="nav-item"
          onClick={handleDashboard}
        >

          <LayoutDashboard
            size={24}
            strokeWidth={2}
          />

          <span>
            Dashboard
          </span>

        </button>


        {/* DOCUMENT */}
        <div className="document-menu">

          <button
            type="button"
            className="nav-item document-nav-item"
            onClick={handleDocument}
          >

            <FolderOpen
              size={25}
              strokeWidth={2}
            />

            <span>
              Document
            </span>

            <ChevronDown
              size={20}
              className={
                documentOpen
                  ? "nav-arrow rotate"
                  : "nav-arrow"
              }
            />

          </button>


          {/* DOCUMENT DROPDOWN */}
          {documentOpen && (
            <div className="submenu">

              <button
                type="button"
                onClick={handleRoyalDecree}
              >
                Royal decree / ព្រះរាជក្រឹត្យ
              </button>

              <button
                type="button"
                onClick={handleSubDecree}
              >
                Sub-decree / អនុក្រឹត្យ
              </button>

            </div>
          )}

        </div>

      </nav>


      {/* =========================
          LOGOUT
      ========================= */}
      <div className="sidebar-bottom">

        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >

          <LogOut
            size={24}
            strokeWidth={2}
          />

          <span>
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}

export default SideNav;