$(function(){

  // LOGIN BUTTON
  var button = document.createElement("BUTTON");
  var buttonText = document.createTextNode("LOGIN");
  button.append(buttonText);
  document.body.append(button);

  // DIV
  var div = document.createElement("div");
  var divText = document.createTextNode("LOGIN");
  div.append(divText);
  document.body.append(div);

  // BUTTON SUBMIT FOR FORM
  var submit = document.createElement("button");
  var submitText = document.createTextNode("Skicka");
  submit.append(submitText);
  document.body.append(submit);

  //FORM
  var form = document.createElement("form");
  var inputOne = document.createElement("input");
  var inputTwo = document.createElement("input");
  form.append(inputOne, inputTwo)
  document.body.append(form);

  inputOne.setAttribute("placeholder", "Namn");
  inputOne.setAttribute("type", "text");
  inputTwo.setAttribute("placeholder", "Lösenord");
  inputTwo.setAttribute("type", "password");

  $("div").append(form);
  $("form").append(submit);
  $("input").prop('required',true);

  // KLASSER
  $(submit).addClass("submit");
  $(form).addClass("myForm");
  $(div).addClass("container");

  //STYLE CSS
  $(".container").css({
    "font-size":"200%",
    "font-family":"Helvetica",
    "text-align":"center",
    "background-color":"#006E6D",
    "color":"white",
    "width":"500px",
    "padding": "30px"
  });

  $("button").css({
    "font-size":"120%"
  })

  $(".submit").css({
    "font-size":"100%",
  })

  $("form").css({
    "text-align":"center",
  })

  $("input").css({
    "padding":"5px",
    "font-size":"80%",
    "border":"0",
    "font-family":"Helvetica",
    "display":"block",
    "margin":"10px",
    "width":"480px"
  })

   // FUNKTIONER
   $("button").click(function(){
     $("div").fadeIn(200);
   });

   $(".myForm").submit(function(){
     alert("Välkommen!")
   });

   $("div").hide();
   $("div").wrapAll("<div></div>");

});
