const STORAGE_KEY = 'powerfix-chargers';
const STORAGE_SELECTED_KEY = 'powerfix-selection';
const IDLE_TIMEOUT_MS = 90000;

const translations = {
    pt: {
        subtitle: 'Sua energia rápida, onde você estiver!',
        instruction: 'Escolha um carregador disponível para começar.',
        availability: 'Disponíveis agora: <span id="available-count">{count}</span>',
        chargersTitle: 'Carregadores',
        realtime: 'Tempo real',
        selectedCharger: 'Você selecionou o <span class="charger-highlight" id="selected-charger">Carregador {id}</span>',
        timePrompt: 'Quanto tempo de carga você precisa?',
        fastCharge: 'Carga Rápida (10 min)',
        standardCharge: 'Carga Padrão (25 min)',
        valueCharge: 'Carga Vantagem (50 min)',
        back: '← Voltar',
        paymentTitle: 'Efetue o Pagamento',
        paymentPrompt: 'Escaneie o código abaixo para iniciar a recarga.',
        summaryTitle: 'Resumo da recarga',
        summaryCharger: 'Carregador:',
        summaryTime: 'Tempo:',
        summaryPrice: 'Valor:',
        paymentTimer: 'Você tem <span id="countdown">{time}</span> para realizar o pagamento.',
        simulatePayment: 'Simular Pagamento Aprovado',
        approvedTitle: 'Pagamento Aprovado!',
        approvedSubtitle: 'Seu carregamento foi iniciado.',
        chargingRemaining: 'Tempo restante: <span id="charging-remaining">{time}</span>',
        redirectCountdown: 'Você será redirecionado em <span id="redirect-countdown">{seconds}</span> segundos...',
        endSession: 'Encerrar sessão',
        statusAvailable: 'Disponível',
        statusOccupied: 'Ocupado',
        statusReserved: 'Reservado',
        statusMaintenance: 'Manutenção',
        etaAvailable: 'Disponível agora',
        etaOccupied: 'Livre em ~{minutes} min',
        etaReserved: 'Reserva ativa',
        etaMaintenance: 'Em manutenção',
        summaryLabel: 'Resumo: Carregador {id} • {time} • {price}',
        statusLoaded: 'Carregadores carregados com sucesso!',
        statusLoadError: 'Não foi possível carregar os carregadores. Tente novamente.',
        statusUnavailable: 'Este carregador está ocupado. Por favor, escolha um disponível.',
        selectionHint: 'Escolha o tempo de carga ideal para você.',
        paymentWaiting: 'Aguardando pagamento...',
        paymentExpired: 'Tempo para pagamento esgotado! Por favor, tente novamente.',
        paymentSuccess: 'Pagamento simulado com sucesso! Aguarde...',
        idleMessage: 'Sessão reiniciada por inatividade.',
        chargingDone: 'Carregamento em andamento. Aproveite!',
        chargerName: 'Carregador {id}',
        minutesLabel: '{time} minutos'
    },
    en: {
        subtitle: 'Fast energy, wherever you are!',
        instruction: 'Choose an available charger to begin.',
        availability: 'Available now: <span id="available-count">{count}</span>',
        chargersTitle: 'Chargers',
        realtime: 'Real-time',
        selectedCharger: 'You selected <span class="charger-highlight" id="selected-charger">Charger {id}</span>',
        timePrompt: 'How long do you need to charge?',
        fastCharge: 'Quick Charge (10 min)',
        standardCharge: 'Standard Charge (25 min)',
        valueCharge: 'Value Charge (50 min)',
        back: '← Back',
        paymentTitle: 'Complete Payment',
        paymentPrompt: 'Scan the code below to start charging.',
        summaryTitle: 'Charge summary',
        summaryCharger: 'Charger:',
        summaryTime: 'Time:',
        summaryPrice: 'Price:',
        paymentTimer: 'You have <span id="countdown">{time}</span> to complete payment.',
        simulatePayment: 'Simulate Approved Payment',
        approvedTitle: 'Payment Approved!',
        approvedSubtitle: 'Your charging session has started.',
        chargingRemaining: 'Time remaining: <span id="charging-remaining">{time}</span>',
        redirectCountdown: 'You will be redirected in <span id="redirect-countdown">{seconds}</span> seconds...',
        endSession: 'End session',
        statusAvailable: 'Available',
        statusOccupied: 'Occupied',
        statusReserved: 'Reserved',
        statusMaintenance: 'Maintenance',
        etaAvailable: 'Available now',
        etaOccupied: 'Free in ~{minutes} min',
        etaReserved: 'Reservation active',
        etaMaintenance: 'Under maintenance',
        summaryLabel: 'Summary: Charger {id} • {time} • {price}',
        statusLoaded: 'Chargers loaded successfully!',
        statusLoadError: 'Unable to load chargers. Please try again.',
        statusUnavailable: 'This charger is occupied. Please choose an available one.',
        selectionHint: 'Choose the ideal charging time for you.',
        paymentWaiting: 'Waiting for payment...',
        paymentExpired: 'Payment time expired! Please try again.',
        paymentSuccess: 'Payment simulated successfully! Please wait...',
        idleMessage: 'Session reset due to inactivity.',
        chargingDone: 'Charging in progress. Enjoy!',
        chargerName: 'Charger {id}',
        minutesLabel: '{time} min'
    },
    es: {
        subtitle: 'Energía rápida, donde estés.',
        instruction: 'Elige un cargador disponible para comenzar.',
        availability: 'Disponibles ahora: <span id="available-count">{count}</span>',
        chargersTitle: 'Cargadores',
        realtime: 'Tiempo real',
        selectedCharger: 'Has seleccionado <span class="charger-highlight" id="selected-charger">Cargador {id}</span>',
        timePrompt: '¿Cuánto tiempo necesitas cargar?',
        fastCharge: 'Carga Rápida (10 min)',
        standardCharge: 'Carga Estándar (25 min)',
        valueCharge: 'Carga Ventaja (50 min)',
        back: '← Volver',
        paymentTitle: 'Realizar Pago',
        paymentPrompt: 'Escanea el código para iniciar la carga.',
        summaryTitle: 'Resumen de carga',
        summaryCharger: 'Cargador:',
        summaryTime: 'Tiempo:',
        summaryPrice: 'Precio:',
        paymentTimer: 'Tienes <span id="countdown">{time}</span> para completar el pago.',
        simulatePayment: 'Simular Pago Aprobado',
        approvedTitle: '¡Pago Aprobado!',
        approvedSubtitle: 'Tu carga ha comenzado.',
        chargingRemaining: 'Tiempo restante: <span id="charging-remaining">{time}</span>',
        redirectCountdown: 'Serás redirigido en <span id="redirect-countdown">{seconds}</span> segundos...',
        endSession: 'Finalizar sesión',
        statusAvailable: 'Disponible',
        statusOccupied: 'Ocupado',
        statusReserved: 'Reservado',
        statusMaintenance: 'Mantenimiento',
        etaAvailable: 'Disponible ahora',
        etaOccupied: 'Libre en ~{minutes} min',
        etaReserved: 'Reserva activa',
        etaMaintenance: 'En mantenimiento',
        summaryLabel: 'Resumen: Cargador {id} • {time} • {price}',
        statusLoaded: '¡Cargadores cargados con éxito!',
        statusLoadError: 'No se pudieron cargar los cargadores. Inténtalo nuevamente.',
        statusUnavailable: 'Este cargador está ocupado. Elige uno disponible.',
        selectionHint: 'Elige el tiempo de carga ideal para ti.',
        paymentWaiting: 'Esperando pago...',
        paymentExpired: '¡Tiempo de pago agotado! Inténtalo nuevamente.',
        paymentSuccess: '¡Pago simulado con éxito! Espera...',
        idleMessage: 'Sesión reiniciada por inactividad.',
        chargingDone: 'Carga en curso. ¡Disfruta!',
        chargerName: 'Cargador {id}',
        minutesLabel: '{time} minutos'
    }
};

