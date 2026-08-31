import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Folder,
  UsersRound,
  ShieldCheck,
  LogOut,
  Pencil,
  Eye,
  Trash2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./Document.css";

interface DocumentItem {
  id: string;
  name: string;
  category: string;
  lastModified: string;
  image: string;
}

function Document() {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: "TMP-2024-002",
      name: "សេចក្តីប្រកាស",
      category: "សេចក្តីប្រកាស",
      lastModified: "Nov 05, 2023",
      image: "/document-preview.png",
    },
    {
      id: "TMP-2024-003",
      name: "សេចក្តីប្រកាស",
      category: "សេចក្តីប្រកាស",
      lastModified: "Nov 05, 2023",
      image: "/document-preview.png",
    },
    {
      id: "TMP-2024-004",
      name: "សេចក្តីប្រកាស",
      category: "សេចក្តីប្រកាស",
      lastModified: "Nov 05, 2023",
      image: "/document-preview.png",
    },
    {
      id: "TMP-2024-005",
      name: "សេចក្តីប្រកាស",
      category: "សេចក្តីប្រកាស",
      lastModified: "Nov 05, 2023",
      image: "/document-preview.png",
    },
    {
      id: "TMP-2024-006",
      name: "សេចក្តីប្រកាស",
      category: "សេចក្តីប្រកាស",
      lastModified: "Nov 05, 2023",
      image: "/document-preview.png",
    },
    {
      id: "TMP-2024-007",
      name: "សេចក្តីប្រកាស",
      category: "សេចក្តីប្រកាស",
      lastModified: "Nov 05, 2023",
      image: "/document-preview.png",
    },
  ]);

  // Delete modal
  const [deleteDocument, setDeleteDocument] =
    useState<DocumentItem | null>(null);

  // -----------------------------------
  // EDIT
  // -----------------------------------

  const handleEdit = (document: DocumentItem) => {
    navigate(`/admin/documents/edit/${document.id}`);
  };

  // -----------------------------------
  // VIEW
  // -----------------------------------

  const handleView = (document: DocumentItem) => {
    navigate(`/admin/documents/view/${document.id}`);
  };

  // -----------------------------------
  // DELETE
  // -----------------------------------

  const handleDelete = () => {
    if (!deleteDocument) return;

    setDocuments((previousDocuments) =>
      previousDocuments.filter(
        (document) => document.id !== deleteDocument.id
      )
    );

    setDeleteDocument(null);
  };

  // -----------------------------------
  // LOGOUT
  // -----------------------------------

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="document-page">

      {/* =====================================
          SIDEBAR
      ===================================== */}

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
          <button
            className="nav-item"
            onClick={() => navigate("/admin/dashboard")}
          >
            <LayoutDashboard size={21} />
            <span>Dashboard</span>
          </button>

          {/* Documents */}
          <button className="nav-item active">
            <Folder size={22} />
            <span>Documents</span>
          </button>

          {/* Access Management */}
          <div className="access-title">
            ACCESS MANAGEMENT
          </div>

          {/* Role Control */}
          <button
            className="nav-item"
            onClick={() => navigate("/admin/roles")}
          >
            <UsersRound size={21} />
            <span>Role Control</span>
          </button>

          {/* Permission Control */}
          <button
            className="nav-item"
            onClick={() =>
              navigate("/admin/permissions")
            }
          >
            <ShieldCheck size={21} />
            <span>Permission Control</span>
          </button>

        </nav>

        {/* Logout */}
        <div className="sidebar-bottom">

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <main className="document-content">

        {/* Header */}
        <div className="document-header">

          <h1>DOCUMENT</h1>

        </div>


        {/* =====================================
            SEARCH / FILTER
        ===================================== */}

        <section className="filter-section">

          {/* Document ID */}
          <div className="filter-group">

            <label>Document ID</label>

            <input
              type="text"
              placeholder="e.g., DOC1"
            />

          </div>


          {/* Document Name */}
          <div className="filter-group">

            <label>Document Name</label>

            <input
              type="text"
              placeholder="e.g., ...................."
            />

          </div>


          {/* Document Type */}
          <div className="filter-group">

            <label>Document Type</label>

            <select defaultValue="">
              <option value="" disabled>
                Document Type
              </option>

              <option value="announcement">
                សេចក្តីប្រកាស
              </option>

              <option value="sub-decree">
                អនុក្រឹត្យ
              </option>

              <option value="royal-decree">
                ព្រះរាជក្រឹត្យ
              </option>
            </select>

          </div>


          {/* Date */}
          <div className="filter-group">

            <label>Date</label>

            <div className="date-input">

              <input
                type="text"
                placeholder="dd/mm/yyyy"
              />

              <CalendarDays size={19} />

            </div>

          </div>

        </section>


        {/* =====================================
            DOCUMENT GRID
        ===================================== */}

        <section className="document-grid">

          {documents.map((document) => (

            <div
              className="document-card"
              key={document.id}
            >

              {/* Preview */}
              <div className="document-preview">

                <img
                  src={document.image}
                  alt={document.name}
                />

                <span className="active-badge">
                  ACTIVE
                </span>

              </div>


              {/* Card Content */}
              <div className="document-card-content">

                {/* ID */}
                <p className="document-id">
                  ID: {document.id}
                </p>


                {/* Name */}
                <h2>
                  {document.name}
                </h2>


                <div className="card-divider"></div>


                {/* Category */}
                <div className="document-info-row">

                  <span>
                    Category:
                  </span>

                  <strong>
                    {document.category}
                  </strong>

                </div>


                {/* Modified */}
                <div className="document-info-row">

                  <span>
                    Last Modified:
                  </span>

                  <strong>
                    {document.lastModified}
                  </strong>

                </div>


                {/* Actions */}
                <div className="document-actions">

                  {/* Edit */}
                  <button
                    className="edit-button"
                    onClick={() =>
                      handleEdit(document)
                    }
                  >
                    <Pencil size={17} />
                    <span>Edit</span>
                  </button>


                  {/* View */}
                  <button
                    className="icon-button view-button"
                    onClick={() =>
                      handleView(document)
                    }
                    title="View document"
                  >
                    <Eye size={22} />
                  </button>


                  {/* Delete */}
                  <button
                    className="icon-button delete-button"
                    onClick={() =>
                      setDeleteDocument(document)
                    }
                    title="Delete document"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </section>


        {/* =====================================
            PAGINATION
        ===================================== */}

        <div className="pagination-section">

          <div className="result-count">
            Showing 1 to {documents.length} of 234 results
          </div>


          <div className="pagination">

            <button className="page-arrow">
              <ChevronLeft size={18} />
            </button>

            <button className="page active-page">
              1
            </button>

            <button className="page">
              2
            </button>

            <button className="page">
              3
            </button>

            <span className="dots">
              ...
            </span>

            <button className="page">
              24
            </button>

            <button className="page-arrow">
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

      </main>


      {/* =====================================
          DELETE MODAL
      ===================================== */}

      {deleteDocument && (

        <div className="modal-overlay">

          <div className="delete-modal">

            {/* Warning Icon */}
            <div className="warning-icon">
              <Trash2 size={24} />
            </div>


            {/* Title */}
            <h2>
              Delete Document?
            </h2>


            {/* Message */}
            <p>
              Are you sure you want to permanently
              delete{" "}
              <strong>
                {deleteDocument.name}.pdf
              </strong>
              ? This action cannot be undone and
              the encrypted file will be purged
              from the vault.
            </p>


            <div className="modal-divider"></div>


            {/* Modal Buttons */}
            <div className="modal-actions">

              <button
                className="cancel-button"
                onClick={() =>
                  setDeleteDocument(null)
                }
              >
                Cancel
              </button>


              <button
                className="confirm-delete-button"
                onClick={handleDelete}
              >
                <Trash2 size={15} />
                Delete
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Document;