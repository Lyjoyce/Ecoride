let currentCovoituragesIndex =0
let covoiturages = []
let selectedEnergy = ""
const URL = "https://bac8bd94-cbae-4bad-9347-87dedf026e61.mock.pstmn.io/api/AllCovoiturages"
async function loadCovoiturages(energy){
    console.log("energy choisie" + energy)
    try{
        const response = await fetch ("testcovoiturer.json")
        const allCovoiturages = await response.json()

        covoiturages= allCovoiturages.filter((c) => c.energy === energy)
        selectedEnergy = energy
        currentCovoituragesIndex = 0

        start()
    }catch (error) {
        console.log("Erreur lors du chargement", error)
    }
}

/*
<html>
<body>

<h1>JavaScript Operators</h1>
<h2>The -- Operator</h2>

<p>y = 5, calculate x = y--:</p>

<p id="demo1"></p>
<p id="demo2"></p>

<p><strong>Note:</strong> y is decremented after it is assigned to x (post-decremented).</p>.

<script>
let y = 5;
let x = y--;
document.getElementById("demo1").innerHTML = "Value of y: " + y;
document.getElementById("demo2").innerHTML = "Value of x: " + x;
</script>

</body>
</html>
*/

