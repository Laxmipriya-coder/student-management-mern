import axios from "axios";

export default function StudentList({ students, onDelete }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    onDelete(id);
  };

  return (
    <div>
      <h3>Student List</h3>
      <ul>
        {students.map((s) => (
          <li key={s._id}>
            {s.name} - {s.course} ({s.marks})
            <button onClick={() => handleDelete(s._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
