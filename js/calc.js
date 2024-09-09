const result = document.querySelector('.result');
let resultado;

export const calcularExpressao = (expression) => {

    const operadores = /[+\-x÷]/;
    console.log("Operadors: ", operadores);
    const operador = expression.match(operadores); // retorna um array com o primeiro operador encontrado.
    console.log("Operador:", operador);
    if(!operador) {
        console.log("Operador inválido!");
        alert("Operador inválido ou não digitado!")
        return;
    }

    let numeros = expression.split(operador[0]);

    console.log("Números:", numeros);

    let numero1 = Number(numeros[0].trim());
    let numero2 = Number(numeros[1].trim());
    if(isNaN(numero1) || isNaN(numero2)) {
        console.log("Um ou ambos os números são inválidos");
    }

    switch (operador[0]) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "x":
            resultado = numero1 * numero2;
            break;
        case "÷":
            resultado = numero1 / numero2;
            break;
        default:
            console.log("Operador inválido");
    }

    result.textContent = resultado.toFixed(2);
    console.log("Resultado:", resultado);
}