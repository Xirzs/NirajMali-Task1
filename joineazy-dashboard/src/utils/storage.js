// Helper functions to save/load data from browser storage

const STORAGE_KEY = 'joineazy_data';

// Get all data
export const getStorageData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

// Save all data
export const setStorageData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Initialize storage with mock data
export const initializeStorage = (assignments, submissions) => {
  if (!getStorageData()) {
    setStorageData({ assignments, submissions });
  }
};

// Get submissions for a specific student
export const getStudentSubmissions = (studentId) => {
  const data = getStorageData();
  return data?.submissions.filter(sub => sub.studentId === studentId) || [];
};

// Submit an assignment
export const submitAssignment = (studentId, assignmentId) => {
  const data = getStorageData();
  const newSubmission = {
    id: Date.now(),
    studentId,
    assignmentId,
    submittedAt: new Date().toISOString(),
    status: 'submitted'
  };
  
  data.submissions.push(newSubmission);
  setStorageData(data);
  return newSubmission;
};

// Check if student submitted specific assignment
export const hasSubmitted = (studentId, assignmentId) => {
  const data = getStorageData();
  return data?.submissions.some(
    sub => sub.studentId === studentId && sub.assignmentId === assignmentId
  ) || false;
};