$(document).ready(function(){
  var text= "No defined";
  var author="No defined"; 

   $("#getQuote").on("click", function(){    
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(json){          
      text=json.quoteText;
      author=json.quoteAuthor;
      $("#quote").text(text);
      $("#author").text(author);          
    });    
  });
  
 if($("#quote").text!=""){
    $('#twitt').click(function() {
window.open("https://twitter.com/intent/tweet?text="+text+"- "+author);
      });
 }   
});

