if(typeof(Storage)!='undefined'){
    $("#selectRacas").on("change", function(){
       raca = $(this).val();
       localStorage.setItem("raca", raca);
    })

    $("#fontes").on("change", function(){
        fonte = $(this).val();
        localStorage.setItem("fonte", fonte);
    })

    $("#cor").on("change", function(){
        cor = $(this).val();
        localStorage.setItem("cor", cor);
    })
}

function salva(){
    $("body").on("load", function(){
        document.querySelector("#selectRacas").innerHTML = localStorage.getItem("raca");
        document.querySelector("#fontes").innerHTML = localStorage.getItem("fonte");
        document.querySelector("#cor").innerHTML = localStorage.getItem("cor");
    })
}