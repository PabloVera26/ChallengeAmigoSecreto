// Se declara la lista donde se almacenaran los amigos.
let amigos = []

// Funcion para agregar amigo a la lista.
function agregarAmigo() {
    // Captura el nombre del amigo.
    let nombreAmigo = document.getElementById("amigo").value;

    // Verifica que el cuadro no este vacio.
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.")
    } else {
        // Agrega el amigo a la lista.
        amigos.push(nombreAmigo)
        // Limpia el nombre.
        document.querySelector('#amigo').value = '';
        // Llama la funcion amigo para mostrarlo.
        mostrarAmigo();
    }
}

// Funcion para mostrar el amigo en la lista.
function mostrarAmigo(){
    // Obtiene el elemento de la lista.
    let lista = document.getElementById("listaAmigos");
    // Limpia la lista existente.
    lista.innerHTML = "";
    // Itera para crear el elemento y agregar el nombre.
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
      }
}

// Funcion para sortear el amigo.
function sortearAmigo() {
    // Verifica que el array no este vacio.
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.")
    } else {
        // Genera un indice (amigo) aleatorio.
        let indice = Math.floor(Math.random() * amigos.length);
        let resultadoSorteo = document.getElementById("resultado")
        // Actualiza al amigo sorteado.
        resultadoSorteo.innerHTML = amigos[indice]
    }
}