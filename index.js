



//*                 Energy Counting SECTION                *//
var currentE = 3;
var runningE = 3;
var prev = 3;

var neg = 0
var neg1 = 0
var neg2 = 0
var ifUndoISunable;
var roundS =  document.querySelector(".rounds").innerHTML;
var roundNumber = document.querySelector("span").innerHTML;


//BLOOD MOON 
function bloodMoon() {
    if (roundNumber>=10) {
        document.body.style.backgroundImage = "url('images/bloodmoon.jpeg')";
    }
    else{
        document.body.style.backgroundImage = "url('images/arena.jpg')";
    }
}




//this function is for enable and disable the undo button
function undoTrue() {
    ifUndoISunable = true;
    if (ifUndoISunable===true) {
        document.querySelector(".undoE").setAttribute("disabled", true);
    } 
}
function undoFalse() {
    ifUndoISunable = false;
    if (ifUndoISunable===false) {
        document.querySelector(".undoE").removeAttribute("disabled");
    } 
}

//BACK TO ZERO THE MINUS BUTTON

function backTozeroEnergy() {
    document.querySelector(".eu-minus").innerHTML = neg = 0;
    document.querySelector(".eg-minus").innerHTML = neg1 = 0;
    document.querySelector(".ed-minus").innerHTML = neg2 = 0;
}
//BACK TO ZERO THE MINUS CARD BUTTON   
function backTozeroCard() {
    document.querySelector(".uc-minus").innerHTML = usedCardNumber = 0;
    document.querySelector(".dc-minus").innerHTML = drawCardNumber = 0;
    document.querySelector(".ddc-minus").innerHTML = discardCardNumber = 0;
}    


undoTrue();

//*First                                       *//


//undo 
document.querySelector(".undoE").addEventListener("click", function(){
    undoTrue();
        
    
   
    document.querySelector("#score").innerHTML = prev;
    
    if(roundNumber===1){
        roundNumber = 1;
    }
    else{
        document.querySelector("span").innerHTML = roundNumber = roundNumber - 1;
    }
    
    document.querySelector(".current-card").innerHTML = prevCardNumber;
    backTozeroEnergy();
    backTozeroCard();
    runningE = prev;
    currentE = prev;
    currentCardNumber = prevCardNumber;
    //bloodmoon turn
    bloodMoon();

});
// reset all
document.querySelector(".resetE").addEventListener("click", function(){
    undoTrue();
    backTozeroEnergy();
    backTozeroCard();
    
    document.querySelector("#score").innerHTML = runningE=3;
    document.querySelector("span").innerHTML = roundNumber = 1;
    currentCardNumber =  document.querySelector(".current-card").innerHTML = 6;
    currentE = runningE;
    //bloodmoon turn
    bloodMoon();
    
    
});

//* MIDDLE                                       *//
// energy used

document.querySelector(".eu-plus").addEventListener("click", function() {
    
    neg = neg + 1;
  runningE = runningE - 1;

  if (runningE <= 0) {
    runningE = 0;
  }
  document.querySelector("#score").innerHTML = runningE;

  if (neg > currentE) {
    neg = currentE;
  }
  document.querySelector(".eu-minus").innerHTML = neg;

});

document.querySelector(".eu-minus").addEventListener("click", function(){
   neg = parseInt(neg);
   
   
   if (neg===0) {
        document.querySelector("#score").innerHTML = runningE;
        document.querySelector(".eu-minus").innerHTML = neg;
   }
   
    else {
        
        runningE++;
        neg--;
        document.querySelector("#score").innerHTML = runningE;
        document.querySelector(".eu-minus").innerHTML = neg;
   }

  


});

// energy gained
document.querySelector(".eg-plus").addEventListener("click", function(){
    if (runningE===-1 ||  runningE===10 ||neg1 === 10) {
        document.querySelector("#score").innerHTML =  runningE;
        document.querySelector(".eg-minus").innerHTML = neg1;
    } else {
        runningE++;
        neg1++;
        document.querySelector(".eg-minus").innerHTML = neg1;
        document.querySelector("#score").innerHTML =  runningE; 
    }
});

document.querySelector(".eg-minus").addEventListener("click", function(){
    neg1 = parseInt(neg1);
    if (runningE ===0) {
        
        document.querySelector("#score").innerHTML =  runningE;
        if (neg1===0) {
            document.querySelector(".eg-minus").innerHTML = neg1;
        }
        else{
            neg1--;
            document.querySelector(".eg-minus").innerHTML = neg1;
        }
      
    } else {
        if (neg1===0) {
            document.querySelector(".eg-minus").innerHTML = neg1;
        } else {
            runningE--;
            neg1--;
            document.querySelector("#score").innerHTML =  runningE;
            document.querySelector(".eg-minus").innerHTML = neg1;
        }
        
    }
});

