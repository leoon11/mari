document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('birthday-message');
    message.classList.add('animate-text');

    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', () => {
        window.location.href = 'letter.html';
    });
});
