import React from "react";

function ApplicationForm({ form, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: 20 }}>
      <input
        name="applicantName"
        placeholder="Applicant Name"
        value={form.applicantName}
        onChange={onChange}
        required
      />
      <input
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={onChange}
        required
      />
      <select name="status" value={form.status} onChange={onChange}>
        {["Applied", "Interview", "Offer", "Rejected"].map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <button type="submit">Add Application</button>
    </form>
  );
}

export default ApplicationForm;