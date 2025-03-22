import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/DocumentDetails.css";

const DocumentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const savedDocs = JSON.parse(localStorage.getItem("documents")) || [];
    const foundDoc = savedDocs.find((doc) => doc.id === String(id));
    if (foundDoc) setDocument(foundDoc);
    else navigate("/dashboard"); // Redirect to dashboard if not found
  }, [id, navigate]);

  const handleUpdate = () => {
    if (!document.title || !document.content) return alert("Title & Content required!");

    const savedDocs = JSON.parse(localStorage.getItem("documents")) || [];
    const updatedDocs = savedDocs.map((doc) =>
      doc.id === String(id) ? { ...doc, title: document.title, content: document.content } : doc
    );

    localStorage.setItem("documents", JSON.stringify(updatedDocs));
    alert("Updated successfully!");
  };

  const handleDelete = () => {
    const savedDocs = JSON.parse(localStorage.getItem("documents")) || [];
    const filteredDocs = savedDocs.filter((doc) => doc.id !== String(id));
    localStorage.setItem("documents", JSON.stringify(filteredDocs));
    navigate("/dashboard"); // Redirect to dashboard after delete
  };

  if (!document) return <p>Loading...</p>;

  return (
    <div className="document-container">
      <h2>Edit Document</h2>
      <div className="input-group">
        <label>Title</label>
        <input value={document.title} onChange={(e) => setDocument({ ...document, title: e.target.value })} />
      </div>
      <div className="input-group">
        <label>Content</label>
        <textarea value={document.content} onChange={(e) => setDocument({ ...document, content: e.target.value })} />
      </div>
      <button className="submit-btn" onClick={handleUpdate}>Save</button>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DocumentDetails;
