const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "HyperText Makeup Language",
        c: "Hey Text Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },

    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },

    {
        question: "Q3: What is the Extension javascript file?",
        a: ".java",
        b: ".js",
        c: ".jscript",
        d: ".javascript",
        ans: "ans2"
    },

    {
        question: "Q4: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },

    {
        question: "Q5: What tag is used for table title in html?",
        a: "title tag",
        b: "caption tag",
        c: "thead tag",
        d: "tt tag",
        ans: "ans2"
    },

    {
        question: "Q6: In CSS id and class is represented with?",
        a: "#=id and .=class",
        b: ".=id and #=class",
        c: "$=id and &=class",
        d: "i=id and c=class",
        ans: "ans1"
    },

    {
        question: "Q7: which language is the Skeleton of the website?",
        a: "Python",
        b: "Javascript",
        c: "HTML",
        d: "CSS",
        ans: "ans3"
    },

    {
        question: "Q8: CSS is used for?",
        a: "For styling the website",
        b: "For Making Webside Functional",
        c: "For making website live",
        d: "For securing website from hackers",
        ans: "ans1"
    },

    {
        question: "Q9: What is the javascript?",
        a: "Programing Langauge",
        b: "Scripting Programing Language",
        c: "Stylig Language",
        d: "Machine Learning Language",
        ans: "ans2"
    },

    {
        question: "Q10: Whhat is bootstrap 5?",
        a: "Programing Language",
        b: "Code Editor",
        c: "Backend Library",
        d: "Frontend Library",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#show-score')

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    
    const questionList = quizDB[questionCount];
     
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

        
    });

    return answer;
}

const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    
    questionCount++;


    
    deSelectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} </h>
            <button class="btn" onclick="location.reload();">play again</button>

        `

        showScore.classList.remove('score-area');
    }
    
});



