import { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAdd = (student) => setStudents([...students, student]);
  const handleDelete = (id) => setStudents(students.filter((s) => s._id !== id));

  return (
    <div className="App">
      <h1>🎓 Student Management System</h1>
      <StudentForm onAdd={handleAdd} />
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
}

export default App;
