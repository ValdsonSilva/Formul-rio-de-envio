
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
    var endereco = document.querySelector('input[name="endereco"]').value;
    var cidade = document.querySelector('input[name="cidade"]').value;

     
    //Tratamento para não mandar o form sem valores!
    if (nome !== '' & email !== '' & telefone !== '' & endereco !== '' & cidade !== ''){
        //"tabela" recebe o id da tabela no html
        var tabela = document.getElementById("tabela-dados").getElementsByTagName('tbody')[0];
        //essa var recebe a tabela acompanhada do método insertRow
        var novaLinha = tabela.insertRow();
        var celulaNome = novaLinha.insertCell(0);
        var celulaEmail = novaLinha.insertCell(1);
        var celulaTelefone = novaLinha.insertCell(2);
        var celulaEndereco = novaLinha.insertCell(3);
        var celulaCidade = novaLinha.insertCell(4);
        
        celulaNome.innerHTML = nome;
        celulaEmail.innerHTML = email;
        celulaTelefone.innerHTML = telefone;
        celulaEndereco.innerHTML = endereco;
        celulaCidade.innerHTML = cidade;
    }
    
}

//Essa função reseta os campos do form após o envio!
function limparDados() {
    document.querySelector('input[name="nome"]').value = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('input[name="endereco"]').value = "";
    document.querySelector('input[name="telefone"]').value = "";
    document.querySelector('input[name="cidade"]').value = "";
}