var textInput = document.querySelector("#input-text");
var output = document.querySelector("#output");
var btnEncrypy = document.querySelector(".btn-crypt")

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g,"ober")
    .replace(/u/g, "ufat");
    document.getElementById("output").innerHTML = '<textarea id="input-text">' 
    + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    document.getElementById("output").innerHTML = '<textarea id="input-text">'
     + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar () {
    const elementOutput = document.getElementById('output')

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = elementOutput.textContent;

  // Adiciona o elemento temporário à página
    document.body.appendChild(tempTextArea);  

  // Seleciona o texto no elemento temporário
     tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o texto para a área de transferência
    document.execCommand("copy");

  // Remove o elemento temporário da página
    document.body.removeChild(tempTextArea);
    
}



