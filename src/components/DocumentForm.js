import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DocumentForm.css";

const DocumentForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleCreate = () => {
    if (!title || !content) return alert("Title and Content are required!");

    const newDoc = {
      id: String(Date.now()),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };

    const savedDocs = JSON.parse(localStorage.getItem("documents")) || [];
    localStorage.setItem("documents", JSON.stringify([...savedDocs, newDoc]));

    navigate("/dashboard"); // Redirect to dashboard after creation
  };

  return (
    <div className="document-container">
      <h2>Create New Document</h2>
      <div className="input-group">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button className="submit-btn" onClick={handleCreate}>Create</button>
    </div>
  );
};

export default DocumentForm;
