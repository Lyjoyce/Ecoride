
/*function showActorMenu(lastname){
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
    */