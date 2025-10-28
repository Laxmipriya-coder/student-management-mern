import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  marks: { type: Number, required: true }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
