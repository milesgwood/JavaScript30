"use strict";

/**
 * *We learn about anonymous aarow functions
 * NodeList.forEach((params) => {statements}) 
 * NodeList.forEach(param => statement)
 * 
 * *transitionend & keydown events
 */
window.addEventListener("keydown", playSound);
/**    
 * Searches for an audio element that matches the keycode attached to this keydown event. 
 * If it finds an audio element it plays the sound
 * @param {*} e 
 */

function playSound(e) {
  var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
  if (!audio) return; //Stops the function here

  audio.currentTime = 0; //rewinds to the start of the audio track.

  audio.play();
  var key = document.querySelector("div.key[data-key=\"".concat(e.keyCode, "\"]"));
  key.classList.add("playing");
} //You must loop through all elements to attach the event listener


var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeHighlight);
}); // Removes the highlight class

function removeHighlight(e) {
  if (e.propertyName !== 'transform') return; //We only care about 1 of the 5 transitions that happen

  this.classList.remove("playing");
}