import { useState } from "react";
import axios from "axios";

export default function StudentForm({ onAdd }) {
  const [formData, setFormData] = useState({ name: "", rollNo: "", course: "", marks: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/students", formData);
    onAdd(res.data);
    setFormData({ name: "", rollNo: "", course: "", marks: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="rollNo" placeholder="Roll No" value={formData.rollNo} onChange={handleChange} required />
      <input name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
      <input name="marks" placeholder="Marks" value={formData.marks} onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
}
