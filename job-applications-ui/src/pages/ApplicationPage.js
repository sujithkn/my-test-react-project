import React, { useEffect, useState } from "react";
import {
  getApplications,
  addApplication,
  updateApplication
} from "../api/application";
import ApplicationsTable from "../components/ApplicationTable";
import ApplicationForm from "../components/ApplicationForm";
import Pagination from "../components/Pagination";

function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({
    applicantName: "",
    position: "",
    status: "Applied"
  });
  const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const res = await getApplications();
    setApplications(res.data);
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await addApplication({ ...form, appliedOn: new Date().toISOString() });
    setForm({ applicantName: "", position: "", status: "Applied" });
    fetchApplications();
  };

  const startEdit = (id, currentStatus) => {
    setEditingId(id);
    setEditStatus(currentStatus);
  };

  const handleStatusChange = e => setEditStatus(e.target.value);

  const saveEdit = async id => {
    await updateApplication(id, { status: editStatus });
    setEditingId(null);
    fetchApplications();
  };

  // Pagination logic
  const pagedApps = applications.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(applications.length / pageSize);

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <h2>Job Applications</h2>
      <ApplicationForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
      <ApplicationsTable
        applications={pagedApps}
        onEdit={startEdit}
        editingId={editingId}
        editStatus={editStatus}
        onStatusChange={handleStatusChange}
        onSave={saveEdit}
      />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default ApplicationsPage;