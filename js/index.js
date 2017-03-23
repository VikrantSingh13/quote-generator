$(document).ready(function(){ 
  
  //my list of color codes
  var listColorHex = ["ffb6c1","7FFF00","aa00aa", "40E0D0", "ADFF2F", "F4A460", "7FFFD4", "4682B4", "FFA500"];
  //placeholder quotes and authors
  var quote = "Don't trust everything you read on the internet.", 
      author = "M. K. Gandhi", 
      tweet = '"' + quote + '"-' + author;
  //$('.quote-test').html(tweet);
  
  
  $(".button-generate-quote").click(function(){
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      //some trimming to the actual quote and author
      quote = a[0].content.substr(3,a[0].content.length-8);
      author = a[0].title;
      $(".quote-body").html(quote);
      $(".quote-author").text(author);
      
      //changes background color along with the quote
      var hexVal = "#" + listColorHex[Math.floor(Math.random() * 8)];
      $("body").css("background", hexVal);
      
      //cuts extra characters for twitter
      if (quote.length + author.length > 137){
        quote = '"' + quote.substring(0,134 - author.length) + '..."';
      }
      else{
        quote = '"' + quote + '"';
      }
      tweet = quote + "-" + author;
      //$('.quote-test').html(tweet);
    });
    
    $.ajaxSetup({cache: false});
  });
  
  $(".button-tweet").click(function(){
    window.open('https://twitter.com/intent/tweet?&text=' + encodeURIComponent(tweet));
  
  });
  
  
});