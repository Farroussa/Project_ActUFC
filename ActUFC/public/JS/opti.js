
const quizData = [
    {
        question: "Who is the first champ champ of UFC history ?",
        choices: ["Connor Mcgregor", "Henri Cejudo","Jon Jones"],
        correctAnswer: 0
    },
    {
        question: "How long is one UFC round ?",
        choices: ["3 min", "2 min", "5 min"],
        correctAnswer: 2
    },
    {
        question: "What is the size of an octagon from an edge to an other ?",
        choices: ["3 meters", "8 meters", "6 meters"],
        correctAnswer: 1
    },
    {
        question: "How many rounds for the belt fights ?",
        choices: ["3 rounds", "4 rounds", "5 rounds"],
        correctAnswer: 2
    },
    {
        question: "Can we throw knees when the fight happens on the ground ?",
        choices: ["Yes","No"],
        correctAnswer: 1
    },
    {
        question: "Who is the president of the organization ?",
        choices: ["Jeff Bezos","Dana White","Mike Tyson"],
        correctAnswer: 1
    }

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const reponseElement=document.getElementById('reponse');
const scoreElement = document.getElementById('score');
const next =document.getElementById('next');
const tryagain =document.getElementById('tryagain');
const playbutton =document.getElementById('playbutton');
const play=document.getElementById('play');
const endmsg=document.getElementById('endmsg');
const boxquestion=document.getElementById('boxquestion');
const boxchoices=document.getElementById('boxchoices');
const boxreponse=document.getElementById('boxreponse');
const boxscore=document.getElementById('boxscore');




function playquizz(){
    boxreponse.style.display = 'none';
    endmsg.style.display = 'none';
    boxquestion.style.display='none';
    boxchoices.style.display='none';
    boxreponse.style.display='none';
    boxscore.style.display='none';
    next.style.display='none';
    tryagain.style.display='none';
    playbutton.addEventListener('click',function (){
        play.style.display='none';
        boxquestion.style.display='';
        boxchoices.style.display='';
        playbutton.style.display='none';
        next.style.display='';
        tryagain.style.display='';

    });

}


function loadQuestion() {
    const quizQuestion = quizData[currentQuestion];
    questionElement.textContent = quizQuestion.question;
    choicesElement.innerHTML = '';
    quizQuestion.choices.forEach(function(choice, index) {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('mouseover', function() {
            li.style.color = 'red';
        });
        li.addEventListener('mouseout', function() {
            li.style.color = '';
        });
        li.style.padding='10px';
        li.style.cursor='pointer';
        li.style.fontWeight='bold';
        li.addEventListener('click', function() {
            if (cpt === 0) {
                submitAnswer(index);
                cpt = 1;
            }
            else {
                reponseElement.style.color='darkred';
                reponseElement.textContent ='You need to go to the next question';
            }

        });
        cpt = 0;
        choicesElement.appendChild(li);
    });
    showScore();
}

var cpt = 0;

function submitAnswer(choiceIndex) {
    boxscore.style.display='';
    const quizQuestion = quizData[currentQuestion];
    if (choiceIndex === quizQuestion.correctAnswer) {
        score++;
        boxreponse.style.display = '';
        reponseElement.textContent ='The correct answer is :  ' + "\n"+ quizQuestion.choices[quizQuestion.correctAnswer];
    }

    currentQuestion++;
    if (currentQuestion < quizData.length){
        reponseElement.style.display='';
        boxreponse.style.display = '';
        reponseElement.textContent ='The correct answer is :  ' + "\n" + quizQuestion.choices[quizQuestion.correctAnswer];
        next.addEventListener('click',function (){
            loadQuestion();
            boxreponse.style.display = 'none';
            reponseElement.style.display='none';
        });
        showScore();
    }
    else if (currentQuestion === quizData.length){
        reponseElement.style.display='';
        boxreponse.style.display = '';
        reponseElement.textContent ='The correct answer is :  ' + "\n" + quizQuestion.choices[quizQuestion.correctAnswer]
        next.addEventListener('click',function (){
            endmsg.style.display='';
            boxquestion.style.display='none';
            boxchoices.style.display='none';
            boxreponse.style.display='none';
        });
        showScore();
    }
    else {
        reponseElement.style.display='';
        boxreponse.style.display = '';
        reponseElement.textContent ='The correct answer is :  ' + "\n" + quizQuestion.choices[quizQuestion.correctAnswer];
        showScore();
    }
}

function showScore() {
    scoreElement.textContent = 'Your score : ' + score + ' / ' + quizData.length;
    scoreElement.style.display = 'block';
}

const element1 = document.querySelector("#lien1");
const element2 = document.querySelector("#lien2");
const element3 = document.querySelector("#lien3");
const element4 = document.querySelector("#lien4");
const element5 = document.querySelector("#lien5");
const element6 = document.querySelector("#lien6");
const element7 = document.querySelector("#lien7");
const mediaQuery = window.matchMedia("(max-width: 800px)");
const menuheader=document.getElementById('menuheader');
function accueil(){
    function handleMediaQuery1(mediaQuery) {
        if (mediaQuery.matches) {
            if(element1.style.display !=='none'){
                element1.style.display='none';
                element2.style.display='none';
                element3.style.display='none';
                element4.style.display='none';
                element5.style.display='none';
                element6.style.display='none';
                element7.style.display='none';
                menuheader.style.display='';
            }
            else{
                element1.style.display='';
                element2.style.display='';
                element3.style.display='';
                element4.style.display='';
                element5.style.display='';
                element6.style.display='';
                element7.style.display='';
                menuheader.style.display='none';
            }
        }
        else{
            element1.style.display='';
            element2.style.display='';
            element3.style.display='';
            element4.style.display='';
            element5.style.display='';
            element6.style.display='';
            element7.style.display='';
            menuheader.style.display='none';
        }
    }
    mediaQuery.addListener(handleMediaQuery1);
    handleMediaQuery1(mediaQuery);

}
accueil();
playquizz();
loadQuestion();