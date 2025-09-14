// MongoDB Queries for Face Recognition App
// Assuming collection name is 'faces'

// 1. Insert a new face
db.faces.insertOne({
  label: "John Doe",
  class: "person",
  descriptor: [0.1, 0.2, 0.3] // array of 128 numbers for face descriptor
});

// 2. Find all faces
db.faces.find({});

// 3. Find faces by label
db.faces.find({ label: "John Doe" });

// 4. Find faces by class
db.faces.find({ class: "person" });

// 5. Update a face by label
db.faces.updateOne(
  { label: "John Doe" },
  { $set: { class: "employee" } }
);

// 6. Delete a face by label
db.faces.deleteOne({ label: "John Doe" });

// 7. Find faces with specific descriptor (exact match, unlikely for floats)
db.faces.find({ descriptor: [0.1, 0.2, 0.3] });

// For face recognition, typically you'd retrieve all descriptors to compare in application code
// But if you want to find similar faces, you might need aggregation or indexing on descriptor

// 8. Count total faces
db.faces.countDocuments();

// 9. Find distinct classes
db.faces.distinct("class");

// 10. Find distinct labels
db.faces.distinct("label");

// Students collection queries
// Assuming collection name is 'students'

// 11. Insert sample students
db.students.insertMany([
  { name: "Alice Johnson", rollNumber: "001" },
  { name: "Bob Smith", rollNumber: "002" },
  { name: "Charlie Brown", rollNumber: "003" },
  { name: "Diana Prince", rollNumber: "004" },
  { name: "Eve Adams", rollNumber: "005" }
]);

// 12. Find all students
db.students.find({});

// 13. Find student by name
db.students.find({ name: "Alice Johnson" });

// 14. Find student by roll number
db.students.find({ rollNumber: "001" });

// 15. Update student name
db.students.updateOne(
  { rollNumber: "001" },
  { $set: { name: "Alice Cooper" } }
);

// 16. Delete a student
db.students.deleteOne({ rollNumber: "005" });

// 17. Count total students
db.students.countDocuments();

// 18. Find distinct names
db.students.distinct("name");
