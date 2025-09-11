// Conteúdo de script.js

document.addEventListener('DOMContentLoaded', () => {
    const chargerCards = document.querySelectorAll('.charger-card');

    chargerCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('available')) {
                const chargerId = card.dataset.chargerId;
                
                // Redireciona para a tela de seleção de tempo, passando o ID do carregador
                window.location.href = `select-time.html?charger=${chargerId}`;
            } else {
                alert('Este carregador está ocupado. Por favor, escolha um disponível.');
            }
        });
    });
});