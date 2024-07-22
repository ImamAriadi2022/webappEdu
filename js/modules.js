function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    if (page === 'modules') {
        mainContent.innerHTML = `
            <div class="modules">
                <h2>Course Modules</h2>
                <div class="course-card">
                    <h2>Module 1: Introduction</h2>
                    <p>Beginner Level</p>
                    <a href="modules/module1.html" target="_blank">
                        <button>Open Module</button>
                    </a>
                </div>
                <div class="course-card">
                    <h2>Module 2: Advanced Topics</h2>
                    <p>Advanced Level</p>
                    <a href="modules/module2.html" target="_blank">
                        <button>Open Module</button>
                    </a>
                </div>
            </div>
        `;
    }
}
