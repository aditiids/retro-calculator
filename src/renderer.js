document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.calculator-display');
    const buttons = document.querySelectorAll('.button');
  
    let currentInput = '';
  
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value; // Get the actual value from data-value
            
            if (value === 'C') {
                currentInput = ''; // Clear display
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput); // Calculate result
                } catch {
                    currentInput = 'Error';
                }
            } else {
                currentInput += value;
            }
  
            display.value = currentInput;
        });
    });
});
