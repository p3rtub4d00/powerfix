// Conteúdo de confirmation.js - Versão Atualizada

document.addEventListener('DOMContentLoaded', () => {
    
    // Define o tempo em milissegundos para esperar antes de redirecionar.
    // 8000 milissegundos = 8 segundos.
    const redirectDelay = 8000;

    console.log(`Redirecionando para a página inicial em ${redirectDelay / 1000} segundos...`);

    // A função setTimeout executa o código uma vez após o tempo especificado.
    setTimeout(() => {
        // Redireciona o usuário para a página inicial.
        window.location.href = 'index.html';
    }, redirectDelay);

    /* O código anterior da contagem regressiva (setInterval) foi removido 
    para implementar este redirecionamento automático e rápido.
    */
});