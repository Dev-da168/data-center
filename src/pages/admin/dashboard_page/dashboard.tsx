import {
  LayoutDashboard,
  Folder,
  UsersRound,
  ShieldCheck,
  LogOut,
  Search,
  Upload,
  FileText,
  HardDrive,
} from "lucide-react";

import "./dashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* ================= SIDEBAR ================= */}

      <aside className="admin-sidebar">

        {/* Logo */}
        <div className="admin-logo">
          <img
            src="/CASA LOGO.png"
            alt="CASA Logo"
          />
        </div>

        {/* Main Navigation */}
        <nav className="admin-nav">

          {/* Dashboard */}
          <button className="admin-nav-item active">
            <LayoutDashboard size={21} />
            <span>Dashboard</span>
          </button>

          {/* Documents */}
          <button className="admin-nav-item">
            <Folder size={22} />
            <span>Documents</span>
          </button>


          {/* Access Management */}
          <div className="access-title">
            ACCESS MANAGEMENT
          </div>


          {/* Role Control */}
          <button className="admin-nav-item">
            <UsersRound size={21} />
            <span>Role Control</span>
          </button>


          {/* Permission Control */}
          <button className="admin-nav-item permission-active">
            <ShieldCheck size={22} />
            <span>Permission Control</span>
          </button>

        </nav>


        {/* Logout */}
        <div className="admin-sidebar-bottom">

          <button className="admin-logout">
            <LogOut size={21} />
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* ================= MAIN AREA ================= */}

      <main className="admin-main">

        {/* ================= TOP BAR ================= */}

        <header className="admin-topbar">

          {/* Search */}
          <div className="admin-search">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search archive..."
            />

          </div>


          {/* Upload Button */}
          <button className="upload-button">

            <Upload size={18} />

            <span>Upload Document</span>

          </button>

        </header>


        {/* ================= CONTENT ================= */}

        <div className="admin-content">


          {/* ================= STATISTICS ================= */}

          <section className="statistics-grid">


            {/* Total Documents */}

            <div className="stat-card total-card">

              <div className="stat-card-top">

                <div className="stat-icon">
                  <FileText size={22} />
                </div>

                <span className="stat-badge">
                  ↗ +12%
                </span>

              </div>

              <p className="stat-title">
                TOTAL DOCUMENTS
              </p>

              <h2>
                14,208
              </h2>

            </div>


            {/* Storage Usage */}

            <div className="stat-card storage-card">

              <div className="stat-card-top">

                <div className="stat-icon">
                  <HardDrive size={22} />
                </div>

                <span className="capacity-badge">
                  42% Capacity
                </span>

              </div>

              <p className="stat-title">
                STORAGE USAGE
              </p>

              <div className="storage-number">

                <strong>4.2</strong>

                <span>/ 10 TB</span>

              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

            </div>


            {/* Storage Usage 2 */}

            <div className="stat-card storage-card second-storage">

              <div className="stat-card-top">

                <div className="stat-icon">
                  <HardDrive size={22} />
                </div>

                <span className="capacity-badge">
                  42% Capacity
                </span>

              </div>

              <p className="stat-title">
                STORAGE USAGE
              </p>

              <div className="storage-number">

                <strong>4.2</strong>

                <span>/ 10 TB</span>

              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

            </div>

          </section>


          {/* ================= DOWNLOAD ANALYSIS ================= */}

          <section className="download-analysis">

            <div className="analysis-header">

              <h2>
                File Download Analysis
              </h2>

              <div className="analysis-label">

                <span className="green-dot"></span>

                <span>
                  Daily Downloads
                </span>

              </div>

            </div>


            {/* Chart */}

            <div className="chart-container">

              <div className="chart-bars">

                <div className="bar bar-1"></div>

                <div className="bar bar-2"></div>

                <div className="bar bar-3"></div>

                <div className="bar bar-4"></div>

                <div className="bar bar-5"></div>

                <div className="bar bar-6"></div>

                <div className="bar bar-7"></div>

              </div>


              {/* Chart Labels */}

              <div className="chart-labels">

                <span>
                  30 Days Ago
                </span>

                <span>
                  15 Days Ago
                </span>

                <span>
                  Today
                </span>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;