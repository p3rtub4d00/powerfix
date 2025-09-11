// Conteúdo de select-time.js

document.addEventListener('DOMContentLoaded', () => {
    // Pega os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const chargerId = params.get('charger');

    // Se não houver ID do carregador, volta para a página inicial
    if (!chargerId) {
        window.location.href = 'index.html';
        return;
    }

    // Atualiza o título da página com o número do carregador
    const titleElement = document.querySelector('.charger-highlight');
    if (titleElement) {
        titleElement.textContent = `Carregador ${chargerId}`;
    }

    // Adiciona funcionalidade aos botões de tempo
    const timeOptionButtons = document.querySelectorAll('.time-option-btn');
    timeOptionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const time = button.dataset.time;
            const price = button.dataset.price;
            
            // Redireciona para a tela de pagamento com todas as informações
            window.location.href = `payment.html?charger=${chargerId}&time=${time}&price=${price}`;
        });
    });

    // Funcionalidade do botão "Voltar"
    const backButton = document.querySelector('.back-btn');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});