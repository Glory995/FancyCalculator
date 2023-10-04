function addToDisplay(value) {
    const display = document.getElementById('display');
    
    // Check if the last character is an operator
    const lastChar = display.value.charAt(display.value.length - 1);
    
    if (value === '%' && !isNaN(lastChar)) {
        // Calculate percentage of the last number entered
        const numbers = display.value.split(/[-+*\/]/);
        const lastNumber = numbers[numbers.length - 1];
        const percentage = (parseFloat(lastNumber) / 100).toString();
        
        // Replace the last number with its percentage
        display.value = display.value.replace(lastNumber, percentage);
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
