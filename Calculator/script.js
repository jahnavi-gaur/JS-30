let btnsBox = document.querySelector('.btns')
let screenBox = document.querySelector('.screen')
let calculateBtn = document.querySelector('.calculate')

btnsBox.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')) return;

    let chr = e.target.textContent;
    let current = screenBox.textContent;
    let lastChar = current.slice(-1);

    // Clear
    if (chr === 'C') {
        screenBox.textContent = "";
        return;
    }

    // Prevent starting with operator (except minus)
    if (current === "" && isOperator(chr) && chr !== '-') {
        return;
    }

    // Prevent double operators
    if (isOperator(lastChar) && isOperator(chr)) {
        screenBox.textContent = current.slice(0, -1) + chr;
        return;
    }

    // Prevent multiple dots in same number
    if (chr === '.') {
        let parts = current.split(/[\+\-\*\/]/);
        let lastNumber = parts[parts.length - 1];

        if (lastNumber.includes('.')) {
            return;
        }
    }

    screenBox.textContent += chr;
})

calculateBtn.addEventListener('click', () => {
    let expression = screenBox.textContent;

    if (!expression) return;

    // Prevent ending with operator
    let lastChar = expression.slice(-1);
    if (isOperator(lastChar)) {
        expression = expression.slice(0, -1);
    }

    try {
        let result = eval(expression);

        if (!isFinite(result)) {
            screenBox.textContent = "Error";
            return;
        }

        screenBox.textContent = result;
    } catch {
        screenBox.textContent = "Error";
    }
})

function isOperator(ch) {
    return ['+', '-', '*', '/'].includes(ch);
}