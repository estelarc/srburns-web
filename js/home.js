$(document).ready(function(){
    
    setBodyHeight()

    loadTypewriter()
    
    interactionMenu()

    interactionTabs()

    interactionScroll()

    loadSliders()
    
    randomPhotos()

    $(window).resize(function() {
        //setBodyHeight()
    })
})

function loadSliders () {

    $('.main-container__brands__content__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false
    })

    $('#tab_diseno').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false
    })

    $('.main-container__projects__tabs').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>'
    })   

    $('.main-container__what-we-do__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false
    })

    $('.main-container__agency-block__second').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false
    })

    $('.main-container__agency-block__second .slick-dots li button').each(function() {
        $(this).text( '0' + $(this).text() )
    })
}

function randomPhotos () {
    let min = 1,
        max = 4

    setInterval(function(){
        let numRan1 = Math.floor(Math.random() * max) + min,
            numRan2 = Math.floor(Math.random() * max) + min,
            numRan3 = Math.floor(Math.random() * max) + min,
            numRan4 = Math.floor(Math.random() * max) + min,
            numRan5 = Math.floor(Math.random() * max) + min,
            numRan6 = Math.floor(Math.random() * max) + min,
            numRan7 = Math.floor(Math.random() * max) + min,
            numRan8 = Math.floor(Math.random() * max) + min,
            numRan9 = Math.floor(Math.random() * max) + min            

        $('#randomPhoto_1').css('background-image','url("./img/team-' + numRan1 + '.jpg")')
        $('#randomPhoto_2').css('background-image','url("./img/team-' + numRan2 + '.jpg")')
        $('#randomPhoto_3').css('background-image','url("./img/team-' + numRan3 + '.jpg")')
        $('#randomPhoto_4').css('background-image','url("./img/team-' + numRan4 + '.jpg")')
        $('#randomPhoto_5').css('background-image','url("./img/team-' + numRan5 + '.jpg")')
        $('#randomPhoto_6').css('background-image','url("./img/team-' + numRan6 + '.jpg")')
        $('#randomPhoto_7').css('background-image','url("./img/team-' + numRan7 + '.jpg")')
        $('#randomPhoto_8').css('background-image','url("./img/team-' + numRan8 + '.jpg")')
        $('#randomPhoto_9').css('background-image','url("./img/team-' + numRan9 + '.jpg")')
    }, 3000)
}

function setBodyHeight () {
    let windows_height = $(window).height(),
        header_height = $('.header').height()
    
    $('.main-container__agency-block > div').height(windows_height - header_height)
    $('.main-container__what-we-do').height(windows_height - header_height)
    $('.main-container__projects').height(windows_height - header_height)
    $('.main-container__brands').height(windows_height - header_height)
    $('.main-container__our-team').height(windows_height - header_height)
    $('.main-container__contact').height(windows_height - header_height)    
}

function interactionTabs () {
    $('.main-container__projects__tabs .main-container__projects__tabs__item span').click(function() {
        $('.main-container__projects__tabs .main-container__projects__tabs__item').removeClass('active')
        $(this).parent().addClass('active')

        $('.main-container__projects__slider').removeClass('active')
        $('#tab_' + $(this).attr('tab')).addClass('active')
        $('#tab_' + $(this).attr('tab')).slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            arrows: false
        })    
    })

    $('.main-container__projects__slider__item span').click(function() {
        $('.main-container__projects__detail').removeClass('active')
        
        $('#' + $(this).attr('detail')).addClass('active')
    })

    $('.detail-back').click(function() {
        $('.main-container__projects__detail').removeClass('active')
    })    
}

function interactionMenu () {
    // Open Menu
    $('.header__menu-boton').click(function() {
        $('.overlay').toggleClass('active')
        $('.header__menu-boton').toggleClass('active')
        $('.header__logo').toggleClass('active')
        $('.menu').toggleClass('active')
        $('.header').toggleClass('active')
    })
}

function interactionScroll () {
    let header_height = $('.header').height()

    $(".scroll-down").click(function (){
        $('html, body').animate({
            scrollTop: $(".main-container__agency-block__second").offset().top - header_height
        }, 1000)
    })
}

let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
}

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length,
        fullTxt = this.toRotate[i]

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>'

    let that = this,
        delta = 200 - Math.random() * 100

    if (this.isDeleting) {
        delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
    }

    setTimeout(function() {
        that.tick()
    }, delta)
}

function loadTypewriter () {
    let elements = document.getElementsByClassName('typewrite')
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type'),
            period = elements[i].getAttribute('data-period')

        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period)
        }
    }
    // INJECT CSS
    let css = document.createElement("style")
    css.type = "text/css"
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}"
    document.body.appendChild(css)
}