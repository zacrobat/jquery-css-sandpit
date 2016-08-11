$(document).ready(function() {
  $('#tab01').click(function() {
    $('#tabcontent01').siblings().addClass('invisible');
    $('#tabcontent01').removeClass('invisible').addClass('visible');
  });
  $('#tab02').click(function() {
    $('ul.tabs li a').removeClass('active-tab');
    $('#tabcontent02').siblings().addClass('invisible');
    $('#tabcontent02').removeClass('invisible').addClass('visible');
  });
  $('#tab03').click(function() {
    $('ul.tabs li a').removeClass('active-tab');
    $('.tab').siblings().addClass('inactive-tab');
    $('#tabcontent03').siblings().addClass('invisible');
    $('#tabcontent03').removeClass('invisible').addClass('visible');
  });
  $('#tab04').click(function() {
    $('ul.tabs li a').removeClass('active-tab');
    $('.tab').siblings().addClass('inactive-tab');
    $('#tabcontent04').siblings().addClass('invisible');
    $('#tabcontent04').removeClass('invisible').addClass('visible');
  });
});