let currentLang = 'pt';

const t = (key, params = {}) => {
    const entry = translations[currentLang]?.[key] || translations.pt[key] || '';
    return Object.entries(params).reduce(
        (text, [paramKey, value]) => text.replaceAll(`{${paramKey}}`, value),
        entry
    );
};

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

const getEtaMinutes = (chargerId) => ((chargerId * 7) % 11) + 5;

const getStatusLabels = (status, chargerId) => {
    if (status === 'available') {
        return { label: t('statusAvailable'), eta: t('etaAvailable') };
    }
    if (status === 'reserved') {
        return { label: t('statusReserved'), eta: t('etaReserved') };
    }
    if (status === 'maintenance') {
        return { label: t('statusMaintenance'), eta: t('etaMaintenance') };
    }

    return {
        label: t('statusOccupied'),
        eta: t('etaOccupied', { minutes: getEtaMinutes(chargerId) })
    };
};

const renderChargers = (chargers, onSelect) => {
    const grid = document.getElementById('chargers-grid');
    if (!grid) {
        return;
    }

    grid.innerHTML = '';

    chargers.forEach((charger) => {
        const card = document.createElement('button');
        const { label, eta } = getStatusLabels(charger.status, charger.id);
        card.type = 'button';
        card.className = `charger-card ${charger.status}`;
        card.dataset.chargerId = charger.id;
        card.setAttribute('aria-pressed', 'false');
        card.innerHTML = `
            <span class="charger-icon" aria-hidden="true">⚡</span>
            <div class="charger-number">${t('chargerName', { id: charger.id })}</div>
            <div class="status-text">
                <span class="status-indicator"></span>
                <span class="status-label">${label}</span>
            </div>
            <div class="eta-text">${eta}</div>
        `;

        card.addEventListener('click', () => onSelect(charger));

        grid.appendChild(card);
    });

    const availableCount = chargers.filter((charger) => charger.status === 'available').length;
    const availabilityElement = document.querySelector('[data-i18n="availability"]');
    if (availabilityElement) {
        availabilityElement.innerHTML = t('availability', { count: availableCount });
    }
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

const updateTranslations = () => {
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (key) {
            node.innerHTML = t(key, { time: '05:00', seconds: '8', id: 'X', count: '0' });
        }
    });
};

