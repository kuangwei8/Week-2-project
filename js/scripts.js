$(document).ready(function(){
  $("#questions").submit(function(event){

  var personaity=  $("input[type=radio][name=awsome]:checked" ).val();

  // var closet=
  // $("input[type=radio][name=closet]:checked").val();

  // var term=  $("input[type=radio][name=term]:checked" ).val();
  //
  // var friends=  $("input[type=radio][name=friends]:checked" ).val();
  //
  // var pink=  $("input[type=radio][name=pink]:checked" ).val();


  //
  console.log(personality);
  if (personality === "yes"){
  alert("how are you");}



    event.preventDefault();
  // });
});
