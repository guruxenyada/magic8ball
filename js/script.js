// const [form] = document.forms;
// const [questionValidationMsg] = document.querySelectorAll('.validationMsg');

// function isQuestionValid(question){
//     return question.length > 10 && question.length < 100;
// }
// function getElement(){
//     return {
//         question(e){
//             e.target.classList.toggle('border-danger', !isQuestionValid(e.target.value));
//             questionValidationMsg.textContent = isQuestionValid(e.target.value) ? null : 'Question must be at least 10 to 100 characters long';
//         }
//     }[name] (e);
// }
// function handleInput(e){
//     const { question } = form
//     const { name } = e.target;
//     SVGLinearGradientElement(name, e);
// }
// document.addEventListener('DOMContentLoaded', () => {
//     form.question.addEventListener('input', handleInput);
//     form.addEventListener('submit', e=> {
//         e.preventDefault();
//         const submittedQuestion = question.value;
//         const resultElement = document.getElementById('result');
//         const icon = document.getElementById('icon');
//         resultElement.textContent = 'Your question has been submitted successfully: ${submittedQuestion}';

//     });
// });
const replies = [
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Better not tell you",
  "Cannot predict now",
  "Ask again",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

let form = document.querySelector("#question");
let button = document.querySelector("button");
let counter = 0;
function ask() {
  let reply = replies[Math.floor(Math.random()*replies.length)]
  console.log(question.value);
counter++;
if (counter === 1){
     document.getElementById('result').innerHTML = `${reply}`
}
if (counter === 2){
    document.getElementById('result').innerHTML = ``
    form.value = ''
    counter = 0
}
    }

button.addEventListener("click", ask);
