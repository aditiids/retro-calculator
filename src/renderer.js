document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.calculator-display');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Fix: Use `alt` attribute correctly
            const value = button.getAttribute('alt'); 

            console.log(`Clicked value: ${value}`); // Debugging output

            if (!value) {
                console.error("Button clicked but no alt value found!", button);
                return;
            }

            if (value === 'C') {
                currentInput = ''; // Clear display
            } else if (value === 'equal') {
                try {
                    currentInput = eval(currentInput); // Evaluate expression
                } catch {
                    currentInput = 'Error';
                }
            } else if (value === 'star') {
                currentInput += '*'; // Fix: Replace `star` with `*`
            } else if (value === 'slash') {
                currentInput += '/'; // Fix: Replace `slash` with `/`
            } else if (value === 'minus') {
                currentInput += '-'; // Fix: Replace `minus` with `-`
            } else if (value === 'plus') {
                currentInput += '+'; // Fix: Replace `plus` with `+`
            } else {
                currentInput += value; // Append numbers
            }

            display.value = currentInput;
        });
    });
});
