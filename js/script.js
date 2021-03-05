// sezione di inizializzazione variabili
var burgerName = document.getElementById("burger__name");
var calculate = document.getElementById("calculate");
var selection = document.getElementsByClassName("selection");
console.log(selection);
// inserisco evento click

calculate.addEventListener("click",

    function() {

        // condizioni al click

        if ( burgerName.value != "" ){

            // navigo la lista di checkbox
            for ( var i = 0; i < selection.length; i++ ){

                // verifico condizione con checked
                if (selection[i].checked){
                    console.log("ok");
                }
            }
        }
        else{
            alert("scrivi il nume del burger")
        }
    }
);