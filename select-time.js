const STORAGE_SELECTED_KEY = 'powerfix-selection';

const setSelectionMessage = (message, type = 'info') => {
    const messageElement = document.getElementById('selection-message');
    if (!messageElement) {
        return;
    }

    messageElement.textContent = message;
    messageElement.classList.remove('info', 'error', 'success');
    messageElement.classList.add('visible', type);

    window.clearTimeout(setSelectionMessage.timeoutId);
    setSelectionMessage.timeoutId = window.setTimeout(() => {
        messageElement.classList.remove('visible');
    }, 3500);
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const chargerId = params.get('charger');

    if (!chargerId) {
        window.location.href = 'index.html';
        return;
    }

    const titleElement = document.querySelector('.charger-highlight');
    if (titleElement) {
        titleElement.textContent = `Carregador ${chargerId}`;
    }

    const timeOptionButtons = document.querySelectorAll('.time-option-btn');
    timeOptionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const time = button.dataset.time;
            const price = button.dataset.price;

            localStorage.setItem(
                STORAGE_SELECTED_KEY,
                JSON.stringify({
                    chargerId,
                    time,
                    price,
                    selectedAt: new Date().toISOString(),
                })
            );

            window.location.href = `payment.html?charger=${chargerId}&time=${time}&price=${price}`;
        });
    });

    setSelectionMessage('Escolha o tempo de carga ideal para você.', 'info');

    const backButton = document.querySelector('.back-btn');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
