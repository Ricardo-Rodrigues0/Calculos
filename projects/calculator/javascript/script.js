function insert(num) {
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value = numero + num;
}
function clean() {
    document.getElementById('resultado').value = "";
}
function back() {
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        var calculo = eval(resultado);
        calculo = calculo.toPrecision(calculo.toString().length > 8 ? 5 : undefined);
        document.getElementById('resultado').value = calculo;
    }
    else {
        document.getElementById('resultado').value = ""
    }
}