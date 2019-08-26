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