const PI = 3.14;
const numeros = ["dos", "cuatro", "ocho", "diez"];

function sumar(x, y) {
    let returnValue = x + y;
    return returnValue;
}

function restar(x, y) {
    let returnValue = x - y;
    return returnValue;
}

const multiplicar = (a, b) => {
    let returnValue = a * b;
    return returnValue;
};

const dividir = (a, b) => {
    let returnValue = a / b;
    return returnValue;
};

export { PI, sumar, restar, multiplicar, dividir, numeros };