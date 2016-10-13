var apiKey = "AIzaSyCFSYOwV7ppMSxKc5PEIph0NavehkMs0Kk";

$(document).ready(function() {
  $('#burritoLocation').click(function() {
    initialize();
  });
});
  // $('#burritoLocation').click(function() {
  //   var city = $('#location').val();
  //   $('#location').val("");
  //   $('.showBurritos').text("The city you have chosen is " + city + ".");
  //   debugger;
  //   $.get('https://api.yelp.com/v2/search?term=burrito&location=' + city + '&appid=' + apiKey, function(response) {
  //     console.log(response);
  //   });
  // });
