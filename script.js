const display = document.getElementById("display");
let valor1 = 0;
let valor2 = 0;
let operacion = "";

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const actualizarDisplay = (valor) => {
    display.innerText = valor;
};

const borrar = () => {
    valor1 = 0;
    valor2 = 0;
    operacion = "";
    actualizarDisplay("");
};
const calcular = () => {
    let resultado = 0;
    switch (operacion) {
        case "+":
            resultado = sumar(valor1, valor2);
            break;
        case "-":
            resultado = restar(valor1, valor2);
            break;
        case "*":
            resultado = multiplicar(valor1, valor2);
            break;
        case "/":
            resultado = dividir(valor1, valor2);
            break;
        default:
            break;
    }
    actualizarDisplay(resultado);
    valor1 = resultado;
    valor2 = 0;
    operacion = "";
};

document.querySelectorAll(".btn-numeros").forEach((boton) => {
    boton.addEventListener("click", () => {
        if (operacion === "") {
            valor1 = valor1 * 10 + parseInt(boton.id);
            actualizarDisplay(valor1);
        } else {
            valor2 = valor2 * 10 + parseInt(boton.id);
            actualizarDisplay(valor2);
        }
    });
});

document.querySelectorAll(".btn-operaciones").forEach((boton) => {
    boton.addEventListener("click", () => {
        if (operacion === "") {
            operacion = boton.id;
        } else {
            calcular();
            operacion = boton.id;
        }
    });
});

document.getElementById("igual").addEventListener("click", () => {
    calcular();
});

document.getElementById("borrar").addEventListener("click", () => {
    borrar();
});
