$.ajax({
    url:  'https://api.escuelajs.co/api/v1/products?offset=0&limit=1',
    type: "GET",
    dataType: "json",

    success: function(resposta){

       $("#titulo").html(resposta[0].title)
       $('#paragrafo').html(resposta[0].description)
       $('#preco').html(`R$ ${resposta[0].price},00`)
       $('#imagem').html(`<img class="card-img-top" src="${resposta[0].images[0]}" alt="Card image cap">`)
        
    }, error: function(err){
        alert("erro ao buscar informações")
    }
})