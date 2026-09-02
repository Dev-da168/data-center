import { useState } from "react";
import {
  LayoutDashboard,
  FolderOpen,
  ShieldCheck,
  LogOut,
  ChevronDown,
  CalendarDays,
  Grid3X3,
  List,
  Printer,
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./Document.css";

interface DocumentItem {
  id: string;
  name: string;
  category: string;
  date: string;
  image: string;
  status: string;
}

const documents: DocumentItem[] = [
  {
    id: "TMP-2024-002",
    name: "សេចក្តីប្រកាស",
    category: "សេចក្តីប្រកាស",
    date: "Nov 05, 2023",
    image: "/document-preview.png",
    status: "ACTIVE",
  },
  {
    id: "TMP-2024-002",
    name: "សេចក្តីប្រកាស",
    category: "សេចក្តីប្រកាស",
    date: "Nov 05, 2023",
    image: "/document-preview.png",
    status: "ACTIVE",
  },
  {
    id: "TMP-2024-002",
    name: "សេចក្តីប្រកាស",
    category: "សេចក្តីប្រកាស",
    date: "Nov 05, 2023",
    image: "/document-preview.png",
    status: "ACTIVE",
  },
  {
    id: "TMP-2024-002",
    name: "សេចក្តីប្រកាស",
    category: "សេចក្តីប្រកាស",
    date: "Nov 05, 2023",
    image: "/document-preview.png",
    status: "ACTIVE",
  },
  {
    id: "TMP-2024-002",
    name: "សេចក្តីប្រកាស",
    category: "សេចក្តីប្រកាស",
    date: "Nov 05, 2023",
    image: "/document-preview.png",
    status: "ACTIVE",
  },
  {
    id: "TMP-2024-002",
    name: "សេចក្តីប្រកាស",
    category: "សេចក្តីប្រកាស",
    date: "Nov 05, 2023",
    image: "/document-preview.png",
    status: "ACTIVE",
  },
];

function Document() {
  const [documentId, setDocumentId] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [date, setDate] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDocuments = documents.filter((doc) => {
    const matchesId =
      documentId === "" ||
      doc.id.toLowerCase().includes(documentId.toLowerCase());

    const matchesName =
      documentName === "" ||
      doc.name.toLowerCase().includes(documentName.toLowerCase());

    const matchesType =
      documentType === "" ||
      doc.category === documentType;

    return matchesId && matchesName && matchesType;
  });

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div className="document-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        {/* Logo */}
        <div className="sidebar-logo">
          <img src="/casa-logo.png" alt="CASA Logo" />
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">

          <button className="nav-item">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>

          <div className="document-menu">

            <button className="nav-item active">
              <FolderOpen size={21} />
              <span>Document</span>

              <ChevronDown
                size={18}
                className="nav-arrow"
              />
            </button>

            <div className="submenu">

              <button>
                Royal decree / ព្រះរាជក្រឹត្យ
              </button>

              <button>
                Sub-decree / អនុក្រឹត្យ
              </button>

            </div>

          </div>

        </nav>

        {/* Bottom Navigation */}
        <div className="sidebar-bottom">

          <button className="bottom-item">
            <ShieldCheck size={20} />
            <span>Security Settings</span>
          </button>

          <button
            className="bottom-item logout"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>

        </div>

      </aside>

      {/* ================= MAIN CONTENT ================= */}

      <main className="main-content">

        {/* Header */}
        <div className="page-header">
          <h1>DOCUMENT</h1>
        </div>

        {/* ================= SEARCH AREA ================= */}

        <section className="search-area">

          {/* Document ID */}
          <div className="search-field">
            <label>Document ID</label>

            <input
              type="text"
              placeholder="e.g., DOC1"
              value={documentId}
              onChange={(e) =>
                setDocumentId(e.target.value)
              }
            />
          </div>

          {/* Document Name */}
          <div className="search-field">
            <label>Document Name</label>

            <input
              type="text"
              placeholder="e.g., ..................."
              value={documentName}
              onChange={(e) =>
                setDocumentName(e.target.value)
              }
            />
          </div>

          {/* Document Type */}
          <div className="search-field">
            <label>Document Type</label>

            <div className="select-wrapper">
              <select
                value={documentType}
                onChange={(e) =>
                  setDocumentType(e.target.value)
                }
              >
                <option value="">
                  Document Type
                </option>

                <option value="សេចក្តីប្រកាស">
                  សេចក្តីប្រកាស
                </option>

                <option value="ព្រះរាជក្រឹត្យ">
                  ព្រះរាជក្រឹត្យ
                </option>

                <option value="អនុក្រឹត្យ">
                  អនុក្រឹត្យ
                </option>
              </select>

              <ChevronDown size={18} />
            </div>
          </div>

          {/* Date */}
          <div className="search-field date-field">
            <label>Date</label>

            <div className="date-wrapper">

              <input
                type="text"
                placeholder="dd/mm/yyyy"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
              />

              <CalendarDays size={20} />

            </div>
          </div>

          {/* View Buttons */}
          <div className="view-buttons">

            <button
              className={
                viewMode === "grid"
                  ? "view-button selected"
                  : "view-button"
              }
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 size={20} />
            </button>

            <button
              className={
                viewMode === "list"
                  ? "view-button selected"
                  : "view-button"
              }
              onClick={() => setViewMode("list")}
            >
              <List size={20} />
            </button>

          </div>

        </section>

        {/* ================= DOCUMENTS ================= */}

        {viewMode === "grid" ? (

          <div className="document-grid">

            {filteredDocuments.map((doc, index) => (

              <div
                className="document-card"
                key={`${doc.id}-${index}`}
              >

                {/* Preview */}
                <div className="document-preview">

                  <img
                    src={doc.image}
                    alt={doc.name}
                  />

                  <span className="status-badge">
                    {doc.status}
                  </span>

                </div>

                {/* Information */}
                <div className="document-info">

                  <p className="document-id">
                    ID: {doc.id}
                  </p>

                  <h2>
                    {doc.name}
                  </h2>

                  <div className="card-line"></div>

                  <div className="document-detail">

                    <span>
                      Category:
                    </span>

                    <strong>
                      {doc.category}
                    </strong>

                  </div>

                  <div className="document-detail">

                    <span>
                      Last Modified:
                    </span>

                    <strong>
                      {doc.date}
                    </strong>

                  </div>

                  {/* Actions */}
                  <div className="document-actions">

                    <button className="print-button">
                      <Printer size={18} />
                      <span>បោះពុម្ព</span>
                    </button>

                    <button
                      className="icon-button"
                      title="Download"
                    >
                      <Download size={19} />
                    </button>

                    <button
                      className="icon-button"
                      title="View"
                    >
                      <Eye size={20} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* LIST VIEW */

          <div className="document-list">

            {filteredDocuments.map((doc, index) => (

              <div
                className="list-document"
                key={`${doc.id}-list-${index}`}
              >

                <img
                  src={doc.image}
                  alt={doc.name}
                />

                <div className="list-info">

                  <span>
                    {doc.status}
                  </span>

                  <h2>{doc.name}</h2>

                  <p>ID: {doc.id}</p>

                  <p>
                    Category: {doc.category}
                  </p>

                </div>

                <div className="list-actions">

                  <button>
                    <Printer size={18} />
                  </button>

                  <button>
                    <Download size={18} />
                  </button>

                  <button>
                    <Eye size={18} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* ================= BOTTOM ================= */}

        <div className="results-footer">

          <p>
            Showing 1 to {filteredDocuments.length} of{" "}
            <strong>234</strong> results
          </p>

          <div className="pagination">

            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage(
                  Math.max(1, currentPage - 1)
                )
              }
            >
              <ChevronLeft size={17} />
            </button>

            <button
              className={
                currentPage === 1
                  ? "page-active"
                  : ""
              }
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>

            <button
              className={
                currentPage === 2
                  ? "page-active"
                  : ""
              }
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>

            <button
              className={
                currentPage === 3
                  ? "page-active"
                  : ""
              }
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>

            <span>...</span>

            <button
              onClick={() => setCurrentPage(24)}
            >
              24
            </button>

            <button
              onClick={() =>
                setCurrentPage(
                  Math.min(24, currentPage + 1)
                )
              }
            >
              <ChevronRight size={17} />
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Document;