
     function mySeat1() {
let text = "";
for (let seat1 = 1; seat1 < 2; seat1++) {
  if (seat1 === 2) { break; }
  text += "Vous êtes le participant" + seat1 + "<br>";
}
document.getElementById("seat1").innerHTML = text;
document.getElementById("12pay1").innerHTML = "<button onclick=>payer SEAT1 : 12 credits</button>" ;
     }

     function mySeat2() {
let text = "";
for (let seat2 = 2; seat2 < 3; seat2++) {
  if (seat2 === 3) { break; }
  text += "Vous êtes le participant " + seat2 + "<br>";
}
document.getElementById("seat2").innerHTML = text;
document.getElementById("12pay2").innerHTML = "<button onclick=>payer SEAT2 : 12 credits</button>" ;
     }
     function mySeat3() {
let text = "";
for (let seat3 = 3; seat3 < 4; seat3++) {
  if (seat3 === 4) { break; }
  text += "Vous êtes le participant " + seat3 + "<br>";
}
document.getElementById("seat3").innerHTML = text;
document.getElementById("12pay3").innerHTML = "<button onclick=>payer SEAT3 : 12 credits</button>" ;
     }

    function checkCredits() {
      const CREDIT = document.getElementById("id12");
      if (!CREDIT.checkValidity()) {
        document.getElementById("checkPrice").innerHTML = CREDIT.validationMessage;
      } else {
        document.getElementById("checkPrice").innerHTML = "CREDIT OK";
      } 
    } 

let text1 = "emailseat1";
let text2 = "carloop-id :";
let text3 = "seat1";
let text4 = text1 + " " + text2 + "" + text3;
document.getElementById("carloopseat").innerHTML = text4;

function mySeat1re() {
    let text = "";
    for (let seat1re = 1; seat1re < 2; seat1re++) {
      if (seat1re === 2) { break; }
      text += "Vous n'êtes plus participant" + seat1re + "<br>";
    }
    document.getElementById("seat1re").innerHTML = text;
    document.getElementById("-12payre").innerHTML = "<button onclick=>payer SEAT1 : -12 credits</button>" ;
         }
    
         function mySeat2re() {
    let text = "";
    for (let seat2re = 2; seat2re < 3; seat2re++) {
      if (seat2re === 3) { break; }
      text += "Vous n'êtes plus participant " + seat2re + "<br>";
    }
    document.getElementById("seat2re").innerHTML = text;
    document.getElementById("-12pay2").innerHTML = "<button onclick=>payer SEAT2 : -12 credits</button>" ;
         }
         function mySeat3re() {
    let text = "";
    for (let seat3re = 3; seat3re < 4; seat3re++) {
      if (seat3re === 4) { break; }
      text += "Vous n'êtes plus participant " + seat3re + "<br>";
    }
    document.getElementById("seat3re").innerHTML = text;
    document.getElementById("-12pay3").innerHTML = "<button onclick=>payer SEAT3 :-12 credits</button>" ;
         }

         function checkReCredits() {
            const RECREDIT = document.getElementById("id-12");
            if (!RECREDIT.checkValidity()) {
              document.getElementById("annulerPrice").innerHTML = RECREDIT.validationMessage;
            } else {
              document.getElementById("annulerPrice").innerHTML = "RECREDIT OK";
            } 
          } 


