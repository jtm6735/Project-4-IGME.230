

function nextPage(){
    window.location = "https://www.google.com/";
}

$(document).ready(function(){
    $(".town1").click(function(){
        document.getElementById("text").innerHTML="That is not the mountain. Go to the mountain.";
        var town1Move = anime({
            targets: '.merFace',
            translateX: -40,
            translateY: -90,
            complete: function(){
                anime({
                    targets:'.merFace',
                    translateX: 10,
                    translateY: 10
                });
            }
        });  
    });
});

$(document).ready(function(){
    $(".town2").click(function(){
        document.getElementById("text").innerHTML="That is not the mountain. Go to the mountain.";
        var town1Move = anime({
            targets: '.merFace',
            translateX: 400,
            duration: 2000,
            translateY: -40,
            complete: function(){
                anime({
                    targets:'.merFace',
                    translateX: 10,
                    translateY: 10
                });
            }
        });  
    });
});

$(document).ready(function(){
    $(".mountButton").click(function(){
        document.getElementById("text").innerHTML="Hyro went to the mountains!";
        setTimeout(function(){window.location = "https://www.google.com/";}, 2500);
        var town1Move = anime({
            targets: '.merFace',
            translateX: 350,
            duration: 2000,
            translateY: -190
        });  
    });
});

var shake = anime({
    targets: '.town1, .town2',
    scale:[1, 1.3],
    loop: true
});

var mountShake = anime({
    targets: '.mountButton',
    scale:[1.1, 1.4],
    loop: true
});
    