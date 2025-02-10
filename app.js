let amigos = []

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    // en caso de ser un campo vació mandar alert
    if (nombreAmigo === '' || nombreAmigo === undefined) {
        alert("Por favor, inserte un nombre");
    }
    //en caso contrario agregar 
    amigos.push(nombreAmigo);
    limpiarCaja();
    recorreAmigos();
}

//limpiar la caja
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//lista de amigos agregados
function recorreAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML =""
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo} </li>`).join('');
}
function sortearAmigo() {
    if(amigos.length > 0){
        let index = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[index];
        let amigoSeleccionado = document.getElementById('resultado');
        amigoSeleccionado.innerHTML = amigoSorteado; 
    } else {
        alert("No hay amigos para sortear");
    }
}
