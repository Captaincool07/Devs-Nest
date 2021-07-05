const Quiz=[
 {  question: "Q1 HTML is what type of language ?",
    a: "Scripting Language",
    b: "Markup Language",
    C: "Programming Language",
    d: "Network Protocol",
    ans: "ans2"
},
{   question: "HTML uses",
    a: "User defined tags ",
    b: "Pre-specified tags",
    C: "Fixed tags defined by the language",
    d: "Tags only for linking",
    ans:  "ans3" 
}];
const question=document.querySelector('.question');
const option1 =document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit= document.querySelector('#submit');
const answers =document.querySelectorAll('.answer');
const showScore =document.querySelector('#showScore');

let questionCount=0;
let score =0;
const LoadQuestion = () =>{
    const  questionList= Quiz[questionCount];
   question.innerText =Quiz[questionCount].question;
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.C;
   option4.innerText = questionList.d;

};

LoadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;

        };

    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked =false)
};

submit.addEventListener('click', () =>{
    const checkAnswer = getCheckAnswer();
   
    if(checkAnswer == Quiz[questionCount].ans){
        score++;
    }; 
    
    questionCount++;

    deselectAll();

    if(questionCount  < Quiz.length){
        LoadQuestion();

    }else{
        showScore.innerHTML = `
        <h3> You Scored  ${score}/${Quiz.length} </h3>
        <button class ="btn"  onclick ="location.reload()">Play Again </button>`;
        showScore.classList.remove('ScoreArea');

    }
});


