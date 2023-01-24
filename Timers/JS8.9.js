


function countDown(num){
    let timer = setInterval(function(){
        num--;
        // note cannot use num - 1 in here and I have no clue why
        if(num <= 0) {
        clearInterval(timer);
        console.log('DONE!');
        }
        else {
        console.log(num);
        }
    },1000) 
}

// note this was a pain in the butt because it was not running correctly in the browser. It was taking way way too long!!


function randomGame() {
    let counter = 0;
    let randomNum;
    //let randomNum = Math.random();
    // Note you did this one mostly on your own but you needed to define randomNum but put it equal to Math.Random within the function!!
    let chooseRanNum = setInterval(function() {
        randomNum = Math.random();
        counter++; 
        console.log(counter)
        if(randomNum > .75) {
            clearInterval(chooseRanNum);
            console.log("It took " + counter + " try/tries.");
        }  
        
    }, 1000)
}