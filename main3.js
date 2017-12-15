
    function linkHome(){
        window.location = "https://people.rit.edu/jtm6735/igme230/proj4/";
    }

    $(document).ready(function(){
        $(".homeButton").click(function(){
            linkHome();
        })
    })

    TweenMax.to("#text", 0.4, {scale:1.2, repeat:-1});

    TweenMax.to(".monFace", 0.6, {scale:1.1, repeat:-1});

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