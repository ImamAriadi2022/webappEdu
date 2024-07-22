document.addEventListener('DOMContentLoaded', function () {
    navigate('home');
});

function navigate(page) {
    const mainContent = document.getElementById('main-content');
    if (page === 'home') {
        mainContent.innerHTML = `
            <div class="home">
                <h1>Welcome to the Online Course App</h1>
                ${courseCard('Python 101', 'Beginner')}
                ${courseCard('Data Science', 'Advanced')}
            </div>
        `;
    } else {
        fetch(`js/${page}.js`)
            .then(response => response.text())
            .then(script => {
                eval(script);
                loadPage(page);
            });
    }
}

function courseCard(title, level) {
    return `
        <div class="course-card">
            <h2>${title}</h2>
            <p>${level}</p>
            <button>Enroll Now</button>
        </div>
    `;
}