// energy destroyed

document.querySelector(".ed-plus").addEventListener("click", function(){

    if (runningE ===0) {
        document.querySelector("#score").innerHTML =  runningE;
        document.querySelector(".ed-minus").innerHTML = neg2;  
    }
    else{
        runningE--;
        neg2++;
        document.querySelector(".ed-minus").innerHTML = neg2;
        document.querySelector("#score").innerHTML =  runningE; 
        }   
});


document.querySelector(".ed-minus").addEventListener("click", function(){
   
    neg2 = parseInt(neg2);
    if (neg2 === 0) {
         document.querySelector("#score").innerHTML =  runningE;
         document.querySelector(".ed-minus").innerHTML = neg2;
    }
    
     else {
         
        runningE++;
         neg2--;
         document.querySelector("#score").innerHTML =  runningE;
         document.querySelector(".ed-minus").innerHTML = neg2;
    }
 
 });


 //END TURN  
document.querySelector(".end-turn").addEventListener("click", function () {
    undoFalse();
    prev = currentE;
    
    currentE = runningE;
    currentE = parseInt(currentE);
    



    //*         CARDS FUNCTION EVERY END TURN             **//
    //reset Card Counter
    prevCardNumber = currentCardNumber;

    
    
        
        if (currentCardNumber<=usedCardNumber || currentCardNumber<=discardCardNumber) {
            currentCardNumber = 0;
            currentCardNumber = currentCardNumber + 3;

        } 

        else {
            currentCardNumber = currentCardNumber - usedCardNumber;
            currentCardNumber = currentCardNumber - discardCardNumber;
            currentCardNumber = currentCardNumber + 3;
            
        }
        
        currentCardNumber = currentCardNumber + drawCardNumber;
        

        if (currentCardNumber > 12) {
            currentCardNumber = 12;
        }


        document.querySelector(".current-card").innerHTML = currentCardNumber;
    
        backTozeroCard();
    

   //*                                                     *//
    

    if (currentE===10) {
        document.querySelector("#score").innerHTML = currentE;
        
    }
    else{
        if (currentE===9) {
            currentE++;
            document.querySelector("#score").innerHTML = currentE;
        }
        else{
            currentE =currentE + 2;
            document.querySelector("#score").innerHTML = currentE;
        }
    }
    
    roundNumber++;
    //bloodmoon turn
    bloodMoon();
    

    document.querySelector(".rounds").innerHTML = roundS;
    document.querySelector("span").innerHTML = roundNumber;

    //reset all energy minus
    backTozeroEnergy();
    
    runningE = currentE;
    
    
    
});



//*            CARDS COUNTING SECTION                          *//
var currentCardNumber = parseInt(document.querySelector(".current-card").innerHTML);
var prevCardNumber = 6;
var usedCardNumber = parseInt(document.querySelector(".uc-minus").innerHTML);
var drawCardNumber = parseInt(document.querySelector(".dc-minus").innerHTML);
var discardCardNumber = parseInt(document.querySelector(".ddc-minus").innerHTML);

// this function will show and hide the card calculator  
document.querySelector(".current-card").addEventListener("click", function(){
    var ifVisible = document.querySelector(".hidden-card-counter").style.display;

    if (ifVisible === 'block') {
        document.querySelector(".hidden-card-counter").style.display = "none";
    } else {
        document.querySelector(".hidden-card-counter").style.display = "block";
    }
});




// USED CARD
document.querySelector(".uc-plus").addEventListener("click", function(){   
    usedCardNumber++;
    document.querySelector(".uc-minus").innerHTML = usedCardNumber;
});


document.querySelector(".uc-minus").addEventListener("click", function(){ 
    if (usedCardNumber === 0) {
        
    }
    else{
        usedCardNumber--;
        document.querySelector(".uc-minus").innerHTML = usedCardNumber;
    }
    
});


//DRAW CARD

document.querySelector(".dc-plus").addEventListener("click", function(){
    drawCardNumber++;
    document.querySelector(".dc-minus").innerHTML = drawCardNumber;
});

document.querySelector(".dc-minus").addEventListener("click", function(){
    if (drawCardNumber === 0) {
        
    }
    else{
        drawCardNumber--;
        document.querySelector(".dc-minus").innerHTML = drawCardNumber;
    }
});


//DISCARD CARD

document.querySelector(".ddc-plus").addEventListener("click", function(){
    discardCardNumber++;
    document.querySelector(".ddc-minus").innerHTML = discardCardNumber;
});

document.querySelector(".ddc-minus").addEventListener("click", function(){
    if ( discardCardNumber === 0) {
        
    }
    else{
        discardCardNumber--;
        document.querySelector(".ddc-minus").innerHTML =  discardCardNumber;
    }
});



  


