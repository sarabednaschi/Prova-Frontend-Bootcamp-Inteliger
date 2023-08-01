$(document).ready(() => {
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
})

function buscarCep(){
    $.ajax({
        url:  `https://viacep.com.br/ws/${$('#cep').val()}/json/`,
        type: "GET",
        dataType: "json",

        success: function(resposta){

            $('#cep').val(resposta.cep)
            $('#endereco').val(resposta.logradouro)
            $('#bairro').val(resposta.bairro)
            $('#cidade').val(resposta.localidade)
            $('#estado').val(resposta.uf)

        }, error: function(err){
            alert("erro ao buscar endereço")
        }
    })
}

function submitForm(){
    nome = $('#nome').val()
    $('#form-cadastro').remove()
    $('#msg-agradecimento').html(
        `<div class="alert alert-success" role="alert">
            Cadastro Concluído com Sucesso!
        </div>`
    )
    $('#voltar').html(
        ` <a class="btn btn-primary" href="exercicio_4.html">Novo Cadastro</a>`
    )
    $('#paragrafo').html(
        `Obrigado(a) ${nome} por se cadastrar em nosso site`
    )
}