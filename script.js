$(document).ready(function() {
  let text = $("#quote").text();
  let author = $("#author").text();

  $("#getQuote").on("click", function() {
    $("#quote").text("");
    $("#author").text("");
    $.getJSON(
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      function(json) {
        text = json.quoteText;
        author = json.quoteAuthor || "Anonymous";
        let i = 0;

        let speed = 50; /* The speed/duration of the effect in milliseconds */

        function typeWriter() {
          if (i < text.length) {
            $("#quote").append(text.charAt(i));

            i++;
            setTimeout(typeWriter, speed);
          }
        }
        typeWriter();
        $("#author").text(author);
      }
    );
  });

  if ($("#quote").text != "") {
    $("#twitt").click(function() {
      window.open(
        "https://twitter.com/intent/tweet?text=" + text + "- " + author
      );
    });
  }
});
