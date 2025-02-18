    let y = 3;
    let x = y--;
    document.getElementById("demo1");
    document.getElementById("demo2").innerHTML = "Réserver 1 place sur:" + x;
    function disponible(submit) {
        console.log("1 place par personne")
    }
    const seat = document.getElementById("demo2")
    seat.innerHTML=`${y--} place reservée`

    const resultDIV = document.getElementById("result")
    //badkiks pour écrire js dans html avec ${}
    resultDIV.innerHTML = `il reste ${y} places disponibles .`

    //Affichage
let currentTestcovoiturerIndex = 0;
let testcovoiturer = [];
async function loadTestcovoiturer(){
    try{
        const response = await fetch("testcovoiturer.json")
        testcovoiturer = await response.json()
        console.log()
    }catch(error){
        console.log ("erreur lors du chargement", error)
    }
}

