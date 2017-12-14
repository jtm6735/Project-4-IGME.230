
    function linkHome(){
        window.location = "https://www.google.com/";
    }

    $(document).ready(function(){
        $(".homeButton").click(function(){
            linkHome();
        })
    })

    TweenMax.to("#text", 0.4, {scale:1.2, repeat:-1});

    TweenMax.to(".monFace", 0.6, {scale:1.1, repeat:-1});
    // TweenMax.to(".monFace", 0.2, {rotateX:30});

    function hyroAttack(){
        TweenMax.to(".merFace", 0.4, {left:530});
    }

    function monsterGone(){
        TweenMax.to(".monFace", 0.6, {delay:0.5, opacity:0});
    }

    $(document).ready(function(){
        $(".monFace").click(function(){
            document.getElementById("text").innerHTML = "Hyro attacks the monster!";
            setTimeout(function(){document.getElementById("text").innerHTML = "The monster has been slain!"}, 1200);
            hyroAttack();
            monsterGone();
        });
    });



    // var attack = anime({
    //     targets: '.merFace',
    //     translateX:420,
    //     easing: 'easeInOutSine',
    //     duration: 460,
    //     complete: function(){
    //         anime({
    //             targets:'.monFace',
    //             translateX: 50,
    //             translateY: -20,
    //             duration: 640,
    //             opacity: 0
    //         })
    //     }
    // });