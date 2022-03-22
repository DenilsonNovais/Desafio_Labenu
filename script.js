function Enviar() {
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;
  var nome = document.getElementById("nome").value;

  if (mensagem == "") {
    alert("Erro no envio: Insira uma mensagem");
  }

  if (email.includes("@") && mensagem != "") {
    alert(`Obrigado pelo contato, ${nome}!`);
  } else {
    alert(`Erro no envio: Endereço de email inválido`);
  }
}
