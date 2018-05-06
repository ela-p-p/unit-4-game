$(document).ready(function( $ ) {

    var gameStart = randomNum()
        
    function randomNum(){
        var random = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").text(random); 
        return random
    }

    function clickHandler (event) {        
        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#totalScore").text(counter);
                    
        if (counter == gameStart) {
            crystals.off("click");
            wins += 1; 
            $("#wins").text(wins);
            var windowTimeout = setTimeout(function() {
                $("#win-lose").append("<h1>Winner!<h1>");
                    }, 500);
        }

        else if (counter > gameStart) {
            crystals.off("click") ;
            losses += 1;
            $("#losses").text(losses);
            var windowTimeout = setTimeout(function() {
                $("#win-lose").append("<h1>Loser!<h1>"); 
                    }, 500);
        } 

    }
                  
           
    function randomCrystal(){
        var random2 = Math.floor(Math.random() * 12) + 1;
        return random2;      
    }  
        
        var crystals = $(".rounded").each(function (index, elem) {
            var val = randomCrystal()
            $(elem).attr('data-value', randomCrystal())
        });       
        
        var counter = 0;
        var wins = 0;
        var losses = 0;
        $("#totalScore").text(counter);
        $("#wins").text(wins);        
        $("#losses").text(losses);            
        
        $("#reset").on("click", function() { 
            gameStart = randomNum()
            counter = 0 
            $("#totalScore").text(counter);
            crystals.on("click", crystals, clickHandler)
            $("#win-lose").empty() 
         });
   
        crystals.on("click", crystals, clickHandler);//crsytals.on(click)  container


}); //end doc ready
