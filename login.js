//LOGIN expliquer la f, ses paramètres,types, ce qu'elle renvoie
function loginActor(){
    const firstname= document.getElementById("login-firstname").value
    const lastname= document.getElementById("login-lastname").value
    const email= document.getElementById("login-email").value
    const password= document.getElementById("login-password").value

    const storedFirstname=localStorage.getItem("firstname")
    const storedLastname=localStorage.getItem("lastname")
    const storedEmail=localStorage.getItem("email")
    const storedPassword=localStorage.getItem("password")

    if(firstname===storedFirstname && lastname===storedLastname && email===storedEmail && password===storedPassword){
        localStorage.setItem("isAuthenticated", true)
        window.location.href="index.html"
    }else{
        alert("nom d'utilisateur ou mot de pass incorrect")
    }
}

function checkAuth(){
    const isAuthenticated =localStorage.getItem("isAuthenticated")
    if(isAuthenticated !== "true"){
        alert("Veuillez vous connecter") 
        window.location.href="login.html"
    }
}