import React from "react";

function ApplicationsTable({ applications, onEdit, editingId, editStatus, onStatusChange, onSave }) {
  return (
    <table border="1" cellPadding="8" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Applicant Name</th>
          <th>Position</th>
          <th>Status</th>
          <th>Date Applied</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {applications.map(app => (
          <tr key={app.id}>
            <td>{app.applicantName}</td>
            <td>{app.position}</td>
            <td>
              {editingId === app.id ? (
                <select value={editStatus} onChange={onStatusChange}>
                  {["Applied", "Interview", "Offer", "Rejected"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              ) : (
                app.status
              )}
            </td>
            <td>{new Date(app.appliedOn).toLocaleDateString()}</td>
            <td>
              {editingId === app.id ? (
                <button onClick={() => onSave(app.id)}>Save</button>
              ) : (
                <button onClick={() => onEdit(app.id, app.status)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ApplicationsTable;