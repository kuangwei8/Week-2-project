$(document).ready(function(){
  $("#questions").submit(function(event){

  var personality=  $("input[type=radio][name=awsome]:checked" ).val();

  var closet=
  $("input[type=radio][name=closet]:checked").val();

  var term=  $("input[type=radio][name=term]:checked" ).val();

  var friends=  $("input[type=radio][name=friends]:checked" ).val();

  var pink=  $("input[type=radio][name=color]:checked" ).val();


  if (personality === "yes" && closet === "yes" ) {
   location.replace("python.html");}

  if (friends === "yes" && pink ==="yes") {
    location.replace("java.html");
  };
  if (closet === "no" && friends === "no"){
    location.replace("javascript.html");
  } else {
    location.replace("ruby.html");};



    event.preventDefault();
  });
});



// $(document).ready(function(){
//   $("#questions").submit(function(event){
//
//   var personality=  $("input[type=radio][name=awsome]:checked" ).val();
//
//   var closet=
//   $("input[type=radio][name=closet]:checked").val();
//
//   var term=  $("input[type=radio][name=term]:checked" ).val();
//
//   var friends=  $("input[type=radio][name=friends]:checked" ).val();
//
//   var pink=  $("input[type=radio][name=color]:checked" ).val();
//
//   if (personality === "yes" && closet === "yes" ){
//       $("#python").show();
//       $("#ruby").hide();
//       $("#java").hide();
//       $("#javascript").hide();
//     };
//
//    if (friends === "yes" && pink ==="yes"){
//      $("#java").show();
//      $("#ruby").hide();
//      $("#python").hide();
//      $("#javascript").hide();
//    };
//
//    if (closet === "no" && friends === "no"){
//      $("#javascript").show();
//      $("#ruby").hide();
//      $("#java").hide();
//      $("#python").hide();
//    };
//
//    if else {
//       $("#ruby").show();
//       $("#python").hide();
//       $("#java").hide();
//       $("#javascript").hide();
//     };
//
//
//     event.preventDefault();
//   });
// });
