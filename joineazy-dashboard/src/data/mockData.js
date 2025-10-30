// This is our fake database
export const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@student.com",
    role: "student"
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@student.com",
    role: "student"
  },
  {
    id: 3,
    name: "Dr. Kumar",
    email: "kumar@prof.com",
    role: "admin"
  }
];

export const assignments = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Build a todo app using React hooks",
    deadline: "2025-11-05",
    driveLink: "https://drive.google.com/sample1",
    createdBy: 3 // Dr. Kumar created this
  },
  {
    id: 2,
    title: "Tailwind CSS Project",
    description: "Create a responsive landing page",
    deadline: "2025-11-10",
    driveLink: "https://drive.google.com/sample2",
    createdBy: 3
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    description: "Implement async/await and promises",
    deadline: "2025-11-15",
    driveLink: "https://drive.google.com/sample3",
    createdBy: 3
  }
];

// Initial submissions - empty at start
export const initialSubmissions = [];