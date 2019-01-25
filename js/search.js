function match(voice, input)
{ 
  if (voice.children[0].innerText.toUpperCase().indexOf(input.toUpperCase()) > -1) return true
  return false
}

$(function(){
  $("#finder").keyup(function() {
    voices = document.getElementsByClassName('voice');
    input = document.getElementById('finder').value;
    for (i=0; i<voices.length; i++) {
      if (match(voices[i], input))
      {
        voices[i].hidden = false;
      }
      else
      {
        voices[i].hidden = true;
      }
    }
  });
});



