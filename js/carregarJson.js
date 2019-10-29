
itens= document.querySelector('#selectRacas');

const cachorros = 'https://dog.ceo/api/breeds/list/all'; 

fetch(cachorros)
.then(response => response.json())
    .then(function(json){
      //   console.log(json.message);
        for(index in json.message){
            var opt = document.createElement('option');
            opt.value = index;
            opt.innerHTML = index;
            itens.appendChild(opt);
		}
    });
  
  function getDogImage(index) {
      fetch(`https://dog.ceo/api/breed/${index}/images/random`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson, index))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function watchSelect() {
      $('#selectRacas').on('change', function() {
         var raca = this.val();
          const index = $('.imagem').val();
          $('.results').empty();
          getDogImage(index);
      });
  }
 


