$(".drum").click(function(){
    var mouseClick = this.innerHTML;
    SwitchCheck(mouseClick);
    keyAnimation(mouseClick);
});

$(document).keypress(function(event){
    var keyPressed = event.key;
    SwitchCheck(keyPressed);
    keyAnimation(keyPressed);
})
function SwitchCheck (input){
    switch(input){
        case "w" :
             var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();
        break;
        case "a" :
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play(); 
        break;
        case "s" :
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play(); 
        break;
        case "d" :
            var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play(); 
        break;
        case "j" :
            var snare = new Audio('sounds/snare.mp3');
                snare.play(); 
        break;
        case "k" :
            var crash = new Audio('sounds/crash.mp3');
        crash.play(); 
        break;
        case "l" :
            var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        break;

        default : console.log("No player is not pressed")
    }}
    function keyAnimation(animateKey) {
        $("."+animateKey).addClass("pressed");
        setTimeout(function(){
        $("."+animateKey).removeClass("pressed");
        },100)   
        $("."+animateKey).addClass("blink");
        setTimeout(function(){
            $("."+animateKey).removeClass("blink");
        },100)
    }