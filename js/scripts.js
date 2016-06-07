var palyndrome = function(sentence){
  var sentenceArray = ((sentence.toLowerCase()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?’"”“ ]/g,"")).split("");

  if(sentenceArray.toString() === (sentenceArray.reverse()).toString()){
    return "this sentence is a palyndrome."
  }else {
    return "this sentence is NOT a palyndrome."
  }
}


// Front End
$(function () {
  $("form#input").submit(function(event){

    var sentence = $("#sentence").val();
    $("#output").text(palyndrome(sentence));

    event.preventDefault();
  });

});
