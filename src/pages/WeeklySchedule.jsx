import React, { useState } from "react";

// Dummy data for course classes
const levels = ["1st year", "2nd year", "3rd year"];
const classes = ["Marketing", "Business", "Engineering", "Design"];

// Hourly time slots from 8:30 AM to 6:30 PM
const timeSlots = [
  "8:30 AM - 9:30 AM", "9:30 AM - 10:30 AM", "10:30 AM - 11:30 AM", "11:30 AM - 12:30 PM",
  "12:30 PM - 1:30 PM", "1:30 PM - 2:30 PM", "2:30 PM - 3:30 PM", "3:30 PM - 4:30 PM",
  "4:30 PM - 5:30 PM", "5:30 PM - 6:30 PM"
];

const WeeklySchedule = () => {
  // State for level and class selections
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  // Initial schedule state (empty hours for simplicity)
  const [schedule, setSchedule] = useState({
    Monday: Array(timeSlots.length).fill("empty"),
    Tuesday: Array(timeSlots.length).fill("empty"),
    Wednesday: Array(timeSlots.length).fill("empty"),
    Thursday: Array(timeSlots.length).fill("empty"),
    Friday: Array(timeSlots.length).fill("empty"),
    Saturday: Array(timeSlots.length).fill("empty")
  });

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 min-h-screen rounded-lg">
      {/* Dropdowns for Level and Class */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <label htmlFor="level" className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Select Level
          </label>
          <select
            id="level"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Level</option>
            {levels.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/2 md:pl-4">
          <label htmlFor="class" className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Select Class
          </label>
          <select
            id="class"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-2 border  rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Class</option>
            {classes.map((classOption, index) => (
              <option key={index} value={classOption}>
                {classOption}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Weekly Schedule Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg shadow-lg border-foreground">
          <thead className="text-gray-700 dark:text-gray-300 border border-foreground">
            <tr>
              <th className="px-4 py-2 text-left border border-foreground">Day</th>
              {timeSlots.map((slot, index) => (
                <th key={index} className="px-4 py-2 text-left text-sm border border-foreground">{slot}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule).map((day) => (
              <tr key={day} className="text-gray-700 dark:text-gray-300">
                <td className="border border-foreground px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800">{day}</td>
                {schedule[day].map((slot, index) => (
                  <td key={index} className="border border-foreground px-4 py-2">
                    <span>{slot}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklySchedule;
