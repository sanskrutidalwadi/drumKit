
for( var i=0; document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {

        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    });
    
}

 
document.addEventListener("keydown",(e) => {
            makeSound(e.key);

            buttonAnimation(e.key);});



function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break; 

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;  

        case "d":
            var audio1 = new Audio('sounds/tom-4.mp3');
            audio1.play();
            break;    

        case "j":
            var audio2 = new Audio('sounds/crash.mp3');
            audio2.play();
            break;   

        case "k":
            var audio3 = new Audio('sounds/kick-bass.mp3');
            audio3.play();
            break;     
            
         case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;    

        default:
            console.log(buttonInnerHtml)
            break;
    }    

}


function buttonAnimation(currentKey)
{
    var activeKey = document.querySelector("."+ currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
     }, 100);
}





