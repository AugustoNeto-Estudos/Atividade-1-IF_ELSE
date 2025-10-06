function verificarAposentadoria() {
  let idade = parseInt(document.getElementById("idade").value);
  let tempo = parseInt(document.getElementById("tempo").value);
  let msg = document.getElementById("mensagem");

  if (idade >= 65 || tempo >= 30) {
    document.getElementById("mensagem").innerHTML = "Você pode se aposentar."
    console.log("Você pode se aposentar.")
  } else {
    document.getElementById("mensagem").innerHTML = "Você não pode se aposentar ainda."
    console.log("Você não pode se aposentar ainda.")
  }
}
