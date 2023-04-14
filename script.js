//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 20;//

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
       sendMessage();
    }

  }, 1000); 
}

function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
 imgEl.setAttribute("src", "images/image_1.jpg");
 mainEl.appendChild(imgEl);

}

setTime();
var questions = [
  {
    question: "What tag is needed to create an Order List in HTML file?",
    answers: [
    {text: " < h1 >", correct: false},
    {text: " < p  > ", correct: false},
    {text: " < ol >", correct: true},
     ]
    }, 
    {
      question: "What does the < p > tag represent in HTML file?",
      answers: [
        {text: "Paragraph", correct: true},
        {text: "Parenthesis", correct: false},
        {text: "Picture", correct: false},
         ]
    },
    {
      question: "Every element on the HTML is composed of what?",
      answers: [
        {text: "circles", correct: false},
        {text: "boxes", correct: true},
        {text: "numbers", correct: false},
        ]
    },
    {
      question: "what tag is used to create a hyperlink in HTMl?",
      answers: [
        {text: "h1", correct: false},
        {text: "a", correct: true},
        {text: "link", correct: false},
         ]
    },
    {
      question: "How many Global Atributes are in HTML",
      answers: [
        {text: "4", correct: true},
        {text: "1", correct: false},
        {text: "10", correct: false},
         ]
    }
];
 const questionEL = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex= 0;
 let score = 0;

 function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
 }

 function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionEL.innerHTML = questionNo + ". " + currentQuestion.
  question;
  
  currentQuestion.answers.forEach(answer => { 
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add('btn');
  answerButtons.appendChild(button);
  if(answer.correct){
      button.dataset.correct = answer.correct;
  }
    button.addEventListener('click' , selectAnwser);
  

    });
 }
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
   answerButtons.removeChild(answerButtons.firstChild);
  
  }
  
}

 function selectAnwser(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if(isCorrect){
     selectedBtn.classList.add("correct");
     score++;
  }else{
       selectedBtn.classList.add('incorrect');
  }
  nextButton.style.display = 'block';
  var nextBtn = document.createElement("button")
 
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    
    }
    button.disabled = true;
  }); 
nextBtn.classList.display = "block";
}


startQuiz();