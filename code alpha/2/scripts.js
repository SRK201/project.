// Sample social media data (you would replace this with actual API calls)
const socialMediaFeeds = [
    { platform: 'Twitter', content: 'Tweet 1' },
    { platform: 'Instagram', content: 'Photo from Instagram' },
    // Add more social media feeds here
];

document.getElementById('loginBtn').addEventListener('click', () => openLoginModal());

function openLoginModal() {
    const loginModal = document.createElement('div');
    loginModal.classList.add('login-modal');

    const loginForm = document.createElement('div');
    loginForm.classList.add('login-form');
    loginForm.innerHTML = `
        <h2>Login</h2>
        <!-- Add your login form fields here -->

        <button onclick="closeLoginModal()">Close</button>
    `;

    loginModal.appendChild(loginForm);
    document.body.appendChild(loginModal);
}

function closeLoginModal() {
    const loginModal = document.querySelector('.login-modal');
    loginModal.parentNode.removeChild(loginModal);
}

function displayFeeds() {
    const feedsSection = document.getElementById('feeds');
    feedsSection.innerHTML = '';

    socialMediaFeeds.forEach(feed => {
        const feedCard = document.createElement('div');
        feedCard.classList.add('feed-card');
        feedCard.innerHTML = `
            <h3>${feed.platform}</h3>
            <p>${feed.content}</p>
        `;
        feedsSection.appendChild(feedCard);
    });
}

// Initialize the page
displayFeeds();
