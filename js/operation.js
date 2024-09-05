const operationDiv = document.querySelector('.op');
const buttons = document.querySelectorAll('.grid-item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; // Pega o valor do botão clicado

        if(value !== 'c' && value !== '=') {
            operationDiv.textContent += value + ' ';
        } // Ignora os characters 'c' e o '='

        if(value === 'c') {
            operationDiv.textContent = '';
        }
    })
})
