import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const savedDocs = JSON.parse(localStorage.getItem("documents")) || [];
    setDocuments(savedDocs);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Your Documents</h2>

      {/* ➕ Button to create a new document */}
      <Link to="/document/new" className="create-btn">
        ➕ Create New Document
      </Link>

      <div className="documents-grid">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <div key={doc.id} className="document-card">
              <h3>{doc.title}</h3>
              <p>📅 Created on: {doc.date}</p>
              <Link to={`/document/${doc.id}`} className="open-btn">
                Open
              </Link>
            </div>
          ))
        ) : (
          <p>No documents found. Click "Create New Document" to add one.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
