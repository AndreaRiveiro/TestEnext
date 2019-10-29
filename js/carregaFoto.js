$("#selectRacas").on("change", function() {
    var raca = $(this).val();   
    var  cachorrosImg = "https://dog.ceo/api/breed/" + raca + "/images/random"; 
    fetch(cachorrosImg)
    .then(response => response.json())
        .then(function(json){
                var imagem = document.createElement('img');
                imagem.src = json.message;
                document.querySelector('.demo-image').appendChild(imagem);
        }); 
});

