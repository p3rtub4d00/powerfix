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

const renderChargers = (chargers) => {
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

        card.addEventListener('click', () => handleChargerSelection(charger));

        grid.appendChild(card);
    });
};

const handleChargerSelection = (charger) => {
    if (charger.status !== 'available') {
        setStatusMessage('Este carregador está ocupado. Por favor, escolha um disponível.', 'error');
        return;
    }

    localStorage.setItem(
        STORAGE_SELECTED_KEY,
        JSON.stringify({
            chargerId: charger.id,
            selectedAt: new Date().toISOString(),
        })
    );

    window.location.href = `select-time.html?charger=${charger.id}`;
};

const init = async () => {
    try {
        const chargers = await loadChargerData();
        renderChargers(chargers);
        setStatusMessage('Carregadores carregados com sucesso!', 'success');
    } catch (error) {
        setStatusMessage('Não foi possível carregar os carregadores. Tente novamente.', 'error');
        console.error('Erro ao carregar carregadores:', error);
    }
};

document.addEventListener('DOMContentLoaded', init);
