
// Bounce text
// https://codepen.io/GreenSock/pen/Fvjdh?editors=001

    // Declare variable for counter
    let counter = 0;

    function advance(){
        if(counter == 0){
            TweenMax.to(".merFace", 0.4, {scale:1.2, ease:Bounce.easeOut})
            TweenMax.to(".merFace", 0.2, {scale:1, delay:0.4})
            counter += 1;
        }
        else if(counter == 1){
            TweenMax.to(".hyroFace", 0.4, {scale:1.2, ease:Bounce.easeOut})
            TweenMax.to(".hyroFace", 0.2, {scale:1, delay:0.4})
            counter += 1;
        }
        