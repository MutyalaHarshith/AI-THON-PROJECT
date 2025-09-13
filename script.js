document.addEventListener('DOMContentLoaded', () => {
    const codeTextarea = document.getElementById('code-textarea');
    const analyzeBtn = document.getElementById('analyze-btn');
    const explainBtn = document.getElementById('explain-btn');
    const detectErrorsBtn = document.getElementById('detect-errors-btn');
    const generateExerciseBtn = document.getElementById('generate-exercise-btn');
    const difficultySelect = document.getElementById('difficulty-select');
    const tutorialBtn = document.getElementById('tutorial-btn');
    const backBtn = document.getElementById('back-btn');
    const output = document.getElementById('output');
    const codeInputSection = document.getElementById('code-input');
    const resultsSection = document.getElementById('results');
    const tutorialsSection = document.getElementById('tutorials');
    const tutorialContent = document.getElementById('tutorial-content');

    let currentTutorialIndex = 0;
    let lastGeneratedExercise = null;
    let tutorialProgress = JSON.parse(localStorage.getItem('tutorialProgress')) || {};

    // Analyze Code
    analyzeBtn.addEventListener('click', () => {
        const code = codeTextarea.value;
        if (!code) {
            output.textContent = 'Please enter some code to analyze.';
            return;
        }
        output.textContent = analyzeCode(code);
    });

    // Explain Code
    explainBtn.addEventListener('click', () => {
        const code = codeTextarea.value;
        if (!code) {
            output.textContent = 'Please enter some code to explain.';
            return;
        }
        output.textContent = explainCode(code);
    });

    // Detect Errors
    detectErrorsBtn.addEventListener('click', () => {
        const code = codeTextarea.value;
        if (!code) {
            output.textContent = 'Please enter some code to check for errors.';
            return;
        }
        output.textContent = detectErrors(code);
    });

    // Generate Exercise
    generateExerciseBtn.addEventListener('click', () => {
        const difficulty = difficultySelect.value;
        lastGeneratedExercise = generateExercise(difficulty);
        output.textContent = lastGeneratedExercise;
    });

    // Validate Exercise Solution
    const validateExerciseBtn = document.getElementById('validate-exercise-btn');
    validateExerciseBtn.addEventListener('click', () => {
        const userCode = codeTextarea.value;
        if (!userCode) {
            output.textContent = 'Please enter your solution code to validate.';
            return;
        }
        if (!lastGeneratedExercise) {
            output.textContent = 'Please generate an exercise first.';
            return;
        }
        const validation = validateExerciseSolution(lastGeneratedExercise, userCode);
        if (validation) {
            output.textContent = Exercise Validation:\n${validation.feedback};
        } else {
            output.textContent = 'Unable to validate this exercise. Please try generating a new one.';
        }
    });

    // View Tutorials
    tutorialBtn.addEventListener('click', () => {
        codeInputSection.style.display = 'none';
        resultsSection.style.display = 'none';
        tutorialsSection.style.display = 'block';
        loadTutorial(currentTutorialIndex);
    });

    // Back to Main
    backBtn.addEventListener('click', () => {
        tutorialsSection.style.display = 'none';
        codeInputSection.style.display = 'block';
        resultsSection.style.display = 'block';
    });

    function loadTutorial(index) {
        const tutorial = getTutorial(index);
        if (!tutorial) {
            tutorialContent.innerHTML = '<p>No more tutorials available.</p>';
            return;
        }
        let html = <h3>${tutorial.title}</h3><pre><code>${tutorial.codeExample}</code></pre><ol>;
        tutorial.steps.forEach(step => {
            html += <li>${step}</li>;
        });
        html += '</ol>';

        // Add quiz section
        if (tutorial.quiz && tutorial.quiz.length > 0) {
            html += '<h4>Quiz</h4><form id="quiz-form">';
            tutorial.quiz.forEach((q, i) => {
                html += <p>${q.question}</p>;
                q.options.forEach((option, idx) => {
                    html += <label><input type="radio" name="q${i}" value="${idx}"> ${option}</label><br>;
                });
            });
            html += '<button type="submit">Submit Answers</button></form><div id="quiz-feedback"></div>';
        }

        html += '<div id="tutorial-navigation">';
        if (index > 0) {
            html += '<button id="prev-tutorial">Previous</button>';
        }
        if (index < tutorials.length - 1) {
            html += '<button id="next-tutorial">Next</button>';
        }
        html += '</div>';
        tutorialContent.innerHTML = html;

        // Quiz form submission handler
        const quizForm = document.getElementById('quiz-form');
        if (quizForm) {
            quizForm.addEventListener('submit', (e) => {
                e.preventDefault();
                let score = 0;
                const total = tutorial.quiz.length;
                tutorial.quiz.forEach((q, i) => {
                    const selected = quizForm[q${i}].value;
                    if (parseInt(selected) === q.correct) {
                        score++;
                    }
                });
                const feedbackDiv = document.getElementById('quiz-feedback');
                feedbackDiv.textContent = You scored ${score} out of ${total}.;
            });
        }

        // Add event listeners for navigation
        const prevBtn = document.getElementById('prev-tutorial');
        const nextBtn = document.getElementById('next-tutorial');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentTutorialIndex--;
                loadTutorial(currentTutorialIndex);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentTutorialIndex++;
                loadTutorial(currentTutorialIndex);
            });
        }
    }
});
