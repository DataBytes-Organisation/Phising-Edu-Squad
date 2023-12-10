import React, { useState } from "react";
import "./App.css";

function App() {
    // Properties
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        {
            text: "What is Business Email Compromise (BEC) in the context of phishing attacks?",
            options: [
                { id: 0, text: "Randomly generated emails sent to trick individuals", isCorrect: false },
                { id: 1, text: "Attacks specifically targeting company executives, vendors, or suppliers", isCorrect: true },
                { id: 2, text: "Phishing emails that compromise personal email accounts", isCorrect: false },
                { id: 3, text: "Spear phishing attacks on high-level executives", isCorrect: false },
            ],
        },
        {
            text: "Which of the following is a common threat related to BEC according to the article?",
            options: [
                { id: 0, text: "Spear phishing", isCorrect: false },
                { id: 1, text: "Account takeover (ATO)", isCorrect: false },
                { id: 2, text: "Email account compromise", isCorrect: true },
                { id: 3, text: "Voice phishing (vishing)", isCorrect: false },
            ],
        },
        {
            text: "What does vishing refer to in the context of phishing attacks?",
            options: [
                { id: 0, text: "Fraudulent emails posing as legitimate entities", isCorrect: false },
                { id: 1, text: "Phishing attacks targeting specific individuals", isCorrect: false },
                { id: 2, text: "Fake customer service messages on social media", isCorrect: false },
                { id: 3, text: "Fraudulent phone calls or voice messages", isCorrect: true },
            ],
        },
        {
            text: "What is spear phishing, and why is it considered a significant threat?",
            options: [
                { id: 0, text: "Targeting specific individuals with customized communications; it is the result of successful phishing", isCorrect: true },
                { id: 1, text: "Broadcasting phishing messages widely to a large audience", isCorrect: false },
                { id: 2, text: "Attacking high-level executives in an organization", isCorrect: false },
                { id: 3, text: "Sending fraudulent emails from Microsoft", isCorrect: false },
            ],
        },
        {
            text: "How can organizations mitigate phishing attacks, according to the article?",
            options: [
                { id: 0, text: "Post contact information online for transparency", isCorrect: false },
                { id: 1, text: "Use common email naming conventions for easy recognition", isCorrect: false },
                { id: 2, text: "Deploy tiered security solutions, conduct regular training, and avoid posting contact information online", isCorrect: true },
                { id: 3, text: "Rely solely on email for communication", isCorrect: false },
            ],
        },
        {
            text: "What is whaling in the context of phishing attacks?",
            options: [
                { id: 0, text: "Attacks targeting a wide audience", isCorrect: false },
                { id: 1, text: "Targeting specific individuals with customized communications", isCorrect: false },
                { id: 2, text: "Attacks specifically focused on CEOs or high-level executives", isCorrect: true },
                { id: 3, text: "Broadcasting phishing messages on social media", isCorrect: false },
            ],
        },
        {
            text: "What is SMS phishing, also known as SMiShing?",
            options: [
                { id: 0, text: "Fraudulent phone calls or voice messages", isCorrect: false },
                { id: 1, text: "Email attacks with the purpose of eliciting a response", isCorrect: false },
                { id: 2, text: "Text message phishing, often portraying a known coworker or sending random messages", isCorrect: true },
                { id: 3, text: "Attacks involving fake customer service agents on social media", isCorrect: false },
            ],
        },
        {
            text: "What is the purpose of deploying secure messaging platforms, as mentioned in the article?",
            options: [
                { id: 0, text: "To increase the volume of emails for communication", isCorrect: false },
                { id: 1, text: "To reduce the overall dependency on email and mitigate phishing attacks", isCorrect: true },
                { id: 2, text: "To create unique email address conventions", isCorrect: false },
                { id: 3, text: "To conduct regular training and anti-phishing strategies", isCorrect: false },
            ],
        },
        {
            text: "Why is angler phishing different from vishing?",
            options: [
                { id: 0, text: "It targets specific individuals instead of a wide group of people", isCorrect: false },
                { id: 1, text: "It involves fraudulent phone calls or voice messages", isCorrect: false },
                { id: 2, text: "It uses direct messaging on social media instead of phone calls", isCorrect: true },
                { id: 3, text: "It specifically targets CEOs or high-level executives", isCorrect: false },
            ],
        },
        {
            text: "What is the primary aim of malicious recon emails, as mentioned in the article?",
            options: [
                { id: 0, text: "To obtain monetary gain through intimidation", isCorrect: false },
                { id: 1, text: "To impersonate trusted internal employees or vendors", isCorrect: false },
                { id: 2, text: "To elicit responses for extracting sensitive user or organizational data", isCorrect: true },
                { id: 3, text: "To compromise cloud email accounts", isCorrect: false },
            ],
        },
        {
            text: "How do attackers typically gain access to cloud email accounts, such as Microsoft 365, in phishing campaigns?",
            options: [
                { id: 0, text: "Sending fake emails from Microsoft", isCorrect: false },
                { id: 1, text: "Broadcasting phishing messages widely to a large audience", isCorrect: false },
                { id: 2, text: "Creating fake customer service accounts on social media", isCorrect: false },
                { id: 3, text: "Using a fake email requesting login information for password reset or account issues", isCorrect: true },
            ],
        },
        {
            text: "What is the significance of deploying spam call-blocking software in the context of vishing?",
            options: [
                { id: 0, text: "It prevents phishing attacks targeting CEOs", isCorrect: false },
                { id: 1, text: "It helps block fraudulent phone calls or voice messages", isCorrect: true },
                { id: 2, text: "It increases the volume of legitimate calls", isCorrect: false },
                { id: 3, text: "It mitigates the impact of malicious recon emails", isCorrect: false },
            ],
        },
        {
            text: "How does angler phishing differ from spear phishing?",
            options: [
                { id: 0, text: "Angler phishing targets a specific individual, while spear phishing targets a wide group of people", isCorrect: false },
                { id: 1, text: "Angler phishing involves fraudulent phone calls, while spear phishing uses email communication", isCorrect: false },
                { id: 2, text: "Angler phishing uses direct messaging on social media, while spear phishing targets specific individuals through customized communication", isCorrect: true },
                { id: 3, text: "Angler phishing and spear phishing are synonymous terms", isCorrect: false },
            ],
        },
        {
            text: "In the context of phishing attacks, what is 'SMiShing'?",
            options: [
                { id: 0, text: "Spear phishing attacks using customized messages", isCorrect: false },
                { id: 1, text: "Fraudulent phone calls or voice messages", isCorrect: false },
                { id: 2, text: "Email attacks with the purpose of eliciting a response", isCorrect: false },
                { id: 3, text: "Text message phishing, often portraying a known coworker or sending random messages", isCorrect: true },
            ],
        },
        {
            text: "What is the purpose of developing unique email address conventions, as suggested in the article?",
            options: [
                { id: 0, text: "To increase the volume of emails for communication", isCorrect: false },
                { id: 1, text: "To make email names impossible to guess on a mass scale", isCorrect: true },
                { id: 2, text: "To easily recognize common naming patterns in emails", isCorrect: false },
                { id: 3, text: "To deploy tiered security solutions for phishing protection", isCorrect: false },
            ],
        },
        {
            text: "What is the primary objective of deploying Cisco Umbrella and Cisco Secure Email Threat Defense, as mentioned in the article?",
            options: [
                { id: 0, text: "To increase the volume of emails for communication", isCorrect: false },
                { id: 1, text: "To deploy tiered security solutions for phishing protection", isCorrect: false },
                { id: 2, text: "To safeguard inboxes from phishing attacks", isCorrect: true },
                { id: 3, text: "To conduct regular training for employees", isCorrect: false },
            ],
        },
        {
            text: "How does SMS phishing (SMiShing) differ from vishing in terms of communication?",
            options: [
                { id: 0, text: "SMiShing uses fraudulent phone calls, while vishing involves text messages", isCorrect: false },
                { id: 1, text: "Vishing involves voice messages, while SMiShing uses text messages", isCorrect: true },
                { id: 2, text: "Both terms are synonymous and represent the same communication method", isCorrect: false },
                { id: 3, text: "Both use emails as the primary mode of communication", isCorrect: false },
            ],
        },
        {
            text: "According to the article, what is the purpose of conducting phishing simulations and awareness training for employees?",
            options: [
                { id: 0, text: "To increase the volume of legitimate emails", isCorrect: false },
                { id: 1, text: "To educate users on how to spot and report phishing attempts", isCorrect: true },
                { id: 2, text: "To post contact information online for transparency", isCorrect: false },
                { id: 3, text: "To develop unique email address conventions", isCorrect: false },
            ],
        },
        {
            text: "Why is whaling considered a significant concern in the realm of phishing attacks?",
            options: [
                { id: 0, text: "It involves random attacks on individuals", isCorrect: false },
                { id: 1, text: "It specifically targets CEOs or high-level executives", isCorrect: true },
                { id: 2, text: "It primarily uses email communication for phishing", isCorrect: false },
                { id: 3, text: "Whaling attacks are less sophisticated than other phishing methods", isCorrect: false },
            ],
        },
        {
            text: "How can organizations reduce the impact of phishing attacks, as suggested in the article?",
            options: [
                { id: 0, text: "Rely solely on email for communication", isCorrect: false },
                { id: 1, text: "Deploy tiered security solutions, conduct regular training, and avoid posting contact information online", isCorrect: true },
                { id: 2, text: "Increase the volume of emails for communication", isCorrect: false },
                { id: 3, text: "Use common email naming conventions for easy recognition", isCorrect: false },
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
            <h1>Article 2 Quiz</h1>

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
