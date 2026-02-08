document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('redirect-countdown');
    let remainingSeconds = 8;

    const updateCountdown = () => {
        if (countdownElement) {
            countdownElement.textContent = remainingSeconds.toString();
        }

        if (remainingSeconds <= 0) {
            window.location.href = 'index.html';
            return;
        }

        remainingSeconds -= 1;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
