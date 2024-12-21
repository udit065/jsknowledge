import React, { useState, useEffect } from "react";
import "./QuizComponent.css"; // Assume CSS for styling

const QuizComponent = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        fetch("data/QuizComponent.json")
            .then((res) => res.json())
            .then((item) => setData(item));
    }, []);

    const currentQuestion =
        data.length > 0 ? data[0]?.questions[currentIndex] : null;

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (option === currentQuestion.answer[0]) {
            setFeedback("correct");
        } else {
            setFeedback("incorrect");
        }
    };

    const handleCopyCode = () => {
        if (currentQuestion) {
            navigator.clipboard.writeText(currentQuestion.question);
            alert("Code copied to clipboard!");
        }
    };

    const handleNext = () => {
        setSelectedOption(null);
        setFeedback(null);
        setCurrentIndex((prevIndex) =>
            prevIndex < data[0]?.questions.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const handlePrevious = () => {
        setSelectedOption(null);
        setFeedback(null);
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    if (!currentQuestion) {
        return <div>Loading...</div>;
    }

    return (
        <div className="quiz-container">
            <h2>{data[0]?.category}</h2>
            <div className="code-section">
                <pre className="code-block">{currentQuestion.question}</pre>
                <button className="copy-button" onClick={handleCopyCode}>
                    Copy
                </button>
            </div>

            <ul className="options">
                {currentQuestion.options.map((option, index) => (
                    <li
                        key={index}
                        className={`option-item ${selectedOption === option[0]
                            ? feedback === "correct" &&
                                option[0] === currentQuestion.answer[0]
                                ? "correct"
                                : "incorrect"
                            : ""
                            }`}
                        onClick={() => handleOptionClick(option[0])}
                    >
                        {option}
                    </li>
                ))}
            </ul>

            {selectedOption && feedback === "correct" && (
                <div className="answer-section">
                    <p>
                        <strong>Correct! Answer: {currentQuestion.answer}</strong>
                    </p>
                    <p>
                        <strong>Explanation:</strong> {currentQuestion.explanation}
                    </p>
                </div>
            )}

            {selectedOption && feedback === "incorrect" && (
                <div className="answer-section">
                    <p>
                        <strong>Incorrect. Try again!</strong>
                    </p>
                </div>
            )}

            <div className="navigation-buttons">
                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="prev-button"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === data[0]?.questions.length - 1}
                    className="next-button"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default QuizComponent;
