function insert(num){
   var numero= document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}
function clean(){
    document.getElementById('result').innerHTML = " ";
}
function calcular(){
    var resultado = document.getElementById('result').innerHTML;

    if(resultado){
        document.getElementById('result').innerHTML = eval(resultado);
    }
}