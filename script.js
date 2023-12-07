
//função de clique no botão
document.getElementById("botao-adicionar").addEventListener("click", function(event) {
    event.preventDefault(); //impede o envio do form
    adicionarDados(); //chama a funcao para adicionar dados na tabela
    limparDados(); //Chama a func para resetar os dados
});

//função de adicionar os dados na tabela
function adicionarDados() {
    //pego os elementos inputs pelo atributo name
    //cada variável recebe um elemento input especifico
    var nome = document.querySelector('input[name="nome"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var telefone = document.querySelector('input[name="telefone"]').value;
    var cep = document.querySelector('input[name="cep"]').value
    var cpf = document.querySelector('input[name="cpf"]').value
    var cnpj = document.querySelector('input[name="cnpj"]').value

    // expressões regulares para validar campos do formulário
    var regexTelefone = /^\d{2}\d{5}\d{4}$/;
    var regexCep = /^\d{5}-\d{3}$/g
    var regexCpf = /^\d{3}.\d{3}.\d{3}-\d{2}$/
    var regexCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    // saida cnpj -> 05.311.244/0001-09

     
    //Verificação dos dados passados nos inputs!
    if ( regexTelefone.test(telefone) &
         regexCep.test(cep) &
         regexCpf.test(cpf) & 
         regexCnpj.test(cnpj)){

        //"tabela" recebe o id da tabela no html
        var tabela = document.getElementById("tabela-dados").getElementsByTagName('tbody')[0];
        //essa var recebe a tabela acompanhada do método insertRow
        var novaLinha = tabela.insertRow();
        var celulaNome = novaLinha.insertCell(0);
        var celulaEmail = novaLinha.insertCell(1);
        var celulaTelefone = novaLinha.insertCell(2);
        var celulaCep = novaLinha.insertCell(3)
        var celulaCpf = novaLinha.insertCell(4)
        var celulaCnpj = novaLinha.insertCell(5)
        // var celulaEndereco = novaLinha.insertCell(3);
        // var celulaCidade = novaLinha.insertCell(4);
        
        celulaNome.innerHTML = nome;
        celulaEmail.innerHTML = email;
        celulaTelefone.innerHTML = telefone;
        celulaCep.innerHTML = cep;
        celulaCpf.innerHTML = cpf;
        celulaCnpj.innerHTML = cnpj;
        // celulaEndereco.innerHTML = endereco;
        // celulaCidade.innerHTML = cidade;
    }
    else {
        alert('Preencha todos os campos do formulário ou verifique a quantidade de dígitos!')
    } 
}


//Essa função reseta os campos do form após o envio!
function limparDados() {
    document.querySelector('input[name="nome"]').value = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('input[name="telefone"]').value = "";
    document.querySelector('input[name="cep"]').value = "";
    document.querySelector('input[name="cpf"]').value = "";
    document.querySelector('input[name="cnpj"]').value = "";
}

/* ---------testes de validação-------- */

var cnpj = '05.311.244/0001-09'
var cpf = "081.117.763-73"
var cep = "64803-790"
var telefone = "89994331777"

var regexTelefone = /^\d{2}\d{5}\d{4}$/;
var regexCep = /^\d{5}-\d{3}$/g
var regexCpf = /^\d{3}.\d{3}.\d{3}-\d{2}$/
var regexCnpj = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;


if (regexCnpj.test(cnpj)) {
    console.log("cnpj válido!")
}else {
    console.log('cnpj inválido!')
}

if (regexTelefone.test(telefone)){
    console.log("telefone válido")
}else {
    console.log("telefone inválido")
}

if (regexCpf.test(cpf)){
    console.log('cpf válido')
}else {
    console.log('cpf inválido')
}

if (regexCep.test(cep)){
    console.log("cep válido")
}else {
    console.log("cep inválido")
}


// nome !== '' &
// email !== '' & 
// telefone !== '' & 
// cep !== '' & 
// cpf !== '' & 
// cnpj !== "" &