
import React, { useState, useEffect } from "react";
import { FaClock, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

// Sample quiz data (replace with real API data)
const quiz = {
  id: 1,
  title: "Math Quiz 1",
  description: "Test your basic math knowledge!",
  questions: [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "What is 5 x 3?",
      options: ["12", "14", "15", "18"],
      correctAnswer: "15",
    },
    {
      id: 3,
      question: "What is 9 / 3?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "3",
    },
  ],
  totalTime: 300, // 5 minutes in seconds
};

const QuizPage = () => {
  const [timeLeft, setTimeLeft] = useState(quiz.totalTime);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  // React-Spring animation for question transition
  const questionAnimation = useSpring({
    opacity: quizFinished ? 0 : 1,
    transform: quizFinished ? "translateY(100px)" : "translateY(0)",
    config: { tension: 300, friction: 25 },
  });

  // React-Spring animation for progress bar
  const progressAnimation = useSpring({
    width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
    config: { tension: 200, friction: 30 },
  });

  // Countdown Timer
  useEffect(() => {
    if (timeLeft === 0) {
      setQuizFinished(true);
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Handle Answer Change
  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers({
      ...answers,
      [questionId]: selectedAnswer,
    });
  };

  // Move to Next Question
  const goToNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  // Format Time Left
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen dark:bg-[#34495E] dark:text-white p-6 lg:p-12">
      <div className="max-w-4xl mx-auto bg-background dark:bg-[#2C3E50] p-6 rounded-lg shadow-xl">
        {/* Quiz Header */}
        <h1 className="text-3xl font-semibold dark:text-[#96C9F4] mb-4">{quiz.title}</h1>
        <p className="text-lg dark:text-gray-400 mb-6">{quiz.description}</p>

        {/* Countdown Timer */}
        {!quizFinished && (
          <div className="flex justify-between items-center mb-8">
            <div className="text-lg text-foreground flex items-center space-x-2">
              <FaClock />
              <span>{formatTime(timeLeft)}</span>
            </div>
            <div>
              <span className="text-sm dark:text-gray-500">Time Left</span>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        {!quizFinished && (
          <div className="mb-6">
            <div className="w-full dark:bg-gray-700 bg-gray-300 rounded-full h-2.5">
              <animated.div
                className="bg-[#3FA2F6] h-2.5 rounded-full"
                style={progressAnimation}
              />
            </div>
          </div>
        )}

        {/* Question */}
        {!quizFinished && (
          <div className="space-y-6">
            <animated.div
              style={questionAnimation}
              className="dark:bg-[#3FA2F6] p-6 rounded-lg shadow-md border border-foreground"
            >
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-foreground">{currentQuestion.question}</h2>
              </div>

              <div className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    className={`w-full py-3 text-lg rounded-lg font-semibold focus:outline-none transition duration-300 ease-in-out transform ${
                      answers[currentQuestion.id] === option
                        ? "bg-[#08467d] text-white"
                        : "bg-[#34495E] text-gray-200 hover:bg-[#08467d] hover:text-white"
                    }`}
                    onClick={() => handleAnswerChange(currentQuestion.id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </animated.div>
          </div>
        )}

        {/* Next Button */}
        {!quizFinished && (
          <div className="mt-8 flex justify-between items-center">
            <div>
              {currentQuestionIndex < quiz.questions.length - 1 ? (
                <button
                  onClick={goToNextQuestion}
                  className="bg-[#0F67B1] text-white py-2 px-6 rounded-lg flex items-center space-x-2 hover:bg-[#3FA2F6] transition duration-200"
                >
                  <span>Next</span>
                  <FaArrowRight />
                </button>
              ) : (
                <button
                  onClick={() => setQuizFinished(true)}
                  className="bg-[#0F67B1] text-white py-2 px-6 rounded-lg flex items-center space-x-2 hover:bg-[#3FA2F6] transition duration-200"
                >
                  <FaCheckCircle />
                  <span>Submit Quiz</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Quiz Finished */}
        {quizFinished && (
          <div className="mt-8 flex justify-center items-center min-h-[200px]">
            <div className="text-center text-lg text-gray-200">
              <h2 className="text-2xl font-semibold text-[#3FA2F6]">Quiz Finished!</h2>
              <p className="mt-4">Thank you for completing the quiz. We will show your results soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
