import React from "react";
import { FaListAlt, FaClock, FaPlayCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// Sample quizzes data (replace with actual API data)
const quizzes = [
  { id: 1, title: "Math Quiz 1", description: "Basic math concepts", date: "2024-11-10", status: "available" },
  { id: 2, title: "History Quiz 1", description: "World War II details", date: "2024-11-12", status: "available" },
  { id: 3, title: "Physics Quiz 1", description: "Quantum Mechanics fundamentals", date: "2024-11-15", status: "available" },
  { id: 4, title: "Literature Quiz 1", description: "Shakespeare's works", date: "2024-11-20", status: "available" },
  { id: 5, title: "Computer Science Quiz 1", description: "Data Structures and Algorithms", date: "2024-11-25", status: "available" },
];

// Quiz List Component
const QuizList = () => {
  return (
    <div className="bg-[#34495E] p-8 rounded-lg shadow-lg space-y-8">

      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#96C9F4] mb-6">Available Quizzes</h2>

      {/* Quiz Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-[#2C3E50] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Quiz Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">{quiz.title}</h3>
              <div className={`flex items-center space-x-2 text-sm ${quiz.status === "available" ? "text-[#3FA2F6]" : "text-gray-500"}`}>
                <FaListAlt />
                <span>{quiz.status === "available" ? "Available" : "Unavailable"}</span>
              </div>
            </div>

            {/* Quiz Description */}
            <p className="text-gray-400 mb-4">{quiz.description}</p>

            {/* Quiz Date */}
            <div className="flex items-center space-x-2 mb-4 text-gray-500">
              <FaClock />
              <span>Available until: {new Date(quiz.date).toLocaleDateString()}</span>
            </div>

            {/* Start Quiz Button */}
            <div className="flex justify-center">
              {/* Only create link if the quiz is available */}
              {quiz.status === "available" ? (
                <Link to={`/quiz/${quiz.id}`} className="w-full py-2 text-white bg-[#3FA2F6] hover:bg-[#0F67B1] rounded-lg focus:outline-none transition duration-200 ease-in-out flex justify-center items-center">
                  <FaPlayCircle className="mr-2 inline-block" />
                  Start Quiz
                </Link>
                
              ) : (
                <button
                  className="w-full py-2 text-white bg-gray-500 cursor-not-allowed rounded-lg"
                  disabled
                >
                  Quiz Unavailable
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;