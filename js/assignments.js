function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    if (page === 'assignments') {
        mainContent.innerHTML = `
            <div class="assignments">
                <h2>Assignments</h2>
                <div class="assignment-card">
                    <h3>Assignment 1: Write a Python script</h3>
                    <p>Write a Python script that prints "Hello, World!".</p>
                    <textarea id="assignment1" rows="10" cols="50"></textarea><br><br>
                    <button onclick="submitAssignment('assignment1')">Submit</button>
                </div>
                <div class="assignment-card">
                    <h3>Assignment 2: Data Analysis</h3>
                    <p>Analyze the given data set and provide insights.</p>
                    <textarea id="assignment2" rows="10" cols="50"></textarea><br><br>
                    <button onclick="submitAssignment('assignment2')">Submit</button>
                </div>
            </div>
        `;
    }
}

function submitAssignment(assignmentId) {
    const assignmentContent = document.getElementById(assignmentId).value;
    alert(`Assignment submitted: ${assignmentContent}`);
}
