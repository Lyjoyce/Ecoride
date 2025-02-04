function registerUser(){
    const firstname= document.getElementById("firstname").value
    const lastname= document.getElementById("lastname").value
    const email= document.getElementById("email").value
    const password= document.getElementById("password").value

    if(firstname&&lastname&&email&&password){
        /*localStorage fonctionne avec clé,valeur*/
        localStorage.setItem("firstname", firstname)
        localStorage.setItem("lastname", lastname)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
   
        alert("inscription réussie! Vous pouvez maintenant vous connecter")
        window.location.href="login.html"
    }else{
        alert("Veuillez remplir tous les champs")
    }
}


