let htmlQuiz = [

    {
        que: "This is One",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4",
        ans: "1"

    },

    {
        que: "This is Two",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4",
        ans: "2"

    },

    {
        que: "This is Three",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4",
        ans: "3"

    },

    {
        que: "This is Four",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4",
        ans: "4"

    },
]

let questionCount = 0
let score = 0

let question = document.getElementById("question");
let input_1 = document.getElementById("option_1");
let input_2 = document.getElementById("option_2");
let input_3 = document.getElementById("option_3");
let input_4 = document.getElementById("option_4");

let label_1 = document.getElementById("val_1");
let label_2 = document.getElementById("val_2");
let label_3 = document.getElementById("val_3");
let label_4 = document.getElementById("val_4");

let answer = document.getElementsByName("answer");

function renderQuestion() {

    question.innerHTML = htmlQuiz[questionCount].que
    label_1.innerHTML = htmlQuiz[questionCount].opt1
    label_2.innerHTML = htmlQuiz[questionCount].opt2
    label_3.innerHTML = htmlQuiz[questionCount].opt3
    label_4.innerHTML = htmlQuiz[questionCount].opt4

    // for scoring

    input_1.value = htmlQuiz[questionCount].opt1
    input_2.value = htmlQuiz[questionCount].opt2
    input_3.value = htmlQuiz[questionCount].opt3
    input_4.value = htmlQuiz[questionCount].opt4

}

function deSelect() {

    for (i = 0; i < answer.length; i++) { 

        answer[i].checked = false
    }
}

function next() {

   let radioBtn = false

   for ( i = 0; i < answer.length; i++){

    if ( answer[i].checked){

        radioBtn = true;

        if (answer[i].value == htmlQuiz[questionCount].ans){

            score++

            console.log(score);
        }
    }
   }

    if ( radioBtn == false){

        alert("Please select any input")
    }

    else if (questionCount < htmlQuiz.length - 1) {

        questionCount++

        renderQuestion()

        deSelect()
    }
}

window.onload = renderQuestion()