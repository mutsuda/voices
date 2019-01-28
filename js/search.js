var male = true;
var female = true;
var joven = true;
var media = true;
var grave = true;
var search = "";

function shouldHide(voice)
{
  var sex = $(voice).find(".sexo").text();
  var voz = $(voice).find(".voz").text();
  if (sex == 'Male' && !male) return true;
  if (sex == 'Female' && !female) return true;
  if (voz == 'Joven' && !joven) return true;
  if (voz == 'Media' && !media) return true;
  if (voz == 'Grave' && !grave) return true;
  result = match(voice, search);
  if (!result)
  {
    $(voice).find("img", class_=".activator").fadeTo("fast", 1);
    return true;
  }
  else 
  {
    $(voice).find("img", class_=".activator").fadeTo("fast", 0.15);
    if (result != true) $(voice).find(".search-info").text(result);
    
  }
  if (search=="")
  {
    $(voice).find("img", class_=".activator").fadeTo("fast", 1);
    $(voice).find(".search-info").text("");
  }
  return false;
}

function updateView()
{
  voices = document.getElementsByClassName('voice');
  for (i=0; i<voices.length; i++) {
    if (shouldHide(voices[i])) voices[i].hidden = true;
    else voices[i].hidden = false;
  }
}

function getName(habituales, index)
{
  start = habituales.lastIndexOf(',',index)+1;
  if (start == -1) start = 0;
  end = habituales.indexOf(',',index);
  if (end == -1) end = habituales.length;

  return habituales.substring(start,end).trim();

}

function match(voice, input)
{ 
  if ($(voice).find(".nombre").text().toUpperCase().indexOf(input.toUpperCase()) > -1) return true;
  if ($(voice).find(".apellidos").text().toUpperCase().indexOf(input.toUpperCase()) > -1) return true;

  habituales = $(voice).find(".habituales").text();
  h_i = habituales.toUpperCase().indexOf(input.toUpperCase());
  
  if (h_i > -1)
  {
    return getName(habituales,h_i);
  }

  personajes = $(voice).find(".personajes").text();
  p_i = personajes.toUpperCase().indexOf(input.toUpperCase());
  if (p_i > -1) 
  {
    return getName(personajes,p_i);
  }
  return "";
}

$(function(){
  $("#finder").keyup(function() {
    voices = document.getElementsByClassName('voice');
    input = document.getElementById('finder').value;
    search = input;
    updateView();
  });
});

$(function(){
  $("#male_checkbox").change(function() 
  {
    if (male) male = false;
    else male = true;
    updateView();
  });
});

$(function(){
  $("#female_checkbox").change(function() 
  {
    if (female) female = false;
    else female = true;
    updateView();
  });
});

$(function(){
  $("#joven_checkbox").change(function() 
  {
    if (joven) joven = false;
    else joven = true;
    updateView();
  });
});

$(function(){
  $("#media_checkbox").change(function() 
  {
    if (media) media = false;
    else media = true;
    updateView();
  });
});

$(function(){
  $("#grave_checkbox").change(function() 
  {
    if (grave) grave = false;
    else grave = true;
    updateView();
  });
});