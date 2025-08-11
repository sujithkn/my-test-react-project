import axios from "axios";

const API_URL = "http://localhost:5028/applications";

export const getApplications = () => axios.get(API_URL);
export const getApplication = (id) => axios.get(`${API_URL}/${id}`);
export const addApplication = (data) => axios.post(API_URL, data);
export const updateApplication = (id, data) => axios.put(`${API_URL}/${id}`, data);