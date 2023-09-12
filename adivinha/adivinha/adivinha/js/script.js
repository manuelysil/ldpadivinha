const jogoAdivinha = {
  semente: 100,
  tentativa: 0,
  maxtentativas: 5,
  numeroSorteado: function geraValorAleatorio() {
    return Math.round(Math.random() * this.semente);
  },
};

const btnVerifica = document.getElementById("btnVerifica");
const status = document.getElementById("status");
const tentativa = document.getElementById("tentativa");
const chute = document.getElementById("chute");
const btnUsuario = document.getElementById("btnUsuario");


let numeroSorteado = jogoAdivinha.numeroSorteado();
console.log(numeroSorteado);

function atualizarTentativa(tentativa, valor) {
  if (valor > 1) {
    tentativa.innerHTML =
      'Tentativas : <span style="color: white">' + valor + "</span>";
  } else {
    tentativa.innerHTML =
      'Tentativa : <span style="color: white">' + valor + "</span>";
  }
}

function reiniciar() {
  btnVerifica.innerText = "Verificar";
  tentativa.innerHTML = "Tentativa :  0";
  chute.disabled = false;
  jogoAdivinha.tentativa = 0;
  numeroSorteado = jogoAdivinha.numeroSorteado();
  btnVerifica.removeEventListener("click", reiniciar);
}

const formAdivinha = document.getElementById("form");

formAdivinha.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!!chute.value == false) {
    status.innerHTML = '<span style="color:#FF3D00">Digite algum valor</span>';
    return;
  }
  if (jogoAdivinha.tentativa >= jogoAdivinha.maxtentativas){
    status.innerText = "Acabaram suas tentativas,amigo";
    btnVerifica.innerText = "Quer tentar novamente?";
    btnVerifica.addEventListener("click", reiniciar);
  }

  atualizarTentativa(tentativa, ++jogoAdivinha.tentativa);

  if (numeroSorteado == chute.value) {
    status.innerHTML =
      '<span style="color:#00C853">Parabéns, você acertou!!</span>';
    chute.disabled = true;
    btnVerifica.innerText = "Tentar novamente?";
    btnVerifica.addEventListener("click", reiniciar);
  } else if (numeroSorteado > chute.value) {
    status.innerText = "O número sorteado é maior";
  } else if (numeroSorteado < chute.value) {
    status.innerText = "O número sorteado é menor";
  }
});
