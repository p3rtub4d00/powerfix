const STORAGE_KEY = 'powerfix-chargers';
const STORAGE_SELECTED_KEY = 'powerfix-selection';

const setStatusMessage = (message, type = 'info') => {
    const statusMessage = document.getElementById('status-message');
    if (!statusMessage) {
        return;
    }

    statusMessage.textContent = message;
    statusMessage.classList.remove('info', 'error', 'success');
    statusMessage.classList.add('visible', type);

    window.clearTimeout(setStatusMessage.timeoutId);
    setStatusMessage.timeoutId = window.setTimeout(() => {
        statusMessage.classList.remove('visible');
    }, 4000);
};

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

const setPaymentMessage = (message, type = 'info') => {
    const messageElement = document.getElementById('payment-message');
    if (!messageElement) {
        return;
    }

    messageElement.textContent = message;
    messageElement.classList.remove('info', 'error', 'success');
    messageElement.classList.add('visible', type);

    window.clearTimeout(setPaymentMessage.timeoutId);
    setPaymentMessage.timeoutId = window.setTimeout(() => {
        messageElement.classList.remove('visible');
    }, 3500);
};

const formatPrice = (price) => {
    if (!price) {
        return '-';
    }
    const numericPrice = Number(price).toFixed(2);
    return `R$ ${numericPrice.replace('.', ',')}`;
};

const loadChargerData = async () => {
    const cachedData = localStorage.getItem(STORAGE_KEY);
    if (cachedData) {
        return JSON.parse(cachedData);
    }

    const response = await fetch('data/chargers.json');
    const chargers = await response.json();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chargers));
    return chargers;
};

const renderChargers = (chargers, onSelect) => {
    const grid = document.getElementById('chargers-grid');
    if (!grid) {
        return;
    }

    grid.innerHTML = '';

    chargers.forEach((charger) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = `charger-card ${charger.status}`;
        card.dataset.chargerId = charger.id;
        card.setAttribute('aria-pressed', 'false');
        card.innerHTML = `
            <span class="charger-icon" aria-hidden="true">⚡</span>
            <div class="charger-number">Carregador ${charger.id}</div>
            <div class="status-text">
                <span class="status-indicator"></span>
                ${charger.status === 'available' ? 'Disponível' : 'Ocupado'}
            </div>
        `;

        card.addEventListener('click', () => onSelect(charger));

        grid.appendChild(card);
    });
};

const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return;
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
};

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return;
    }

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
};

