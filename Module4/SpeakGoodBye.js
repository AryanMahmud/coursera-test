(function (window) {

var speakWord = "Good Bye";
var byeSpeaker = {};

byeSpeaker = function (name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker = byeSpeaker
})(window);
