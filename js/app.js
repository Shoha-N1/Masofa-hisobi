

var elForm = document.querySelector("#form");
var elInput = document.querySelector("#input-money");
var elSelect = document.querySelector("select-money");
var elHeading = document.querySelector("#heading");


var p = 3.6 ;
var v = 20.1 ;
var m = 70 ;
var s = 800 ;

elForm.addEventListener("submit" , function(evt) {
    evt.preventDefault();
    if (elSelect.value === "p") {
      elHeading.textContent = `${( elInput.value / p)  } Piyoda`;
    }
    else if  (elSelect.value === "v") {
      elHeading.textContent = `${( elInput.value / v)  } Velosiped`;
    }
    else if  (elSelect.value === "m") {
      elHeading.textContent = `${( elInput.value / m)  } Mashina`;
    }
    else if  (elSelect.value === "s") {
        elHeading.textContent = `${( elInput.value / m)  } Samalyot`;
      }
  })