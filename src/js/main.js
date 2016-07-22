$(document).ready(function() {

  // function myFunction() {
  //   document.getElementsByClassName("header ul")[0].classList.toggle("responsive");
  // }

  // $('header nav ul a').not('.burger').on('click', function(event) {
  //   // event.preventDefault();
  //   console.log('Ignoring default event!');
  //   var linkText = $(this).text();
  //   var linkHTML = $(this).parent().html();
  //   var linkURL = $(this).attr('href');
  //   console.log('You clicked: ' + linkText);
  //   console.log(linkHTML);
  //   console.log(linkURL);
  //   $('header nav ul a').removeClass('active');
  //   $(this).addClass('active');
  //   // $(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
  // });
  // $('header nav ul a').not('.burger').on('click', function(event) {
  //
  // });

  $('header .icon a').on('click', function() {
    $('header ul').toggleClass('responsive');
  });

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

});
