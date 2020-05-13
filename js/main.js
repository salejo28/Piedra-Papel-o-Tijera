//close modals
const start = document.querySelector('.btn-start');
const modal = document.querySelector('.modal');
const modalTwo = document.getElementById('modal-2')
//The game const
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.scrore-board');
const resultDiv = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const tryAgain = document.getElementById('try-again');

//Count Score
let userScore = 0;
let computerScore = 0;

//Close modals
start.addEventListener('click', function () {
    modal.classList.add('disable');
});

tryAgain.addEventListener('click', reStart)

//Functions

//function obtener los resultados del computador
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function para convertir los resultados a letras
function convertToWord(letter) {
    if (letter === 'r') { return 'Piedra' };
    if (letter === 'p') { return 'Papel' };
    if (letter === 's') { return 'Tijera' };
}

//function Para seleccionar el ganador
function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const userWord = 'tu'.fontsize(3);
    const compWord = 'comp'.fontsize(3);
    resultDiv.innerHTML = `${convertToWord(userChoice)}${userWord}  gana contra  ${convertToWord(computerChoice)}${compWord}  tu ganas`;
    if (userScore == 10) {
        resultDiv.innerHTML = 'Tu ganaste, bien hecho';
        modalTwo.innerHTML = `
        <div class="flex">
            <div class="win content-modal">
                <h1>Bien hecho ganaste</h1>
                <div class="content-win">
                    <img src="img/win.png" class="img">
                    <p>
                        Bien hecho venciste a la maquina
                        si quieres volverlo a intentar
                        porfavor dale en el boton
                        <button class="btn-tryAgain"><i class="fas fa-redo-alt"></i></button>
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="btn-acept" id="acept">Aceptar</button>
                </div>
            </div>
        </div>
        `;
        modalTwo.style.display = 'block';
        const acept = document.getElementById('acept');
        acept.addEventListener('click', function () {
            modalTwo.classList.add('disable');
        });
    }
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;
    const userWord = 'tu'.fontsize(3);
    const compWord = 'comp'.fontsize(3);
    resultDiv.innerHTML = `${convertToWord(userChoice)}${userWord} pierde contra ${convertToWord(computerChoice)}${compWord}, tu pierdes`
    if (computerScore == 10) {
        resultDiv.innerHTML = 'Perdiste, loser';
        modalTwo.style.display = 'block';
        modalTwo.innerHTML = `
        <div class="flex">
            <div class="lose content-modal">
                <h1>Te gano la maquina, que loser</h1>
                <div class="content-win">
                    <img src="img/loser.jpg" class="img">
                    <p>
                        Bien hecho venciste a la maquina
                        si quieres volverlo a intentar
                        porfavor dale en el boton
                        <button class="btn-tryAgain"><i class="fas fa-redo-alt"></i></button>
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="btn-acept" id="acept">Aceptar</button>
                </div>
            </div>
        </div>
        `;
        const acept = document.getElementById('acept');
        acept.addEventListener('click', function () {
            modalTwo.classList.add('disable');
        });
    }
}

function draw(userChoice, computerChoice) {
    const userWord = 'tu'.fontsize(3);
    const compWord = 'comp'.fontsize(3);
    resultDiv.innerHTML = `${convertToWord(userChoice)}${userWord} igual a ${convertToWord(computerChoice)}${compWord}, es un empate`
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rp':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock.addEventListener('click', function Rock() {
        game("r");
    });

    paper.addEventListener('click', function Paper() {
        game("p");
    });

    scissors.addEventListener('click', function Scsissor() {
        game("s");
    });
}

function reStart() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.innerHTML = 0;
    computerScoreSpan.innerHTML = 0;
    resultDiv.innerHTML = 'Juego Nuevo';
    modalTwo.classList.remove('disable');
    modalTwo.style.display = 'none';
}

main();