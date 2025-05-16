// Funções principais
document.addEventListener('DOMContentLoaded', function() {
    // Carrega depoimentos dinamicamente
    loadDepoimentos();
    
    // Configura eventos
    setupEventListeners();
});

function loadDepoimentos() {
    const depoimentos = [
        {
            nome: "Ana Silva",
            turma: "2022",
            texto: "O curso me preparou muito bem para o mercado de trabalho. Consegui meu primeiro emprego como desenvolvedora júnior antes mesmo de me formar!",
            imagem: "assets/images/depoente1.jpg"
        },
        {
            nome: "Carlos Oliveira",
            turma: "2021",
            texto: "Os projetos práticos foram o diferencial. Pude aplicar em estágios tudo que aprendi nas aulas.",
            imagem: "assets/images/depoente2.jpg"
        },
        {
            nome: "Mariana Costa",
            turma: "2023",
            texto: "A estrutura dos laboratórios e a qualidade dos professores superaram minhas expectativas.",
            imagem: "assets/images/depoente3.jpg"
        }
    ];

    const carrossel = document.querySelector('.depoimentos-carrossel');
    
    depoimentos.forEach(depoimento => {
        const depoimentoHTML = `
            <div class="depoimento-card">
                <img src="${depoimento.imagem}" alt="${depoimento.nome}">
                <div class="depoimento-content">
                    <h4>${depoimento.nome} - Turma ${depoimento.turma}</h4>
                    <p>"${depoimento.texto}"</p>
                </div>
            </div>
        `;
        carrossel.innerHTML += depoimentoHTML;
    });
}

function setupEventListeners() {
    // Efeito hover nos cards
    document.querySelectorAll('.disciplina-card, .demo-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Função para executar código no editor
function runCode() {
    const code = document.getElementById('code-sample').textContent;
    const outputDiv = document.getElementById('output');
    
    try {
        const func = new Function(code);
        const originalLog = console.log;
        let logOutput = '';
        
        console.log = function(message) {
            logOutput += message + '\n';
        };
        
        func();
        
        console.log = originalLog;
        
        outputDiv.textContent = logOutput || 'Código executado com sucesso (sem saída no console)';
    } catch (error) {
        outputDiv.textContent = 'Erro: ' + error.message;
    }
}

// Quiz functions (será movido para quiz.js)
let quizAnswers = [];
let currentQuestion = 0;
const questions = [
    "Você gosta de resolver problemas lógicos e quebra-cabeças?",
    "Tem interesse em aprender como os aplicativos e sites funcionam?",
    "Você é uma pessoa paciente para resolver problemas complexos?",
    "Gosta de trabalhar em equipe em projetos colaborativos?",
    "Tem curiosidade sobre novas tecnologias e inovações?"
];

function answerQuiz(answer) {
    quizAnswers.push(answer);
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        document.querySelector('#quiz-question h3').textContent = `Pergunta ${currentQuestion + 1}/${questions.length}`;
        document.querySelector('#quiz-question p').textContent = questions[currentQuestion];
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const yesCount = quizAnswers.filter(a => a).length;
    const percentage = (yesCount / questions.length) * 100;
    
    let resultText = `Você respondeu Sim a ${yesCount} de ${questions.length} perguntas. `;
    
    if (percentage >= 80) {
        resultText += "Você tem um excelente perfil para o curso de DS!";
    } else if (percentage >= 50) {
        resultText += "Você tem um bom perfil para o curso de DS, mas pode precisar desenvolver algumas habilidades.";
    } else {
        resultText += "O curso de DS pode ser desafiador para você, mas com dedicação você pode ter sucesso!";
    }
    
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('quiz-question').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
}