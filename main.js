

    // Declare variable for counter
    let counter = 0;

    // Set the initial onclick function for the button
    document.getElementById("clicker").onclick = advance;

    // Create method for using button as a link
    function linkChange(){
        window.location = "https://www.google.com/";
    }

    function linkHome(){
        window.location = "https://www.google.com/";
    }

    $(document).ready(function(){
        $(".homeButton").click(function(){
            linkHome();
        })
    })

    function advance(){
        if(counter == 0){
            // TweenMax.to(".merFace", 0.4, {scale:1.2, ease:Bounce.easeOut})
            // TweenMax.to(".merFace", 0.2, {scale:1, delay:0.4})
            document.getElementById("text").innerHTML="Ahem, now let the short story begin.";
            counter += 1;
        }
        else if(counter == 1){
            TweenMax.to(".merFace", 0.4, {scale:1.2, ease:Bounce.easeOut});
            TweenMax.to(".merFace", 0.2, {scale:1, delay:0.4})
            document.getElementById("text").innerHTML = "Ah, what a long day of monster hunting. Bartender, can I get one on the house?";
            counter += 1;
        }
        else if(counter == 2){
            TweenMax.to(".hyroFace", 0.6, {scale:1.1, ease:Bounce.easeOut});
            TweenMax.to(".hyroFace", 0.2, {scale:1, delay:0.2})
            document.getElementById("text").innerHTML = "I'm not a bartender...";
            counter += 1;
        }
        else if(counter == 3){
            // TweenMax.to(".hyroFace", 0.4, {scale:1.1, ease:Bounce.easeOut})
            // TweenMax.to(".hyroFace", 0.2, {scale:1, delay:0.2})
            document.getElementById("text").innerHTML = "The bartender is, as one would say, missing.";
            counter += 1;
        }
        else if(counter == 4){
            TweenMax.to(".merFace", 0.2, {scale:1.4, ease:Bounce.easeOut});
            TweenMax.to(".merFace", 0.2, {scale:1, ease:Bounce.easeOut, delay:0.4});
            document.getElementById("text").innerHTML = "What!? I am thirsty and demand ale. Where is the bartender in this trying time?";
            counter += 1;
        }
        else if(counter == 5){
            TweenMax.to(".hyroFace", 0.4, {scale:1.1, ease:Bounce.easeOut});
            TweenMax.to(".hyroFace", 0.2, {scale:1, delay:0.2});
            document.getElementById("text").innerHTML = "Well, you seem to have missed a monster in your hunt, a big one at that.";
            counter += 1;
        }
        else if(counter == 6){
            TweenMax.to(".merFace", 0.3, {scale:1.3, ease:Bounce.easeOut});
            TweenMax.to(".merFace", 0.1, {scale:1, ease:Bounce.easeOut, delay:0.3});
            document.getElementById("text").innerHTML = "Me? Hyro the Knight, missed a monster?";
            counter += 1;
        }
        else if(counter == 7){
            TweenMax.to(".merFace", 0.6, {scale:1.1, ease:Bounce.easeOut});
            TweenMax.to(".merFace", 0.2, {scale:1, delay:0.2});
            document.getElementById("text").innerHTML = "Yea, no that's completely possible.";
            counter += 1;
        }
        else if(counter == 8){
            TweenMax.to(".merFace", 0.4, {rotationY:180});
            document.getElementById("text").innerHTML = "Well, I shall continue my monster slaying quest now! I shall return with the booze!";
            counter += 1;
        }
        else if(counter == 9){
            TweenMax.to(".merFace", 0.2, {left:0});
            TweenMax.to(".merFace", 0.2, {opacity:0});
            counter += 1;
        }
        else if(counter == 10){
            TweenMax.to(".hyroFace", 0.6, {scale:1.1, ease:Bounce.easeOut});
            TweenMax.to(".hyroFace", 0.2, {scale:1, delay:0.2});
            document.getElementById("text").innerHTML = "What an interesting fellow. Jokes on him though, there's free drinks right here.";
            counter += 1;
        }
        else if(counter == 11){
            document.getElementById("text").innerHTML = "Click the button to go to the next page!";
            document.getElementById("clicker").onclick = linkChange;
        }

        
        
    }


