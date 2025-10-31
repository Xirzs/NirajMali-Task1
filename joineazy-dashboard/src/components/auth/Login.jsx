import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { users } from '../../data/mockData';

export default function Login() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Find user by email
    const user = users.find(u => u.email === email);
    
    if (user) {
      login(user);
    } else {
      alert('User not found! Try: rahul@student.com');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Joineazy</h1>
          <p className="text-gray-600 mt-2">Assignment Management System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium mb-2">Demo Accounts:</p>
          <p className="text-xs text-gray-500">Student: rahul@student.com</p>
          <p className="text-xs text-gray-500">Admin: kumar@prof.com</p>
        </div>
      </div>
    </div>
  );
}