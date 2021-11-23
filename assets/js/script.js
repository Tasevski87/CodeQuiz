var quiz = [
    {
        question: 'Communly used data types do not include ____',
        options: ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'],
        correct: 'answer 1 of 1'
    },
    {
        question: 'Arraysin JavaScript can be used to store ____',
        options: ['1. Numbers and Strings', '2. Other Arrays', '3. Booleans', '4. All of the above'],
        correct: 'answer 2 of 2'
    },
    {
        question: 'String value must be enclosed with ____ when being assigned to variables',
        options: ['1. Commas', '2. Curley brackets', '3. Quotes', '4. Parenthasis'],
        correct: 'answer 3 of 3'
    },
    {
        question: 'The condition in an if/else statement is enclosed with ____',
        options: ['1. Quotes', '2. Curley brackets', '3. Parenthasis', '4. Squere brackets'],
        correct: 'answer 4 of 4'

    },
]

var timer = 60;
var score = 0;

var startBtn = document.querySelector('.btn');
var startingScreen = document.querySelector('.starting-screen');
var question = document.querySelector('.question');
var answers = document.querySelector('.answers');
var form = document.querySelector('.user');
var time = document.querySelector('.time');
var finish = document.querySelector('.finish')

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    startingScreen.setAttribute('class', 'hidden')
    startTimer()
    renderQuestionOne()
}

function startTimer() {
    time.textContent = timer
    var setTimer = setInterval(function() {
        timer--
        time.textContent = timer
        if (timer === 0) {
            clearInterval(setTimer)
        }
    }, 1000)
}

function renderQuestionOne() {
    question.textContent = quiz[0].question

    for (var i = 0; i < quiz[0].options.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', quiz[0].options[i])
        li.textContent = quiz[0].options[i]
        answers.append(li)

        li.addEventListener('click', function(event) {
            if (event.target.id === quiz[0].correct) {
                console.log('correct answer');
                score += 25
            } else {
                console.log('incorrect answer');
                timer -= 10
            }
            renderQuestionTwo()
        })
    }
}

function renderQuestionTwo() {
    question.textContent = ''
    answers.textContent = ''

    question.textContent = quiz[1].question
    for (var i = 0; i < quiz[1].options.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', quiz[1].options[i])
        li.textContent = quiz[1].options[i]
        answers.append(li)

        li.addEventListener('click', function(event) {
            if (event.target.id === quiz[1].correct) {
                console.log('correct answer');
                score += 25
            } else {
                console.log('incorrect answer');
                timer -= 10
            }
            renderQuestionThree()
        })
    }
}

function renderQuestionThree() {
    question.textContent = ''
    answers.textContent = ''

    question.textContent = quiz[2].question
    for (var i = 0; i < quiz[2].options.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', quiz[2].options[i])
        li.textContent = quiz[2].options[i]
        answers.append(li)

        li.addEventListener('click', function(event) {
            if (event.target.id === quiz[2].correct) {
                console.log=('correct answer');
                score += 25
            } else {
                console.log('incorrect answer');
                timer -= 10
            }
            renderQuestionFour()
        })
    }
}
function renderQuestionFour() {
    question.textContent = ''
    answers.textContent = ''

    question.textContent = quiz[3].question
    for (var i = 0; i < quiz[2].options.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('id', quiz[3].options[i])
        li.textContent = quiz[2].options[i]
        answers.append(li)

        li.addEventListener('click', function(event) {
            if (event.target.id === quiz[3].correct) {
                console.log('Correct answer!');
                score += 25
            } else {
                console.log('incorrect answer');
                timer -= 10
            }
            
            endQuiz()
            
        })
    }
}

function endQuiz() {
    question.textContent = ''
    answers.textContent = ''

    var input = document.createElement('input')
    input.setAttribute('placeholder', 'Your initials.')
    var submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    form.append(input, submitBtn)

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault()

        var storage = JSON.parse(localStorage.getItem('highscore'))
        if (storage === null) {
            storage = []
        }
        var currentUser = {
            name: input.value,
            currentScore: score
        }
        storage.push(currentUser)
        localStorage.setItem('highscore', JSON.stringify(storage))
    })
}