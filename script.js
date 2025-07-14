document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const greetingsScreen = document.getElementById('greetings');
    const flowerScreen = document.getElementById('flower-screen');
    const photoScreen = document.getElementById('photo-screen');
    const messageScreen = document.getElementById('message-screen');
    
    // Inicia a animação quando o botão é clicado
    startButton.addEventListener('click', function() {
        // Esconde a tela inicial
        greetingsScreen.classList.add('hidden');
        
        // Mostra a animação das flores
        flowerScreen.classList.remove('hidden');
        
        // Depois de 5 segundos, mostra a foto
        setTimeout(() => {
            flowerScreen.classList.add('hidden');
            photoScreen.classList.remove('hidden');
            
            // Depois de mais 5 segundos, mostra a mensagem
            setTimeout(() => {
                photoScreen.classList.add('hidden');
                messageScreen.classList.remove('hidden');
            }, 5000);
        }, 5000);
    });
    
    // Opcional: Permite reiniciar a animação clicando na mensagem final
    messageScreen.addEventListener('click', function() {
        messageScreen.classList.add('hidden');
        greetingsScreen.classList.remove('hidden');
    });
});