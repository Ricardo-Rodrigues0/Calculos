// <!--   #=------------------------=------------------------=#   -->
// <!--   #                 • Calculos                        #   -->
// <!--   #                                                   #   -->
// <!--   #      • Projeto com funções de calculos sendo      #   -->
// <!--   #      • desenvolvido para afins de estudos.        #   -->
// <!--   #      • Autor:  Ricardo Rodrigues                  #   -->
// <!--   #                                                   #   -->
// <!--   #                 • Contato                         #   -->
// <!--   #                                                   #   -->
// <!--   #      • Discord:  HunTer#1594                      #   -->
// <!--   #      • Email:  ricardo272530@gmail.com            #   -->
// <!--   #=------------------------=------------------------=#   -->

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = ""
    }
}