import { useState } from "react";
import {
  LayoutDashboard,
  Folder,
  ShieldCheck,
  LogOut,
  ChevronDown,
  ChevronRight,
  Lock,
  FileText,
  KeyRound,
  FolderOpen,
  Star,
  ArrowRight,
} from "lucide-react";

import "./dashboard.css";

function Dashboard() {
  // Document dropdown state
  const [documentOpen, setDocumentOpen] = useState(true);

  return (
    <div className="dashboard-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        {/* Logo */}
        <div className="sidebar-logo">
          <img
            src="/casa-logo.png"
            alt="CASA Logo"
          />
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">

          {/* Dashboard */}
          <button className="nav-item active">
            <LayoutDashboard size={21} />
            <span>Dashboard</span>
          </button>


          {/* DOCUMENT */}
          <div className="document-navigation">

            <button
              className="nav-item document-button"
              onClick={() =>
                setDocumentOpen(!documentOpen)
              }
            >

              <Folder size={22} />

              <span>Document</span>

              {documentOpen ? (
                <ChevronDown
                  size={18}
                  className="menu-arrow"
                />
              ) : (
                <ChevronRight
                  size={18}
                  className="menu-arrow"
                />
              )}

            </button>


            {/* Dropdown */}
            {documentOpen && (
              <div className="document-submenu">

                <button>
                  Royal decree /
                  <span> ព្រះរាជក្រឹត្យ</span>
                </button>

                <button>
                  Sub-decree /
                  <span> អនុក្រឹត្យ</span>
                </button>

              </div>
            )}

          </div>

        </nav>


        {/* ================= SIDEBAR BOTTOM ================= */}

        <div className="sidebar-bottom">

          <button className="bottom-item">
            <ShieldCheck size={20} />
            <span>Security Settings</span>
          </button>

          <button className="bottom-item logout">
            <LogOut size={20} />
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="dashboard-content">

        {/* Header */}

        <header className="dashboard-header">

          <h1>
            Government Archive Directory
          </h1>

          <p>
            Select an authoritative repository segment
            to browse, audit, and print files.
          </p>

        </header>


        {/* ================= CATEGORY CARDS ================= */}

        <section className="category-grid">

          {/* Card 1 */}

          <div className="category-card selected">

            <h2>
              សេចក្តីប្រកាស
            </h2>

            <div className="category-divider"></div>

            <div className="category-bottom">

              <div>
                <p className="total-label">
                  TOTAL STORED FILES
                </p>

                <strong>
                  1,548 Files
                </strong>
              </div>

              <button className="browse-button green">
                ចូលមើល

                <ArrowRight size={18} />
              </button>

            </div>

          </div>


          {/* Card 2 */}

          <div className="category-card">

            <h2>
              អនុក្រឹត្យ
            </h2>

            <div className="category-divider"></div>

            <div className="category-bottom">

              <div>
                <p className="total-label">
                  TOTAL STORED FILES
                </p>

                <strong>
                  3,840 Files
                </strong>
              </div>

              <button className="browse-button">
                ចូលមើល

                <ArrowRight size={18} />
              </button>

            </div>

          </div>


          {/* Card 3 */}

          <div className="category-card">

            <h2>
              ព្រះរាជក្រឹត្យ
            </h2>

            <div className="category-divider"></div>

            <div className="category-bottom">

              <div>
                <p className="total-label">
                  TOTAL STORED FILES
                </p>

                <strong>
                  8,129 Files
                </strong>
              </div>

              <button className="browse-button">
                ចូលមើល

                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </section>


        {/* ================= SECURITY INFORMATION ================= */}

        <section className="security-information">

          <div className="security-icon">
            <Lock size={21} />
          </div>

          <div>

            <h3>
              FIPS 140-3 Cryptographic Integrity Standards
            </h3>

            <p>
              All active records stored within this
              government portal are signed with federal
              cryptographic keys. Any attempt to modify
              or extract data unauthorized will trigger
              automated logging protocols.
            </p>

          </div>

        </section>


        {/* ================= RECENT ACTIVITY ================= */}

        <section className="recent-activity">

          <div className="activity-header">

            <h2>
              <Star size={21} />
              Recent Activity
            </h2>

            <button>
              View All
            </button>

          </div>


          <div className="activity-list">

            {/* Activity 1 */}

            <div className="activity-item">

              <div className="activity-icon pdf">
                <FileText size={20} />
              </div>

              <div className="activity-info">

                <h3>
                  Q4_Financial_Audit_Final.pdf
                </h3>

                <p>
                  24.5 MB&nbsp;&nbsp; • &nbsp;&nbsp;
                  Modified 2h ago
                </p>

              </div>

            </div>


            {/* Activity 2 */}

            <div className="activity-item">

              <div className="activity-icon key">
                <KeyRound size={20} />
              </div>

              <div className="activity-info">

                <h3>
                  Master_Encryption_Keys_2024.pem
                </h3>

                <p>
                  4 KB&nbsp;&nbsp; • &nbsp;&nbsp;
                  <span className="restricted">
                    🔒 Highly Restricted
                  </span>
                </p>

              </div>

            </div>


            {/* Activity 3 */}

            <div className="activity-item">

              <div className="activity-icon folder">
                <FolderOpen size={21} />
              </div>

              <div className="activity-info">

                <h3>
                  Project_Onyx_Blueprints
                </h3>

                <p>
                  Folder&nbsp;&nbsp; • &nbsp;&nbsp;
                  42 Items
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;