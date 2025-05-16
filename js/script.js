document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    document.querySelectorAll('.disciplina-card, .demo-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}


let currentQuestion = 0;
const questions = [
    "Você gosta de resolver problemas lógicos?",
    "Tem interesse em aprender programação?",
    "Gosta de trabalhar em equipe?"
];

function answerQuiz(answer) {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        document.querySelector('#quiz-question p').textContent = questions[currentQuestion];
    } else {
        document.getElementById('quiz-result').textContent = "Quiz concluído!";
    }
}