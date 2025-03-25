function writteNotice(){
    const firstname= document.getElementById("firstname").value
    const email= document.getElementById("email").value
    const notice= document.getElementById("notice").value

    if(firstname && email && notice){
        /*localStorage fonctionne avec clé,valeur*/
        localStorage.setItem("firstname", firstname)
        localStorage.setItem("email", email)
        localStorage.setItem("notice", notice)

        alert("Vous avez écris un avis. Confirmer pour nous le soumettre")
    }else{
        alert("Veuillez remplir tous les champs")
    }
}
//function addNotice()

function addNotice(){
    const firstname= document.getElementById("firstname").value
    const email= document.getElementById("email").value
    const notice= document.getElementById("notice").value

    const storedFirstname=localStorage.getItem("firstname")
    const storedEmail=localStorage.getItem("email")
    const storedNotice=localStorage.getItem("notice")

    if(firstname===storedFirstname && email===storedEmail && notice===storedNotice){
        localStorage.setItem("isSubmit", true)
        alert ("Merci pour votre avis")
        window.location.href="index.html"
    }else{
        alert("Non je ne confirme pas")
    }
}
/*
//function checkAuth(){
    const isAuthenticated =localStorage.getItem("isAuthenticated")
    if(isAuthenticated !== "true"){
        alert("Veuillez vous connecter") 
        window.location.href="login.html"
    }
}
*/

