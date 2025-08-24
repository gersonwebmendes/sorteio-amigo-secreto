let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert("informe um valor valido  ");
        return;
    }

    amigos.push(nome);

    document.getElementById('amigo').value = '';

    atualizarAmigo();
}

function atualizarAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("nenhuma pessoa foi sorteada")
        return;
    }

    let sorteio = Math.floor(Math.random() * amigos.length);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.innerHTML = "<li>" + amigos[sorteio] + "</li>";
    document.getElementById("listaAmigos").innerHTML = "";

}


