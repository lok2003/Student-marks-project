const students = [
  { name: "Lokesh", marks: 85 },
  { name: "Anjali", marks: 55 },
  { name: "Ramesh", marks: 32 },
  { name: "Sneha", marks: 70 },
  { name: "Madhu", marks: 28 },
  { name: "Nandini", marks: 91 }
];

// Filter passed students (marks >= 35)
const result = students.map(student => {
  return {
    ...student,
    status: student.marks >= 35 ? "Passed" : "Failed"
  };
});

const list = document.getElementById("student-list");

result.forEach(s => {
  const div = document.createElement("div");
  div.className = "student " + (s.status === "Failed" ? "failed" : "");
  div.innerHTML = `<strong>${s.name}</strong> — Marks: ${s.marks} — <em>${s.status}</em>`;
  list.appendChild(div);
});
