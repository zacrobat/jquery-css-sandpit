$(document).ready(function() {
  // tabs
  $('#tab-section div:first-child').siblings().hide();
  $('.tabs a').on('click', function() {
    $('ul.tabs li a').removeClass('active-tab');
    var completeName = '[name="' + $(this).attr('for') + '"]';
    $(completeName).show().siblings().hide();
  });
  // accordion
  $('dd').hide();
  $('dt').on('click', function() {
    $(this).next('dd').slideToggle('600');
  });
});
