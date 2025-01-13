const express = require("express");
const cors = require("cors"); // Add CORS support
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS

const dummyData = {
  className: "302 Science",
  id: "X58E9647",
  qRCodeLink: "https://www.classswift.viewsonic.io/",
  totalStudents: 30,
  studentsNumber: 16,
  students: [
    { id: "1", name: "John", score: 85 },
    { id: "2", name: "Guest", score: 0 },
    { id: "3", name: "Jane", score: 90 },
    { id: "4", name: "Guest", score: 0 },
    { id: "5", name: "Alice", score: 92 },
    { id: "6", name: "Bob", score: 78 },
    { id: "7", name: "Charlie", score: 88 },
    { id: "8", name: "Guest", score: 0 },
    { id: "9", name: "Diana", score: 94 },
    { id: "10", name: "Guest", score: 0 },
    { id: "11", name: "Eva", score: 76 },
    { id: "12", name: "Frank", score: 84 },
    { id: "13", name: "Grace", score: 91 },
    { id: "14", name: "Harry", score: 89 },
    { id: "15", name: "Guest", score: 0 },
    { id: "16", name: "Ivy", score: 95 },
    { id: "17", name: "Guest", score: 0 },
    { id: "18", name: "Jack", score: 80 },
    { id: "19", name: "Guest", score: 0 },
    { id: "20", name: "Kathy", score: 82 },
    { id: "21", name: "Guest", score: 0 },
    { id: "22", name: "Leo", score: 79 },
    { id: "23", name: "Guest", score: 0 },
    { id: "24", name: "Mia", score: 86 },
    { id: "25", name: "Nathan", score: 90 },
    { id: "26", name: "Guest", score: 0 },
    { id: "27", name: "Guest", score: 0 },
    { id: "28", name: "Guest", score: 0 },
    { id: "29", name: "Guest", score: 0 },
    { id: "30", name: "Guest", score: 0 },
  ],
};

app.get("/api/getStudents", (req, res) => {
  try {
    res.status(200).json(dummyData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch student data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
