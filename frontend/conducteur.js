
function showActorMenu(lastname){
    const actornameDisplay= document.getElementById("actorname-display")
    actornameDisplay.textContent= lastname
}
//Unefois le DOM chargé, la fonction récupère l'username ()=>
document.addEventListener("DOMContentLoaded", function(){
    const storedLastname= localStorage.getItem("lastname")
    const isAuthenticated= localStorage.getItem("isAuthenticated")
    if(storedLastname && isAuthenticated === "true"){
        const actornameDisplay= document.getElementById("actorname-display")
        actornameDisplay.textContent= storedLastname 
        showActorMenu(storedLastname)
    }else{
        window.location.href="login.html"
    }
})

document.getElementById("logout-btn").addEventListener("click", function(){
    localStorage.setItem("isAuthenticated",false)
    window.location.href="login.html"
})

/*
const monImage = document.querySelector("img");

let maRequete = new Request("fleurs.jpg");

fetch(maRequete)
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error(`erreur HTTP! statut: ${reponse.status}`);
    }
    return reponse.blob();
  })
  .then(function (reponse) {
    let URLobjet = URL.createObjectURL(reponse);
    monImage.src = URLobjet;
  });
  */