var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function cadastrar() {
  const nome = document.getElementById("nome").value;
  const tel = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const end = document.getElementById("endereco").value;
  const serv = document.getElementById("servico").value;

  alert(`Nome: ${nome}\nTelefone: ${tel}\nEmail: ${email}\nEndereço: ${end}`);
}
