async function buscaEndeco(cep) {
    var mensagemErro = document.getElementById ('erro');
    mensagemErro.innerHTML = "";
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro){
        throw Error('CEP não existente!');
    }
    var cidade = document.getElementById ('cidade');
    var lougradouro = document.getElementById ('endereco');
    var estado = document.getElementById('estado');
    var bairro =document.getElementById('bairro')

    cidade.value = consultaCEPConvertida.localidade;
    lougradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf
    bairro.value =consultaCEPConvertida.bairro;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `<p> CEP Inválido. Tente Novamente!</p>`
    console.log (erro)
  }
}
var cep = document.getElementById ('cep')
cep.addEventListener("focusout", () => buscaEndeco (cep.value));
