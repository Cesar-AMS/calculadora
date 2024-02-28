// Função para adicionar um caractere ao visor da calculadora
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função para limpar o visor da calculadora
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para calcular o resultado da expressão no visor da calculadora
function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
