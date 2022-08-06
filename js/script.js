$(document).ready(() => { 
    $(".down").click(function(){
        $('html, body').animate({
            scrollTop: $(".up").offset().top
        }, 1500)
    })
})

$(document).ready(() => { 
    $(".up").click(function(){
        $('html, body').animate({
            scrollTop: $(".down").offset().top
        }, 1000)
    })
})