const diceBtn = document.getElementById("dice-button");
const randomAdvice = document.getElementById("random-advice");
const numberCount = document.getElementById("number-count");

const data = [
    {
    "id": 1,
    "advice": "Make your story bigger than just yourself. Find ways to contribute something positive to others as often as possible. Give and give and give. Aim for the greater good with the actions you take everyday."
    },
    {
    "id": 2,
    "advice": "What you appreciate, appreciates."
    },
    {
    "id": 3,
    "advice": "Good intentions matter, but your actions will define you."
    },
    {
    "id": 4,
    "advice": "Invest in those who invest in you. People who show up for you should be cherished."
    },
    {
    "id": 5,
    "advice": "It’s far more important to figure out what you don’t like rather than what you do."
    },
    {
    "id": 6,
    "advice": "Invest early and often."
    },
    {
    "id": 7,
    "advice": "When you graduate, all people talk about is getting a stable job and salary immediately. No one talks about the million other potential paths to take after graduating. Explore these fully, even though no one is talking about them."
    },
    {
    "id": 8,
    "advice": "The biggest mistake you can make in life is thinking you have enough time."
    },
    {
    "id": 9,
    "advice": "Enjoy the little moments, as cliche as that sounds. Time really does fly. We look back one year ago and it feels like yesterday, but in reality so much has transpired. Grasp the small moments along the way and realize they won’t be there forever."
    },
    {
    "id": 10,
    "advice": "Relax and see where life takes you. This doesn’t mean “be lazy.” This means you don’t have to know exactly where you’re going or how you’re getting there. It takes time to discover what you love and what you hate. Years, sometimes decades. Don’t expect to know all the answers in your 20s."
    }
]

diceBtn.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * data.length);
   
    const randomText = data[randomIndex];
   
    const adviceId = randomText.id;
    const adviceText = randomText.advice;

    numberCount.textContent = `# ${adviceId}`;
    randomAdvice.textContent = `"${adviceText}"`; 
});

function fetchData(){
    fetch("JSON.js")
    .then (response => response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.error(error);
    })
}
fetchData()