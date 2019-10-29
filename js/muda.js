
$("#fontes").on("change", function() {
    let fonte = $(this).val()
    document.querySelector("body").style.fontFamily = fonte
    document.querySelector('#title01').style.fontFamily = fonte
    document.querySelector('legend').style.fontFamily = fonte
});
  
$("#cor").on("change", function() {
    let color = $(this).val()
    document.querySelector('body').style.color = color
    document.querySelector('#title01').style.color = color
    document.querySelector('legend').style.color = color
});
  