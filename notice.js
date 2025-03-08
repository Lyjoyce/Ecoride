function notice(){
    const firstname= document.getElementById("firstname").value
    const email= document.getElementById("email").value
    const notice= document.getElementById("notice").value

    if(firstname&&lastname&&email&&password){
        /*localStorage fonctionne avec clé,valeur*/
        localStorage.setItem("firstname", firstname)
        localStorage.setItem("email", email)
        localStorage.setItem("notice", notice)

        if(firstname===storedFirstname && email===storedEmail && notice===storedNotice){
            localStorage.setItem("avis soumis", false)
            window.location.href="index.html"
        }else{
            alert("votre avis a bien été soumis")
        }
       // window.location.href="login.html"
    }else{
        alert("Veuillez remplir tous les champs")
    }
}
