var male = true;
var female = true;
var joven = true;
var media = true;
var grave = true;
var search = "";

function shouldHide(voice)
{
  var sex = voice.children[0].children[4].innerText;
  var voz = voice.children[0].children[5].innerText;
  if (sex == 'Male' && !male) return true;
  if (sex == 'Female' && !female) return true;
  if (voz == 'Joven' && !joven) return true;
  if (voz == 'Media' && !media) return true;
  if (voz == 'Grave' && !grave) return true;
  if (!match(voice, search)) return true;
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

function match(voice, input)
{ 
  if (voice.children[0].innerText.toUpperCase().indexOf(input.toUpperCase()) > -1) return true
  return false
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