const init = async () => {
    const state = {
        chargerId: null,
        time: null,
        price: null,
    };

    let paymentCountdownInterval = null;
    let confirmationCountdownInterval = null;

    const selectedCharger = document.getElementById('selected-charger');
    const summaryCharger = document.getElementById('summary-charger');
    const summaryTime = document.getElementById('summary-time');
    const summaryPrice = document.getElementById('summary-price');
    const countdownElement = document.getElementById('countdown');
    const redirectCountdown = document.getElementById('redirect-countdown');

    const updatePaymentSummary = () => {
        if (summaryCharger) {
            summaryCharger.textContent = state.chargerId ? `Carregador ${state.chargerId}` : '-';
        }
        if (summaryTime) {
            summaryTime.textContent = state.time ? `${state.time} minutos` : '-';
        }
        if (summaryPrice) {
            summaryPrice.textContent = formatPrice(state.price);
        }
    };

    const startPaymentCountdown = () => {
        let countdownSeconds = 5 * 60;

        const updateCountdown = () => {
            const minutes = Math.floor(countdownSeconds / 60);
            const seconds = countdownSeconds % 60;
            if (countdownElement) {
                countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
                    .toString()
                    .padStart(2, '0')}`;
            }

            if (countdownSeconds <= 0) {
                clearInterval(paymentCountdownInterval);
                paymentCountdownInterval = null;
                setPaymentMessage('Tempo para pagamento esgotado! Por favor, tente novamente.', 'error');
                window.setTimeout(() => {
                    closeModal('payment-modal');
                }, 1500);
            } else {
                countdownSeconds--;
            }
        };

        if (paymentCountdownInterval) {
            clearInterval(paymentCountdownInterval);
        }

        paymentCountdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    };

    const stopPaymentCountdown = () => {
        if (paymentCountdownInterval) {
            clearInterval(paymentCountdownInterval);
            paymentCountdownInterval = null;
        }
    };

    const startConfirmationCountdown = () => {
        let secondsLeft = 8;

        const updateCountdown = () => {
            if (redirectCountdown) {
                redirectCountdown.textContent = secondsLeft.toString();
            }

            if (secondsLeft <= 0) {
                clearInterval(confirmationCountdownInterval);
                confirmationCountdownInterval = null;
                closeModal('confirmation-modal');
                setStatusMessage('Carregamento em andamento. Aproveite!', 'success');
            }

            secondsLeft--;
        };

        if (confirmationCountdownInterval) {
            clearInterval(confirmationCountdownInterval);
        }

        confirmationCountdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    };

    const resetState = () => {
        state.chargerId = null;
        state.time = null;
        state.price = null;
        updatePaymentSummary();
        stopPaymentCountdown();
    };

    const handleChargerSelection = (charger) => {
        if (charger.status !== 'available') {
            setStatusMessage('Este carregador está ocupado. Por favor, escolha um disponível.', 'error');
            return;
        }

        state.chargerId = charger.id;
        state.time = null;
        state.price = null;

        localStorage.setItem(
            STORAGE_SELECTED_KEY,
            JSON.stringify({
                chargerId: charger.id,
                selectedAt: new Date().toISOString(),
            })
        );

        if (selectedCharger) {
            selectedCharger.textContent = `Carregador ${charger.id}`;
        }

        updatePaymentSummary();
        setSelectionMessage('Escolha o tempo de carga ideal para você.', 'info');
        openModal('time-modal');
    };

    const timeOptionButtons = document.querySelectorAll('.time-option-btn');
    timeOptionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const time = button.dataset.time;
            const price = button.dataset.price;

            state.time = time;
            state.price = price;

            localStorage.setItem(
                STORAGE_SELECTED_KEY,
                JSON.stringify({
                    chargerId: state.chargerId,
                    time,
                    price,
                    selectedAt: new Date().toISOString(),
                })
            );

            updatePaymentSummary();
            closeModal('time-modal');
            openModal('payment-modal');
            setPaymentMessage('Aguardando pagamento...', 'info');
            startPaymentCountdown();
        });
    });

    const simulateButton = document.getElementById('simulate-payment-btn');
    if (simulateButton) {
        simulateButton.addEventListener('click', () => {
            stopPaymentCountdown();
            setPaymentMessage('Pagamento simulado com sucesso! Aguarde...', 'success');
            closeModal('payment-modal');
            openModal('confirmation-modal');
            startConfirmationCountdown();
        });
    }

    const closeButtons = document.querySelectorAll('[data-close]');
    closeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const target = event.currentTarget.getAttribute('data-close');
            if (!target) {
                return;
            }

            if (target === 'payment-modal') {
                stopPaymentCountdown();
            }

            if (target === 'confirmation-modal') {
                if (confirmationCountdownInterval) {
                    clearInterval(confirmationCountdownInterval);
                    confirmationCountdownInterval = null;
                }
            }

            closeModal(target);
            if (target === 'time-modal') {
                resetState();
            }
        });
    });

    try {
        const chargers = await loadChargerData();
        renderChargers(chargers, handleChargerSelection);
        setStatusMessage('Carregadores carregados com sucesso!', 'success');
    } catch (error) {
        setStatusMessage('Não foi possível carregar os carregadores. Tente novamente.', 'error');
        console.error('Erro ao carregar carregadores:', error);
    }
};

document.addEventListener('DOMContentLoaded', init);
