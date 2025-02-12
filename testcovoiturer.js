let currentCovoituragesIndex =0
let covoiturages = []
let selectedEcologic = ""

async function loadCovoiturages(ecologic){
    console.log("covoiturage choisi" + ecologic)
    try{
        const response = await fetch ("covoiturages.json")
        const allCovoiturages = await response.json()

        covoiturages= allCovoiturages.filter((c) => c.ecologic === ecologic)
        selectedEcologic = ecologic
        currentCovoituragesIndex = 0

        startQuiz()
    }catch (error) {
        console.log("Erreur lors du chargement des questions", error)
    }
}
function startForm() {
    document.querySelector(".eco-selection").classList.add("hidden")
    document.getElementById("form-container").classList.remove("hidden")
    showQuestion()
}
function showQuestion() {
    if(currentQuestionIndex < questions.length) {
        console.log(questions)
        const questionData = questions[currentQuestionIndex]
        console.log( "question data" + questionData)
        const questionContainer= document.getElementById("quiz-container")

        questionContainer.innerHTML = `
        <div class"question">
        <p> ${questionData.question} <p/>
        <div/>
        <form id="quiz-form">
         ${questionData.options
         .map(
                (option, index)=> `
                <label class="option"> 
                    <input type="radio" name="answer" value="${option}">
                    <span class="custom-radio"></span>
                    ${option}
                </label>
                `
                )
            .join("")}
            <button type="button" onclick="submitAnswer()">Soumettre</button>
        </form>
        `
        }else{
            showFinalResult()
        }
}