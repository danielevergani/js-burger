// sezione di inizializzazione variabili
var burgerName = document.getElementById("burger__name");
var calculate = document.getElementById("calculate");
var selection = document.getElementsByClassName("selection");
var coupon = ["123", "321", "456"];
var couponInserito = document.getElementById("coupon__input");
var totale = document.getElementById("total__price");
// inserisco evento click

calculate.addEventListener("click",

    function() {

        // condizioni al click

        if ( burgerName.value != "" ){

            var total = 50

            // navigo la lista di checkbox
            for ( var i = 0; i < selection.length; i++ ){


                // verifico condizione con checked
                if (selection[i].checked){
                    total += parseInt(selection[i].value)
                }
            }

            console.log(total - (total*0.2));
            // applicare sconto 20%
            /* for ( i = 0; i < coupon.length; i++ ){
                 if ( couponInserito.value == coupon[i] )
                 total = total * 0.2 
            }*/

            if ( coupon.includes(couponInserito.value) ){
                total = total - (total*0.2)
                var indiceCoupon = coupon.indexOf(couponInserito.value)
                coupon.splice(indiceCoupon, 1)
            }

            document.getElementById("total__price").innerHTML = total.toFixed(2) + " &#8364;";
            totale.className = "price__anim";
            setTimeout(function(){totale.classList.remove("price__anim");}, 1000);
        }
        else{
            alert("scrivi il nume del burger")
        }

       
    }

    
);