let saldo = 1000;
cont = 0;
list = [];

function limparSelect(campo) {
  while (campo.length > 1) {
    campo.remove(1);
  }
}

function carregarBancos() {
  fetch("https://brasilapi.com.br/api/banks/v1")
    .then((response) => response.json())
    .then((data) => preencherSelectBancos(data))
    .catch((error) => console.error(error));
}

function preencherSelectBancos(data) {
  let bancos = document.getElementById("bancos");
  limparSelect(bancos);

  for (let index in data) {
    const { name } = data[index];

    let option = document.createElement("option");
    option.innerHTML = name;

    bancos.appendChild(option);
  }
}

function carregarBancos2() {
  fetch("https://brasilapi.com.br/api/banks/v1")
    .then((response) => response.json())
    .then((data) => preencherSelectBancos2(data))
    .catch((error) => console.error(error));
}

function preencherSelectBancos2(data) {
  let bancos2 = document.getElementById("bancos2");
  limparSelect(bancos2);

  for (let index in data) {
    const { name } = data[index];

    let option = document.createElement("option");
    option.innerHTML = name;

    bancos2.appendChild(option);
  }
}

function atualizaSaldo() {
  document.getElementById("txtSaldo").innerHTML = parseFloat(
    saldo.toPrecision(8)
  );
}

function guardaTransacao() {
  saldo = parseFloat(
    saldo + parseFloat(document.getElementById("valor").value)
  );
  atualizaSaldo(saldo);

  let ind = document.getElementById("indicador").value;
  let valor = document.getElementById("valor").value;
  let nome = document.getElementById("nome").value;
  let b1 = document.getElementById("bancos").value;
  let b2 = document.getElementById("bancos2").value;

  //testando

   let trasacao = `${ind} - ${valor} - ${nome} - ${b2} -> ${b1} `;
   list.push(trasacao);
}

function generate_table() {

    document.getElementById("apagar").innerHTML = "";

    var body = document.getElementsByTagName("p")[5];
  
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < list.length; i++) {
      var row = document.createElement("tr");
  
      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(list[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }
  
    tbl.appendChild(tblBody);
   
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }