import React, { useState } from 'react';
import studentData from './Student.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Student from './Student.jsx';

function App() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundStudent = studentData.find(
      (s) =>
        s.name.toLowerCase() === student.name.toLowerCase().trim() &&
        s.email.toLowerCase() === student.email.toLowerCase().trim() &&
        s.mobile === student.mobile.trim()
    );

    if (foundStudent) {
      toast.success("Login Successfull...!", { position: "top-right" });
      setIsSubmitted(true);
    } else {
      toast.error("Student not found. Check your details...!", {
        position: "top-right"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-200 to-pink-300 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/30">
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-extrabold text-center text-white drop-shadow mb-6">
              Student Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Name</label>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) =>
                    setStudent({ ...student, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                  type="email"
                  value={student.email}
                  onChange={(e) =>
                    setStudent({ ...student, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Mobile No</label>
                <input
                  type="text"
                  value={student.mobile}
                  onChange={(e) =>
                    setStudent({ ...student, mobile: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter mobile number"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Sign In
              </button>
            </form>
          </>
        ) : (
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Welcome, {student.name}!</h2>
            <div className="bg-white/40 backdrop-blur p-4 rounded-xl space-y-2 text-left text-black shadow">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Mobile:</strong> {student.mobile}</p>
            </div>
          </div>
        )}
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;