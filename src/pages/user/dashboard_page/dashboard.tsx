import { useNavigate } from "react-router-dom";
import SideNav from "../../../components/sidenav/sidenav";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleViewDocuments = () => {
    navigate("/documents");
  };

  return (
    <div className="dashboard-page">

  


      {/* =====================================================
          MAIN
      ===================================================== */}
      <main className="dashboard-main">
        {/* =====================================================
          SIDE NAVIGATION
      ===================================================== */}
      <SideNav />

        {/* =========================
            HEADER
        ========================= */}
        <header className="dashboard-header">

          <div>
            <h1>Dashboard</h1>

            <p>
              Welcome to CASA Data Storing Center
            </p>
          </div>


          {/* User information */}
          <div className="user-info">

            <div className="user-avatar">
              A
            </div>

            <div>
              <strong>Administrator</strong>
              <span>Admin User</span>
            </div>

          </div>

        </header>


        {/* =====================================================
            CONTENT
        ===================================================== */}
        <section className="dashboard-content">

          {/* =========================
              STATISTICS
          ========================= */}
          <div className="statistics-grid">


            {/* អនុក្រឹត Documents */}
            <div className="stat-card">

              <div className="stat-title">
                <p style={{ margin: 0, color: '#166534', fontWeight: 'bold', textAlign: 'left' }}>អនុក្រឹត្យ</p>
              </div>

              <div className="doc-navigate">
                <div className="doc-title">
                    <span>
                      ឯកសារសរុប
                    </span>

                    <h3>
                      0
                    </h3>
                </div>
                <div className="doc-button">
                    <button type="button">ចុចស្វែងរក</button>
                </div>
              </div>
        
            </div>


            {/* ព្រះរាជក្រឹត Documents */}
             <div className="stat-card">

              <div className="stat-title">
                <p style={{ margin: 0, color: '#166534', fontWeight: 'bold', textAlign: 'left' }}>ព្រះរាជក្រឹត្យ </p>
              </div>

              <div className="doc-navigate">
                <div className="doc-title">
                    <span>
                      ឯកសារសរុប
                    </span>

                    <h3>
                      0
                    </h3>
                </div>
                <div className="doc-button">
                    <button type="button">ចុចស្វែងរក</button>
                </div>
              </div>
        
            </div>

            {/* ព្រះរាជក្រឹត Documents */}
             <div className="stat-card">

              <div className="stat-title">
                <p style={{ margin: 0, color: '#166534', fontWeight: 'bold', textAlign: 'left' }}>សេចក្ដីសម្រេច</p>
              </div>

              <div className="doc-navigate">
                <div className="doc-title">
                    <span>
                      ឯកសារសរុប
                    </span>

                    <h3>
                      0
                    </h3>
                </div>
                <div className="doc-button">
                    <button type="button">ចុចស្វែងរក</button>
                </div>
              </div>
        
            </div>

            {/* ព្រះរាជក្រឹត Documents */}
             <div className="stat-card">

              <div className="stat-title">
                <p style={{ margin: 0, color: '#166534', fontWeight: 'bold', textAlign: 'left' }}>លិខិតអញ្ជើញ </p>
              </div>

              <div className="doc-navigate">
                <div className="doc-title">
                    <span>
                      ឯកសារសរុប
                    </span>

                    <h3>
                      0
                    </h3>
                </div>
                <div className="doc-button">
                    <button type="button">ចុចស្វែងរក</button>
                </div>
              </div>
        
            </div>

            {/* សេចក្ដីណែនាំ Documents */}
             <div className="stat-card">

              <div className="stat-title">
                <p style={{ margin: 0, color: '#166534', fontWeight: 'bold', textAlign: 'left' }}>សេចក្ដីណែនាំ </p>
              </div>

              <div className="doc-navigate">
                <div className="doc-title">
                    <span>
                      ឯកសារសរុប
                    </span>

                    <h3>
                      0
                    </h3>
                </div>
                <div className="doc-button">
                    <button type="button">ចុចស្វែងរក</button>
                </div>
              </div>
        
            </div>

              {/* គម្រូលិខិតរដ្ឋបាល Documents */}
             <div className="stat-card">

              <div className="stat-title">
                <p style={{ margin: 0, color: '#166534', fontWeight: 'bold', textAlign: 'left' }}>គម្រូលិខិតរដ្ឋបាល </p>
              </div>

              <div className="doc-navigate">
                <div className="doc-title">
                    <span>
                      ឯកសារសរុប
                    </span>

                    <h3>
                      0
                    </h3>
                </div>
                <div className="doc-button">
                    <button type="button">ចុចស្វែងរក</button>
                </div>
              </div>
        
            </div>
          </div>



          {/* =====================================================
              DASHBOARD CARDS
          ===================================================== */}
          <div className="dashboard-grid">


            {/* =========================
                RECENT DOCUMENTS
            ========================= */}
            <div className="dashboard-card">

              <div className="card-header">

                <div>

                  <h2 style={{ margin: 0, color: '#166534', fontWeight: 'bold', textAlign: 'left' }}>ឯកសារថ្មីៗ</h2>

                  <p>ឯកសារថ្មីៗដែលបានបន្ថែមទៅក្នុងប្រព័ន្ធ</p>

                </div>


                <button className="view-button" onClick={handleViewDocuments} >មើលទាំងអស់</button>

              </div>


              {/* Empty state */}
              <div className="empty-state">

                <div className="empty-icon">
                  ▤
                </div>

                <h3>គ្មានឯកសារទេ</h3>

                <p> ឯកសារនឹងបង្ហាញនៅទីនេះដោយខ្លួនឯង ពេលដែលពួកគេត្រូវបានចុះបញ្ជាក់ក្នុងប្រព័ន្ធ.</p>

              </div>

            </div>

          </div>



          {/* =====================================================
              QUICK ACTIONS
          ===================================================== */}
          <div className="dashboard-card quick-actions-card">


            <div className="card-header">

              <div>

                <h2>សកម្មភាពរហ័ស </h2>

                <p>មុខងារប្រព័ន្ធដែលប្រើញឹកញាប់ </p>

              </div>

            </div>


            <div className="quick-actions">

              {/* Search Documents */}
              <button
                className="quick-action"
                onClick={handleViewDocuments}
              >

                <span className="quick-icon">
                  ⌕
                </span>

                <div>

                  <strong style={{ color: '#166534', fontWeight: 'bold' }}>
                    ស្វែងរកឯកសារ
                  </strong>

                  <span style={{color: '#166534'}}> ស្វែងរកឯកសារនៅក្នុងប្រព័ន្ធ </span>

                </div>

              </button>

            </div>

          </div>

        </section>



        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="dashboard-footer">

          <span>
            Cambodian Agricultural Science Academy
          </span>

          <span>
            © 2024 CASA • Data Storing Center
          </span>

        </footer>

      </main>

    </div>
  );
}

export default Dashboard;