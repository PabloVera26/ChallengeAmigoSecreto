// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []

function agregarAmigo() {
    let nombrePersona = document.getElementById("amigo").value;

    if (!nombrePersona) {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombrePersona)
        limpiarCaja();
        recorrerArray();
    }
}

function recorrerArray(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let persona = amigos[i];
        let item = document.createElement("li");
        item.textContent = persona;
        lista.appendChild(item);
      }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}