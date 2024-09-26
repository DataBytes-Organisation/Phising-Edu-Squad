import React, { useState } from "react";
import "./App.css";

function App() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        {
            text: "What is phishing?",
            options: [
                { id: 0, text: "Fishing for compliments on social media platforms", isCorrect: false },
                { id: 1, text: "A type of cyber attack involving fraudulent communication", isCorrect: true },
                { id: 2, text: "A method for catching fish in the digital world", isCorrect: false },
                { id: 3, text: "An exercise to improve awareness about cybersecurity", isCorrect: false },
            ],
        },
        {
            text: "Why is phishing a serious threat?",
            options: [
                { id: 0, text: "It only results in significant security breaches", isCorrect: false },
                { id: 1, text: "It causes identity theft exclusively", isCorrect: false },
                { id: 2, text: "It can lead to various security compromises, including identity theft and malware installation", isCorrect: true },
                { id: 3, text: "It only targets business email accounts", isCorrect: false },
            ],
        },
        {
            text: "What are some red flags to look out for in phishing messages according to the article?",
            options: [
                { id: 0, text: "Messages with urgent tones and poor grammar", isCorrect: true },
                { id: 1, text: "Messages from legitimate businesses", isCorrect: false },
                { id: 2, text: "Messages with attachments and links", isCorrect: false },
                { id: 3, text: "Messages with perfect spelling and grammar", isCorrect: false },
            ],
        },
        {
            text: "How can individuals enhance their security against phishing attacks?",
            options: [
                { id: 0, text: "Ignoring all email messages", isCorrect: false },
                { id: 1, text: "Clicking on links and attachments without verification", isCorrect: false },
                { id: 2, text: "Verifying the sender's email and scrutinizing lookalike domains", isCorrect: true },
                { id: 3, text: "Using the same password for all accounts", isCorrect: false },
            ],
        },
        {
            text: "How can businesses mitigate the risk of phishing attacks, as suggested in the article?",
            options: [
                { id: 0, text: "Ignoring employee education on phishing techniques", isCorrect: false },
                { id: 1, text: "Conducting simulated phishing campaigns for employees", isCorrect: true },
                { id: 2, text: "Avoiding the use of multi-factor authentication (MFA)", isCorrect: false },
                { id: 3, text: "Not updating or patching software regularly", isCorrect: false },
            ],
        },
    ];

    // Helper Functions

    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    /* Resets the game back to default */
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    return (
        <div className="App">
            {/* 1. Header  */}
            <h1>Introduction Quiz</h1>

            {/* 2. Current Score  */}
            <h2>Current Score: {score} / {questions.length}</h2>

            {/* 3. Show results or show the question game  */}
            {showResults ? (
                /* 4. Final Results */
                <div className="final-results">
                    <h1>Final Results</h1>
                    <h2>
                        {score} out of {questions.length} correct - ({(score / questions.length) * 100}%)
                    </h2>
                    <button onClick={() => restartGame()}>Restart game</button>
                </div>
            ) : (
                /* 5. Question Card  */
                <div className="question-card">
                    {/* Current Question  */}
                    <h2>
                        Question: {currentQuestion + 1} out of {questions.length}
                    </h2>
                    <h3 className="question-text">{questions[currentQuestion].text}</h3>

                    {/* List of possible answers  */}
                    <ul>
                        {questions[currentQuestion].options.map((option) => {
                            return (
                                <li
                                    key={option.id}
                                    onClick={() => optionClicked(option.isCorrect)}
                                >
                                    {option.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
