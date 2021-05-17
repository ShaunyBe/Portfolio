function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* change words on home page */
/*
(function(){

    // List your words here:
    var words = [
		'Web Developer',
        'Puzzle doer',
        'Bodybuilding entusiast',
        'Coffee drinker',
        'Dog lover'
        ], i = 0;

    setInterval(function(){
        $('#wordchange').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
       // 3 seconds
    }, 3000);

})();
*/


