// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let NombreSecreto ;
let ArrayNombres = [];
//let numeroMaximo = 10;






function agregarAmigo() {
    let NombreSecreto = document.getElementById('amigo').value;
    ArrayNombres.push(NombreSecreto);
    console.log(NombreSecreto);
    lista();
    limpiar();
}

function limpiar(){
    document.getElementById('amigo').value = '';
}

function lista(){


}

