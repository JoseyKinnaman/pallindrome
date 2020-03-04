
$(document).ready(function() {
  $("form#pallindrome").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    console.log(word)
    var newArray = word.split("");
    console.log(newArray)
    var newString = newArray.join("")
    console.log(newString)
    var reverseArray =  newArray.reverse().join("");
    console.log(reverseArray)

    if (newString === reverseArray) {
      alert("You have a pallindrome!")
    } else {
      alert("This is not a pallindrome")
    }
    
  });
});