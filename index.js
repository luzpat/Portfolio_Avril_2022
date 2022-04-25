$(document).ready(function() {


                    // Animation icones

    $(".icone").mouseover(function() {      //lorsque le curseur est sur l'icone
        $(this).css({
            'width': '67px',
            'transition': '0.2s'
        });
    }).mouseleave(function() {              //lorsque le curseur n'est pas sur l'icone
        $(this).css({
            'width': '60px',
            'transition': '0.2s'
        });
    });

                    //Appartitions div par icones

$(".baccal").hide();                        //Les Div sont cachées par défaut
$(".faculte").hide();
$(".composer").hide();
$(".apple").hide();
$(".apple2").hide();
$(".photo").hide();
$(".formation").hide();


$("#bac").mouseover(function() {            //Apparition et disparition div Baccalauréat
    $(".baccal").fadeIn().dequeue().animate({
        left: '10rem',
        width: '26rem'
    }, 1100);
});
$("#bac").click(function() {
    $(".baccal").fadeOut();
    $(".baccal").animate({
        left: '0rem',
        width: '30rem',
    });
});

$("#fac").mouseover(function() {            //Apparition et disparition div Faculte
    $(".faculte").fadeIn().dequeue().animate( {
        right: '12.5rem',
        width: '26rem'
    }, 1100);
});
$("#fac").click(function() {
    $(".faculte").fadeOut();
    $(".faculte").animate({
        right: '0rem',
        width: '30rem'
    })
});

$("#comp").mouseover(function() {            //Apparition et disparition div Composer
    $(".composer").fadeIn().dequeue().animate({
        left: '7rem',
        width: '28rem',
    }, 1100);
});
$("#comp").click(function() {
    $(".composer").fadeOut();
    $(".composer").animate({
        left: '0rem',
        width: '30rem'
    })
});

$("#apple").mouseover(function() {            //Apparition et disparition div Apple
    $(".apple").fadeIn().dequeue().animate({
        left: '7rem',
        width: '30.5rem'
    }, 1100);
});
$("#apple").click(function() {
    $(".apple").fadeOut();
    $(".apple").animate({
        left: '0rem',
        width: '30rem'
    })
});

$("#apple").mouseover(function() {             //Apparition et disparition div Apple 2    
    $(".apple2").delay(1000).fadeIn().animate({
        right: '9rem',
        width: '30.5rem'
    }, 1100);
});
$("#apple").click(function() {
    $(".apple2").fadeOut();
    $(".apple2").animate({
        right: '0rem',
        width: '30rem'
    })
});

$("#photo").mouseover(function() {            //Apparition et disparition div Photo
    $(".photo").fadeIn().dequeue().animate({
        right: '9rem',
        width: '28.5rem'
    }, 1100);
});
$("#photo").click(function() {
    $(".photo").fadeOut();
    $(".photo").animate({
        right: '0rem',
        width: '30rem'
    })
});

$("#form").mouseover(function() {            //Apparition et disparition div Formation
    $(".formation").fadeIn().dequeue().animate({
        left: '5rem',
        width: '30rem'
    }, 1100);
});
$("#form").click(function() {
    $(".formation").fadeOut();
    $(".formation").animate({
        left: '0rem',
        width: "30rem"
    })
});

        // Animations Footer


$(".insta").mouseover(function() {          //Animation logo Insta
    $(this).css({
       transform: 'rotate(360deg)',
       transition: '1s'
    });
});

$(".insta").mouseleave(function() {
    $(this).css({
       transform: 'rotate(0deg)',
       transition: '1s'
    });
});

$(".linkedin").mouseover(function() {       //animation logo Linkedin
    $(this).css({
       transform: 'rotate(360deg)',
       transition: '1s'
    });
});

$(".linkedin").mouseleave(function() {
    $(this).css({
       transform: 'rotate(0deg)',
       transition: '1s'
    });
});

$(".mail").mouseover(function() {           //Animation logo Mail
    $(this).css({
       transform: 'rotate(360deg)',
       transition: '1s'
    });
});

$(".mail").mouseleave(function() {
    $(this).css({
       transform: 'rotate(0deg)',
       transition: '1s'
    });
});

$(".github").mouseover(function() {           //Animation logo github
    $(this).css({
       transform: 'rotate(360deg)',
       transition: '1s'
    });
});

$(".github").mouseleave(function() {
    $(this).css({
       transform: 'rotate(0deg)',
       transition: '1s'
    });
});


}); //fermeture ready