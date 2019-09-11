$(document).ready(function() {
    $('.aboutPage').hide();
    $('#projects').hide();
    $('main').fadeIn();
 });    

function about() {
    $('.about').on('click', function () {
    $('.main').hide();
    $('.aboutPage').fadeIn();
    $('.beerapp').hide();
    $('#projects').hide();
  })
}


function projects() {
    $('.projects').on('click', function () {
    $('.main').hide();
    $('.aboutPage').hide();
    $('#projects').fadeIn();
    $('.beerapp').fadeIn();  
  })
}

function homePage() {
   $('.initials').on('click', function(){
   $('.aboutPage').hide();   
   $('#projects').hide();
   $('.main').fadeIn();
  })
}
    
about();
projects();
homePage(); 








