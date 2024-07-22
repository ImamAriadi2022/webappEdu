function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    if (page === 'quizzes') {
        mainContent.innerHTML = `
            <div class="quizzes">
                <h2>Quizzes</h2>
                <div class="quiz-card">
                    <h3>Quiz 1: Basic Python</h3>
                    <p>What is the output of print(2 + 3)?</p>
                    <button onclick="checkAnswer('quiz1', '5')">5</button>
                    <button onclick="checkAnswer('quiz1', '23')">23</button>
                    <button onclick="checkAnswer('quiz1', '6')">6</button>
                </div>
                <div class="quiz-card">
                    <h3>Quiz 2: Data Types</h3>
                    <p>What is the data type of "Hello, World!" in Python?</p>
                    <button onclick="checkAnswer('quiz2', 'String')">String</button>
                    <button onclick="checkAnswer('quiz2', 'Integer')">Integer</button>
                    <button onclick="checkAnswer('quiz2', 'List')">List</button>
                </div>
            </div>
        `;
    }
}

function checkAnswer(quizId, answer) {
    let feedback = '';
    if (quizId === 'quiz1' && answer === '5') {
        feedback = 'Correct!';
    } else if (quizId === 'quiz2' && answer === 'String') {
        feedback = 'Correct!';
    } else {
        feedback = 'Incorrect. Please try again.';
    }
    alert(feedback);
}
