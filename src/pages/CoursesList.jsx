import React, { useState } from "react";
import { FaPlayCircle, FaCheckCircle, FaUserAlt, FaSearch } from "react-icons/fa";

// Dummy data for courses
const courses = [
  { id: 1, name: "Math 101", instructor: "Dr. Smith", progress: 85, status: "active" },
  { id: 2, name: "History 202", instructor: "Prof. Lee", progress: 50, status: "active" },
  { id: 3, name: "Physics 303", instructor: "Dr. Williams", progress: 100, status: "completed" },
  { id: 4, name: "Computer Science 404", instructor: "Prof. Zhang", progress: 25, status: "active" },
  { id: 5, name: "Literature 505", instructor: "Dr. Johnson", progress: 75, status: "completed" },
];

const CoursesList = () => {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on search query (case-insensitive)
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-[#34495E] p-8 rounded-lg shadow-lg space-y-8">
      {/* Search Bar with Icon */}
      <div className="flex justify-start mb-6">
        <div className="relative w-full max-w-lg">
          <FaSearch className="absolute left-4 top-3 p-1 text-gray-400 dark:text-white-400 bg-[#3FA2F6] h-6 w-6 rounded" />
          <input
            type="text"
            className="w-full p-3 pl-12 bg-gray-100 dark:bg-[#2C3E50] text-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3FA2F6] placeholder:text-gray-300"
            placeholder="Search courses by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-black dark:text-[#96C9F4] mb-6">Your Courses</h2>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full text-center text-gray-400">No courses found</div>
        ) : (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-100 dark:bg-[#2C3E50] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Course Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-black dark:text-white">{course.name}</h3>
                <div
                  className={`flex items-center space-x-2 text-sm ${
                    course.status === "completed" ? "text-green-500" : "text-[#3FA2F6]"
                  }`}
                >
                  {course.status === "completed" ? <FaCheckCircle /> : <FaPlayCircle />}
                  <span>{course.status === "completed" ? "Completed" : "In Progress"}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center space-x-2 mb-4 text-gray-400">
                <FaUserAlt />
                <span>{course.instructor}</span>
              </div>

              {/* Progress Bar */}
              <div className="relative pt-1 mb-4">
                <label htmlFor="progress" className="block text-sm font-semibold text-gray-400">
                  Progress
                </label>
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                    {course.progress}%
                  </span>
                </div>
                <div className="flex mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      style={{ width: `${course.progress}%` }}
                      className="bg-[#3FA2F6] h-2 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Course Status & Action */}
              <div className="mt-4">
                {course.status === "active" ? (
                  <button
                    className="w-full py-2 text-white bg-[#3FA2F6] hover:bg-[#0F67B1] rounded-lg focus:outline-none transition duration-200 ease-in-out"
                  >
                    Continue Course
                  </button>
                ) : (
                  <button
                    className="w-full py-2 text-white bg-gray-500 cursor-not-allowed rounded-lg"
                    disabled
                  >
                    Completed
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CoursesList;