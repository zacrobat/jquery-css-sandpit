$(document).ready(function() {
  $('.tabs a').on('click', function() {
    $('ul.tabs li a').removeClass('active-tab');
    var name = $(this).attr('for');
    console.log(name);
    var completeName = '[name="' + name + '"]';
    console.log(completeName);
    $(completeName).removeClass('invisible').addClass('visible').siblings().removeClass('visible').addClass('invisible');
  });
});
