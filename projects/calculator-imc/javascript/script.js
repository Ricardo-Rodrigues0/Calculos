function calcularIMC() {
    var peso = eval(document.form.peso.value)
    var alt = eval(document.form.alt.value)
    var alt2 = alt / 100
    var IMC = parseFloat(peso / (alt2 * alt2));
    document.form.massacor.value = (IMC.toFixed(2));
    if (document.form.massacor.value < 18.5)
        document.form.comment.value = "Peso Baixo";
    if (document.form.massacor.value >= 18.5 || document.form.massacor.value <= 24.9)
        document.form.comment.value = "Peso Ideal";
    if (document.form.massacor.value >= 25 || document.form.massacor.value <= 29.9)
        document.form.comment.value = "Acima do Peso";
    if (document.form.massacor.value >= 30 || document.form.massacor.value <= 34.9)
        document.form.comment.value = "Obesidade Tipo I";
    if (document.form.massacor.value >= 35 || document.form.massacor.value <= 39.9)
        document.form.comment.value = "Obesidade Tipo II";
    if (document.form.massacor.value >= 40 || document.form.massacor.value <= 49.9)
        document.form.comment.value = "Obesidade Morbida";
    if (document.form.massacor.value > 40)
        document.form.comment.value = "Obesidade Extrema";
}
function custRound(x, places) {
    return (Math.round(x * Math.pow(10, places))) / Math.pow(10, places)
}



function maxLen(input) {
    if (input.value.length > 4) {
      input.value = input.value.slice(0, 4);
    }
  }