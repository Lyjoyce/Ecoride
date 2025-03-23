async function registerUser(){
    const firstname= document.getElementById("firstname").value
    const lastname= document.getElementById("lastname").value
    const email= document.getElementById("email").value
    const password= document.getElementById("password").value

    const url = "http://www.localhost:8081/api/v1/actor/addNewActor"

    if(firstname&&lastname&&email&&password){

        try{
            const userData = {
                firstname : firstname,
                lastname : lastname,
                email : email,
                password : password
            }

            const response = await fetch(url, {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(userData)
            })

            if(response.ok){
                const data = await response.json()
                console.log("userRegistered :", data)
                alert("inscription réussie! Vous pouvez maintenant vous connecter")
                window.location.href="login.html"

            }else{
            const errorData = await response.json()
                console.log("Error :", errorData)
                alert("Erreur lors de l'inscription" + (errorData.message || response.statusText))
                }
            }catch(error){
                console.log("Une erreur s'est produite :", error)
                alert("Une erreur inattendue s'est produite. Veuiller recommencer.")
            }
            }else{
                alert("Veuillez remplir tous les champs")
            }
        }

        /*localStorage fonctionne avec clé,valeur
        localStorage.setItem("firstname", firstname)
        localStorage.setItem("lastname", lastname)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
   */

