import React from 'react';
function Student({ name, email, mobile }) {
  return (
    <div className="max-w-md w-full bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-2xl p-10 mx-auto mt-20 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8">Student Details</h2>
      <p className="text-lg text-gray-800"><strong>Name:</strong> {name}</p>
      <p className="text-lg text-gray-900"><strong>Email:</strong> {email}</p>
      <p className="text-lg text-gray-900"><strong>Mobile No:</strong> {mobile}</p>
    </div>
  );
}

export default Student;