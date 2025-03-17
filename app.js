// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let NombreSecreto = ' ';
let ArrayNombres = [];







function agregarAmigo() {
    let NombreSecreto = document.getElementById('amigo').value;
    if (NombreSecreto==""){
        alert("Nombre Ingresado no Debe estar en Blanco");
    }
    else {
        ArrayNombres.push(NombreSecreto);

        for (let i=0; i< ArrayNombres.length;i++) {
        }
                let elem=document.createElement("Li");
                let arrNom=NombreSecreto;
                elem.innerHTML=arrNom;
                document.getElementById("listaAmigos").appendChild(elem);
      
        limpiar();
    }
   
}
 


function limpiar(){
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    if (ArrayNombres.length !=0){
        let nroIndice = Math.floor(Math.random()*ArrayNombres.length);
        console.log(nroIndice)
        if (nroIndice!=0){
            nroIndice--;
            console.log("resto uno ="+nroIndice)
        }
   
        alert(ArrayNombres[nroIndice]);
        ArrayNombres.splice(nroIndice,1);
    }
    else{
        alert("Ya No Existen Amigos que Sortear :(");
    }
}