const updateLanguageButtons = () => {
    document.querySelectorAll('.lang-btn').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.lang === currentLang);
    });
};

const init = async () => {
    const state = {
        chargerId: null,
        time: null,
        price: null,
        chargingSeconds: null,
        chargingTotal: null,
    };

    let paymentCountdownInterval = null;
    let confirmationCountdownInterval = null;
    let chargingInterval = null;
    let idleTimeoutId = null;
    let cachedChargers = [];

    const selectedCharger = document.getElementById('selected-charger');
    const summaryCharger = document.getElementById('summary-charger');
    const summaryTime = document.getElementById('summary-time');
    const summaryPrice = document.getElementById('summary-price');
    const countdownElement = document.getElementById('countdown');
    const redirectCountdown = document.getElementById('redirect-countdown');
    const selectionSummary = document.getElementById('selection-summary');
    const chargingRemaining = document.getElementById('charging-remaining');
    const chargingProgressBar = document.getElementById('charging-progress-bar');

    const updatePaymentSummary = () => {
        if (summaryCharger) {
            summaryCharger.textContent = state.chargerId ? t('chargerName', { id: state.chargerId }) : '-';
        }
        if (summaryTime) {
            summaryTime.textContent = state.time ? t('minutesLabel', { time: state.time }) : '-';
        }
        if (summaryPrice) {
            summaryPrice.textContent = formatPrice(state.price);
        }

        if (selectionSummary) {
            if (state.chargerId && state.time && state.price) {
                selectionSummary.innerHTML = t('summaryLabel', {
                    id: state.chargerId,
                    time: t('minutesLabel', { time: state.time }),
                    price: formatPrice(state.price)
                });
                selectionSummary.classList.add('is-visible');
                selectionSummary.setAttribute('aria-hidden', 'false');
            } else {
                selectionSummary.classList.remove('is-visible');
                selectionSummary.setAttribute('aria-hidden', 'true');
            }
        }
    };

    const startPaymentCountdown = () => {
        let countdownSeconds = 5 * 60;

        const updateCountdown = () => {
            const minutes = Math.floor(countdownSeconds / 60);
            const seconds = countdownSeconds % 60;
            const formatted = `${minutes.toString().padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`;
            if (countdownElement) {
                countdownElement.textContent = formatted;
            }
            const timerLabel = document.querySelector('[data-i18n="paymentTimer"]');
            if (timerLabel) {
                timerLabel.innerHTML = t('paymentTimer', { time: formatted });
            }

            if (countdownSeconds <= 0) {
                clearInterval(paymentCountdownInterval);
                paymentCountdownInterval = null;
                setPaymentMessage(t('paymentExpired'), 'error');
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
            const redirectLabel = document.querySelector('[data-i18n="redirectCountdown"]');
            if (redirectLabel) {
                redirectLabel.innerHTML = t('redirectCountdown', { seconds: secondsLeft });
            }

            if (secondsLeft <= 0) {
                clearInterval(confirmationCountdownInterval);
                confirmationCountdownInterval = null;
                closeModal('confirmation-modal');
                setStatusMessage(t('chargingDone'), 'success');
            }

            secondsLeft--;
        };

        if (confirmationCountdownInterval) {
            clearInterval(confirmationCountdownInterval);
        }

        confirmationCountdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    };

    const startChargingCountdown = () => {
        if (!state.chargingTotal) {
            return;
        }

        const updateCharging = () => {
            if (state.chargingSeconds <= 0) {
                clearInterval(chargingInterval);
                chargingInterval = null;
                state.chargingSeconds = 0;
            } else {
                state.chargingSeconds -= 1;
            }

            const minutes = Math.floor(state.chargingSeconds / 60);
            const seconds = state.chargingSeconds % 60;
            const formatted = `${minutes.toString().padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`;

            if (chargingRemaining) {
                chargingRemaining.textContent = formatted;
            }

            const chargingLabel = document.querySelector('[data-i18n="chargingRemaining"]');
            if (chargingLabel) {
                chargingLabel.innerHTML = t('chargingRemaining', { time: formatted });
            }

            if (chargingProgressBar && state.chargingTotal) {
                const percent = ((state.chargingTotal - state.chargingSeconds) / state.chargingTotal) * 100;
                chargingProgressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
            }
        };

        if (chargingInterval) {
            clearInterval(chargingInterval);
        }

        chargingInterval = setInterval(updateCharging, 1000);
        updateCharging();
    };

    const stopChargingCountdown = () => {
        if (chargingInterval) {
            clearInterval(chargingInterval);
            chargingInterval = null;
        }
    };

    const resetState = () => {
        state.chargerId = null;
        state.time = null;
        state.price = null;
        state.chargingSeconds = null;
        state.chargingTotal = null;
        updatePaymentSummary();
        stopPaymentCountdown();
        stopChargingCountdown();
    };

    const handleChargerSelection = (charger) => {
        if (charger.status !== 'available') {
            setStatusMessage(t('statusUnavailable'), 'error');
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
            selectedCharger.textContent = t('chargerName', { id: charger.id });
        }

        const selectedTitle = document.querySelector('[data-i18n="selectedCharger"]');
        if (selectedTitle) {
            selectedTitle.innerHTML = t('selectedCharger', { id: charger.id });
        }

        updatePaymentSummary();
        setSelectionMessage(t('selectionHint'), 'info');
        openModal('time-modal');
    };

    const timeOptionButtons = document.querySelectorAll('.time-option-btn');
    timeOptionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const time = button.dataset.time;
            const price = button.dataset.price;

            state.time = time;
            state.price = price;
            state.chargingTotal = Number(time) * 60;
            state.chargingSeconds = Number(time) * 60;

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
            setPaymentMessage(t('paymentWaiting'), 'info');
            startPaymentCountdown();
        });
    });

    const simulateButton = document.getElementById('simulate-payment-btn');
    if (simulateButton) {
        simulateButton.addEventListener('click', () => {
            stopPaymentCountdown();
            setPaymentMessage(t('paymentSuccess'), 'success');
            closeModal('payment-modal');
            openModal('confirmation-modal');
            startConfirmationCountdown();
            startChargingCountdown();
        });
    }

    const endSessionButton = document.getElementById('end-session-btn');
    if (endSessionButton) {
        endSessionButton.addEventListener('click', () => {
            closeModal('confirmation-modal');
            resetState();
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
                stopChargingCountdown();
            }

            closeModal(target);
            if (target === 'time-modal') {
                resetState();
            }
        });
    });

    const resetIdleTimer = () => {
        if (idleTimeoutId) {
            window.clearTimeout(idleTimeoutId);
        }

        idleTimeoutId = window.setTimeout(() => {
            closeModal('time-modal');
            closeModal('payment-modal');
            closeModal('confirmation-modal');
            resetState();
            setStatusMessage(t('idleMessage'), 'info');
        }, IDLE_TIMEOUT_MS);
    };

    ['click', 'touchstart', 'keydown'].forEach((eventName) => {
        document.addEventListener(eventName, resetIdleTimer, { passive: true });
    });

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentLang = button.dataset.lang;
            updateTranslations();
            updateLanguageButtons();
            renderChargers(cachedChargers, handleChargerSelection);
            updatePaymentSummary();
            setStatusMessage(t('statusLoaded'), 'success');
        });
    });

    updateTranslations();
    updateLanguageButtons();

    try {
        const chargers = await loadChargerData();
        cachedChargers = chargers;
        renderChargers(chargers, handleChargerSelection);
        setStatusMessage(t('statusLoaded'), 'success');
    } catch (error) {
        setStatusMessage(t('statusLoadError'), 'error');
        console.error('Erro ao carregar carregadores:', error);
    }

    resetIdleTimer();
};

document.addEventListener('DOMContentLoaded', init);
