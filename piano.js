var numberOfButtons = document.querySelectorAll(".black").length;
for (var j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".black")[j]
      .addEventListener("click", function () {
        var buttoninnerhtml = this.innerHTML;
        
        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);
        
  
      });
  }
  document.addEventListener("keypress",function(event){
    makesoundtwo(event.key);
    buttonanimation(event.key);
    
});



function makesound(key) {
    switch (key) {
      
            case 'o':

            var and = new Audio('key02.mp3');//wav is also supported
            and.play();//plays the sound
            

            break;

        case 'p':
            var and1 = new Audio('key04.mp3');//wav is also supported
            and1.play();//plays the sound
           
            break;

        case 'q':
            var and2 = new Audio('key07.mp3');//wav is also supported
            and2.play();//plays the sound
            
            break;
        case 'r':
            var and3 = new Audio('key09.mp3');//wav is also supported
            and3.play();//plays the sound
            
            break;
        case 's':
            var and4 = new Audio('key11.mp3');//wav is also supported
            and4.play();//plays the sound
           
            break;
        case 't':
            var and5 = new Audio('key14.mp3');//wav is also supported
            and5.play();//plays the sound
            
            break;
        case 'u':
            var and6 = new Audio('key16.mp3');//wav is also supported
            and6.play();//plays the sound
            
            break;

        case 'v':
            var and7 = new Audio('key19.mp3');//wav is also supported
            and7.play();//plays the sound
            
            break;

        case 'w':
            var and8 = new Audio('key21.mp3');//wav is also supported
            and8.play();
            //plays the sound
            break;
        case 'x':
            var and9 = new Audio('key23.mp3');//wav is also supported
            and9.play();//plays the sound
            
            break;


       


    }
}
function makesoundtwo(key) {
    switch (key) {
        case 'a':

        var snd = new Audio('key01.mp3');//wav is also supported
        snd.play();//plays the sound
        

        break;

    case 'b':
        var snd1 = new Audio('key03.mp3');//wav is also supported
        snd1.play();//plays the sound
        
        break;

    case 'c':
        var snd2 = new Audio('key05.mp3');//wav is also supported
        snd2.play();//plays the sound
        
        break;
    case 'd':
        var snd3 = new Audio('key06.mp3');//wav is also supported
        snd3.play();//plays the sound
        
        break;
    case 'e':
        var snd4 = new Audio('key08.mp3');//wav is also supported
        snd4.play();//plays the sound
        
        break;
    case 'f':
        var snd5 = new Audio('key10.mp3');//wav is also supported
        snd5.play();//plays the sound
        
        break;
    case 'g':
        var snd6 = new Audio('key12.mp3');//wav is also supported
        snd6.play();//plays the sound
     
        break;

    case 'h':
        var snd7 = new Audio('key13.mp3');//wav is also supported
        snd7.play();//plays the sound
       
        break;

    case 'i':
        var snd8 = new Audio('key15.mp3');//wav is also supported
        snd8.play();
       //plays the sound
        break;
    case 'j':
        var snd9 = new Audio('key17.mp3');//wav is also supported
        snd9.play();//plays the sound
       
        break;
    case 'k':
        var snd10 = new Audio('key18.mp3');//wav is also supported
        snd10.play();
        //plays the sound
        break;
    case 'l':
        var snd11 = new Audio('key20.mp3');//wav is also supported
        snd11.play();//plays the sound
       
        break;
    case 'm':
        var snd12 = new Audio('key22.mp3');//wav is also supported
        snd12.play();//plays the sound
        
        break;
    case 'n':
        var snd13 = new Audio('key24.mp3');//wav is also supported
        snd13.play();
        //plays the sound

        break;
        



       


    }
}



function buttonanimation(key)
{
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function()
    {
     activebutton.classList.remove("pressed");
   
    },200)
}
// function buttonanimationtwo(key)
// {
//     var activebuttontwo=document.querySelector("."+key);
//     activebuttontwo.classList.add("presseds");
//     setTimeout(function()
//     {
//      activebuttontwo.classList.remove("presseds");
   
//     },200)
// }