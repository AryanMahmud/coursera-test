
(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var i;
for (i = 0; i < names.length; i++) {

 var firstLetter = names[i].charAt(0);
 var Jj = firstLetter.toLowerCase();

  if (Jj === "j") {
    byeSpeaker(names[i]);
  } else {
    helloSpeaker(names[i]);
  }
}
})();