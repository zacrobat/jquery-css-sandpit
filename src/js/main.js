$(document).ready(function() {

  $('header nav ul a').not('.burger').on('click', function(event) {
    // event.preventDefault();
    console.log('Ignoring default event!');
    var linkText = $(this).text();
    var linkHTML = $(this).parent().html();
    var linkURL = $(this).attr('href');
    console.log('You clicked: ' + linkText);
    console.log(linkHTML);
    console.log(linkURL);
    $('header nav ul a').removeClass('active');
    $(this).addClass('active');
    // $(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
  });
  $('header nav ul a').not('.burger').on('click', function(event) {

  });

  $('header .icon a').on('click', function() {
    $('header ul').toggleClass('responsive');
  });

});
