import './style.css'

const quizData = [
    {
        question: 'В таблицу базы данных СКЛАД, содержащую 5 столбцов информации о товаре (наименование, поставщик, количество, дата окончания срока хранения, цена), внесена информация о 25 видах товара. Количество записей в таблице равно …',
        a: '25',
        b: '5',
        c: '125',
        d: '30',
        correct: 'b'
    },
    {
        question: 'В СУБД MS Access не существует запрос на _________ данных.',
        a: 'создание',
        b: 'обновление',
        c: 'удаление',
        d: 'добавление',
        correct: 'a'
    },
    {
        question: 'Для первичного ключа ложно утверждение, что …',
        a: 'первичный ключ может принимать нулевое значение',
        b: 'первичный ключ может быть простым и составным',
        c: 'в таблице может быть назначен только один первичный ключ',
        d: 'первичный ключ однозначно определяет каждую запись в таблице',
        correct: 'a'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Вы ответили правильно на ${score} из ${quizData.length} вопросов.</h2>
                
                <button onclick="location.reload()">Пройти заново</button>
            `;
        }
    }
});