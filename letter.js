document.addEventListener('DOMContentLoaded', () => {
    const closedLetter = document.getElementById('closed-letter');
    const hiddenMessage = document.getElementById('hidden-message');

    closedLetter.addEventListener('click', () => {
        hiddenMessage.classList.remove('hidden');
        closedLetter.style.display = 'none';
    });
});
