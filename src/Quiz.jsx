import React, { useState } from 'react';
import sample from './sample.png';
import sample1 from './sample1.PNG';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerExplanation, setAnswerExplanation] = useState('');
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  

  // Define an array of quiz questions, each with an image URL and the correct answer
  const quizQuestions = [
    {
      id: 1,
      question: 'Do you think this email is legitimate and safe to click the link?',
      imageUrl: sample, // Use the imported image
      correctAnswer: 'phishing',
      explanation: 'Phishing is a type of cyberattack that aims to steal your personal information.',
    },
    {
      id: 2,
      question: 'Do you think this email is legitimate and safe to click the link?',
      imageUrl: sample1, // Use the imported image
      correctAnswer: 'valid',
      explanation: 'This website is legitimate and safe to use.',
    },
    {
      id: 3,
      question: 'Do you think this email is legitimate and safe to click the link?',
      imageUrl: sample1, // Use the imported image
      correctAnswer: 'valid',
      explanation: 'This website is legitimate and safe to use.',
    },
    {
      id: 4,
      question: 'Do you think this email is legitimate and safe to click the link?',
      imageUrl: sample1, // Use the imported image
      correctAnswer: 'valid',
      explanation: 'This website is legitimate and safe to use.',
    },
    // Add more quiz questions as needed
  ];

  const handleAnswerSelect = (answer) => {
    const currentQuestionData = quizQuestions[currentQuestion];
    setSelectedAnswer(answer);
    if (answer === currentQuestionData.correctAnswer) {
      if (selectedAnswer !== currentQuestionData.correctAnswer) {
        // Increment score only if the question hasn't been answered correctly before
        setScore(score + 1);
      }
      setAnswerExplanation('Correct! ' + currentQuestionData.explanation);
    } else {
      setAnswerExplanation('Incorrect. ' + currentQuestionData.explanation);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswerExplanation('');
    } else {
      setQuizFinished(true); // Mark the quiz as finished
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setAnswerExplanation('');
    }
  };
  

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {!quizFinished ? (
        <div className="question">
          <h2>Question {currentQuestion + 1}</h2>
          <p style={{ fontSize: '24px', margin: '20px 0' }}>{quizQuestions[currentQuestion].question}</p>
          <img src={quizQuestions[currentQuestion].imageUrl} alt={`Question ${currentQuestion + 1}`} className="quiz-image" />
          <div className="answer-options">
            <button
              className={`answer-option ${selectedAnswer === 'phishing' ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect('phishing')}
            >
              Phishing
            </button>
            <button
              className={`answer-option ${selectedAnswer === 'valid' ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect('valid')}
            >
              Valid
            </button>
          </div>
          <div className="answer-explanation">
            {answerExplanation && <p>{answerExplanation}</p>}
          </div>
          <div className="navigation-buttons">
            <button
              className="prev-button"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button className="next-button" onClick={handleNextQuestion}>
              Next
            </button>
          </div>
        </div>
      ) : (
        // This section is displayed when the quiz is finished
        <div className="quiz-result">
          <h2>Your Score: {score}/{quizQuestions.length}</h2>
          <p>
            {score <= 5
              ? 'You should be more detailed and careful before clicking any link.'
              : 'You have identified and been careful before clicking any link.'}
          </p>
          <button onClick={() => window.location.reload(false)}>Try again</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;