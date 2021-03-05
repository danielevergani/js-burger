// sezione di inizializzazione variabili
var burgerName = document.getElementById("burger__name");
var calculate = document.getElementById("calculate");

// inserisco evento click

calculate.addEventListener("click",

    function() {

        // condizioni al click

        if ( burgerName.value != "" ){
            
        }
        else{
            alert("scrivi il nume del burger")
        }
    }
);