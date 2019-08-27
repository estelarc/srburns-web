$(document).ready(function(){

    setBodyHeight()

    interactionMenu()

    $(window).resize(function() {
        setBodyHeight()
    })
})

function setBodyHeight () {
    let windows_height = $(window).height(),
        header_height = $('.header').height()
        
    $('.main-container').height(windows_height - header_height)
}

function interactionMenu () {
    // Open Menu
    $('.header__menu-boton').click(function() {
        $('.overlay').toggleClass('active')
        $('.header__menu-boton').toggleClass('active')
        $('.header__logo').toggleClass('active')
        $('.menu').toggleClass('active')
    })
}


$(document).ready(function() {
    $(".title-sorry-msg").lettering();
    animation();
  }, 1000);
  
  
  function animation() {
    var tittleMessage = new TimelineMax();
    tittleMessage.staggerFromTo(".title-sorry-msg span ", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  }