function submit() {
    const correctAnswers = {
        q1: "seatA",
        q1: "seatB",
        q1: "seatC",
    }
    const seatA = document.getElementById("seatA")
    /*let seat = 0
    /*for (const question in correctAnswers) {
        const userAnswers = form[question-form].value
        if (userAnswers === correctAnswers[question-form]) {
            seat++
        }
    }*/

    const seat = document.getElementById("seatA")
    seatA.innerHTML=`${seatA} est reserve`

    const resultDIV = document.getElementById("result")
    //badkiks pour écrire js dans html avec ${}
    resultDIV.innerHTML = `reserver ${seatA} place .`


}

let currentQuestionIndex = 0;
let questions = [];
async function loadQuestions(){
    try{
        const response = await fetch("questions.json")
        questions = await response.json()
        console.log(questions)
    }catch(error){
        console.log ("erreur lors du chargement des questions", error)
    }
}

