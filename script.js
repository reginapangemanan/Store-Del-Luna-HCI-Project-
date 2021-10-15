$(document).ready(function(){
  // menu dropdown
  var aParent = document.querySelectorAll(".aParent");
  
  aParent.forEach(function(aParent_item){
    aParent_item.addEventListener("click",function() {
      
      aParent.forEach(function(aParent_item){
        aParent_item.classList.remove("active");
      })
      aParent_item.classList.add("active");
    })
  })
  });

// const aParent = document.querySelector('.aParent');

// aParent.addEventListener("click",function(){
//   aParent.classList.toggle("active");
// });


// image slider
$(document).ready(function(){
  var speed = 1000;


  $('.slider').first().addClass('active');
  $('.slider').hide();
  $('.slider').show();

  if(autoswitch == true){
      setInterval(nextSlide, autoswitch_speed);
  }

  function nextSlide(){
      $('.active').removeClass('active').addClass('oldActive');
      if($('.oldActive').is(':last-child')){
          $('.slider').first().addClass('active');
      }else{
          $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slider').fadeOut(speed);
      $('.active').fadeIn(speed);
  }

// function prevSlide() {
//     $('.active').removeClass('active').addClass('oldActive');
//     if($('.oldActive').is(':first-child')){
//         $('.slider').last().addClass('active');
//     } else {
//         $('.oldActive').prev().addClass('active');
//     }
//     $('.oldActive').removeClass('oldActive');
//     $('.slider').fadeOut(speed);
//     $('.active').fadeIn(speed);
// }
});

$('.active').show();

var autoswitch = true;
var autoswitch_speed = 4000;
if(autoswitch == true){
	setInterval(autoswitch_speed);
}

// /* Menu toggle */ 
// const showMenu = (toggleId, navId)=>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)
  
//     if(toggle && nav){
//       toggle.addEventListener('click', ()=>{
//         nav.classList.toggle('show')
//         toggle.classList.toggle('bx-x')
//       })
//     }
//   }
//   showMenu('header-toggle','nav-content')

//   /* show and hide menu */
// const navLink = document.querySelectorAll('.nav__link');   

// function linkAction(){
// /* Active link */
// navLink.forEach(n => n.classList.remove('active'));
// this.classList.add('active');
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));

