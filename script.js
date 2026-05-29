// Easy mode questions 

const ALL_QUESTIONS_EASY = [
    { word: 'Mann', answer: 'der', img: './imagenes/mann.png' },
    { word: 'Frau', answer: 'die', img: './imagenes/frau.png' },
    { word: 'Vater', answer: 'der', img: './imagenes/vater.png' },
    { word: 'Mutter', answer: 'die', img: './imagenes/mutter.png' },
    { word: 'Bruder', answer: 'der', img: './imagenes/bruder.png' },
    { word: 'Schwester', answer: 'die', img: './imagenes/schwester.png' },
    { word: 'Großvater', answer: 'der', img: './imagenes/großvater.png' },
    { word: 'Großmutter', answer: 'die', img: './imagenes/großmutter.png' },
    { word: 'Blume', answer: 'die', img: './imagenes/blume.png' },
    { word: 'Lampe', answer: 'die', img: './imagenes/lampe.png' },
    { word: 'Schule', answer: 'die', img: './imagenes/schule.png' },
    { word: 'Straße', answer: 'die', img: './imagenes/straße.png' },
    { word: 'Nacht', answer: 'die', img: './imagenes/nacht.png' },
    { word: 'Hund', answer: 'der', img: './imagenes/hund.png' },
    { word: 'Katze', answer: 'die', img: './imagenes/katze.png' },
    { word: 'Fisch', answer: 'der', img: './imagenes/fisch.png' },
    { word: 'Vogel', answer: 'der', img: './imagenes/vogel.png' },
    { word: 'Tag', answer: 'der', img: './imagenes/tag.png' },
    { word: 'Montag', answer: 'der', img: './imagenes/montag.png' },
    { word: 'Sommer', answer: 'der', img: './imagenes/sommer.png' },
    { word: 'Winter', answer: 'der', img: './imagenes/winter.png' },
    { word: 'Frühling', answer: 'der', img: './imagenes/frühling.png' },
    { word: 'Herbst', answer: 'der', img: './imagenes/herbst.png' },
    { word: 'Fluss', answer: 'der', img: './imagenes/fluss.png' },
    { word: 'Berg', answer: 'der', img: './imagenes/berg.png' },
];

//Normal mode questions

const ALL_QUESTIONS_NORMAL = [
    { word: 'Tisch', answer: 'der', img: './imagenes/tisch.png' },
    { word: 'Stuhl', answer: 'der', img: './imagenes/stuhl.png' },
    { word: 'Buch', answer: 'das', img: './imagenes/buch.png' },
    { word: 'Fenster', answer: 'das', img: './imagenes/fenster.png' },
    { word: 'Auto', answer: 'das', img: './imagenes/auto.png' },
    { word: 'Tüte/Sackerl', answer: 'das', img: './imagenes/tüte.png' },
    { word: 'Kartoffel', answer: 'die', img: './imagenes/kartoffel.png' },
    { word: 'Paradeiser', answer: 'der', img: './imagenes/paradeiser.png' },
    { word: 'Treppe/Stiege', answer: 'der', img: './imagenes/treppe.png' },
    { word: 'Brötchen', answer: 'das', img: './imagenes/brötchen.png' },
    { word: 'Blumenkohl/Karfiol', answer: 'der', img: './imagenes/blumenkohl.png' },
    { word: 'Kissen', answer: 'das', img: './imagenes/kissen.png' },
    { word: 'Aprikose/Marille', answer: 'die', img: './imagenes/aprikose.png' },
    { word: 'Sahne', answer: 'die', img: './imagenes/sahne.png' },
    { word: 'Quark/Topfen', answer: 'der', img: './imagenes/quark.png' },
    { word: 'Telefon', answer: 'das', img: './imagenes/telefon.png' },
    { word: 'Hotel', answer: 'das', img: './imagenes/hotel.png' },
    { word: 'Museum', answer: 'das', img: './imagenes/museum.png' },
    { word: 'Karte', answer: 'die', img: './imagenes/karte.png' },
    { word: 'Tür', answer: 'die', img: './imagenes/tür.png' },
    { word: 'Stadt', answer: 'die', img: './imagenes/stadt.png' },
    { word: 'Markt', answer: 'der', img: './imagenes/markt.png' },
    { word: 'Wald', answer: 'der', img: './imagenes/wald.png' },
    { word: 'Garten', answer: 'der', img: './imagenes/garten.png' },
    { word: 'Küche', answer: 'die', img: './imagenes/küche.png' },
];

//Hard mode questions

const ALL_QUESTIONS_HARD = [
    { word: 'Mädchen/Madl', answer: 'das', img: './imagenes/mädchen.png' },
    { word: 'Messer/Messa', answer: 'das', img: './imagenes/messer.png' },
    { word: 'Gabel', answer: 'die', img: './imagenes/gabel.png' },
    { word: 'Löffel', answer: 'der', img: './imagenes/löffel.png' },
    { word: 'Gift', answer: 'das', img: './imagenes/gift.png' },
    { word: 'Butter', answer: 'die', img: './imagenes/butter.png' },
    { word: 'Mail', answer: 'das', img: './imagenes/mail.png' },
    { word: 'Sonne/Sunn', answer: 'die', img: './imagenes/sonne.png' },
    { word: 'Mond', answer: 'der', img: './imagenes/mond.png' },
    { word: 'Kopf', answer: 'der', img: './imagenes/kopf.png' },
    { word: 'Hand', answer: 'die', img: './imagenes/hand.png' },
    { word: 'Fuß', answer: 'der', img: './imagenes/fuß.png' },
    { word: 'Nase/Nas', answer: 'die', img: './imagenes/nase.png' },
    { word: 'Rücken', answer: 'der', img: './imagenes/rücken.png' },
    { word: 'Krankenhaus', answer: 'das', img: './imagenes/krankenhaus.png' },
    { word: 'Fleischerei', answer: 'die', img: './imagenes/fleischerei.png' },
    { word: 'Käse', answer: 'der', img: './imagenes/käse.png' },
    { word: 'Kaffee', answer: 'der', img: './imagenes/kaffee.png' },
    { word: 'Café/Kaffeehaus', answer: 'das', img: './imagenes/café.png' },
    { word: 'Regenschirm', answer: 'der', img: './imagenes/regenschirm.png' },
    { word: 'Sieb', answer: 'das', img: './imagenes/sieb.png' },
    { word: 'Falle', answer: 'die', img: './imagenes/falle.png' },
    { word: 'Schicksal', answer: 'das', img: './imagenes/schicksal.png' },
    { word: 'Fahrzeug', answer: 'das', img: './imagenes/fahrzeug.png' },
    { word: 'Glied', answer: 'das', img: './imagenes/glied.png' },

];
// Modos de juego

let rightSound, wrongSound, clickSound, backgroundSound;

function initSounds() {
    clickSound = new Audio('./click.mp3');
    rightSound = new Audio('./right.mp3');
    wrongSound = new Audio('./wrong.mp3');
    backgroundSound = new Audio('./background.mp3');

    clickSound.volume = 0.5;
    rightSound.volume = 0.5;
    wrongSound.volume = 0.5;
    backgroundSound.volume = 0.5;

    clickSound.load();
    rightSound.load();
    wrongSound.load();
    backgroundSound.load();

    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const text = e.target.textContent.trim().toLowerCase();
            const answerButtons = ['der', 'die', 'das'];
                if (!answerButtons.includes(text)) {
                    clickSound.currentTime = 0;
                    clickSound.play().catch(e => console.error(e));
            }
        }
    });
}

const QUESTION_SETS = {
    easy: ALL_QUESTIONS_EASY,
    normal: ALL_QUESTIONS_NORMAL,
    hard: ALL_QUESTIONS_HARD,
};

    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let skipped = [];
    let pointsPerQuestion = 1;

    const bgMusic = new Audio('./background.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.3;


const MUSIC_SETS = {
    easy: './background1.mp3',
    normal: './background2.mp3',
    hard: './background3.mp3',
};
function selectMode(mode) {

    if (mode === 'easy') pointsPerQuestion = 1;
    else if (mode === 'normal') pointsPerQuestion = 3;
    else if (mode === 'hard') pointsPerQuestion = 5;

    bgMusic.src = MUSIC_SETS[mode];
    bgMusic.loop = true;
    bgMusic.load();
    bgMusic.play();
    initSounds();
    currentQuestions = shuffleArray(QUESTION_SETS[mode]);
    currentIndex = 0;
    score = 0;
    document.getElementById('valor-puntos').textContent = 0;
    skipped = [];
    loadQuestion();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function loadQuestion() {
    if (currentIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const q = currentQuestions[currentIndex];
    document.getElementById('word').style.color = '';
    document.getElementById('word').textContent = q.word;
    document.getElementById('image').src = q.img;
}

let hintsUsed = 0;

function showHint() {
    const q = currentQuestions[currentIndex];
    const word = document.getElementById('word');

    word.textContent = `${q.answer} ${'word'}`;
    word.style.color = '#21c7fa';

    score = Math.max(0, score - 1);
    document.getElementById('valor-puntos').textContent = score;

    setTimeout(() => {
        word.textContent = q.word;
        word.style.color = '';
    }, 1000);

        hintsUsed++;
}


function checkAnswer(selected) {
    const correct = currentQuestions[currentIndex].answer;

    if(selected === correct) {
        rightSound.play();
        score+= pointsPerQuestion;
        document.getElementById('valor-puntos').textContent = score;
        showFeedback(true);
    } else {
        showFeedback(false, correct);
        wrongSound.play();
    }  

    currentIndex++;
    loadQuestion();
    showFeedback(selected === correct);
}

function skipQuestion() {
    clickSound.play();
    skipped.push(currentQuestions[currentIndex]);
    currentIndex++;
    loadQuestion();
}

function showFeedback(isCorrect, correctAnswer = null) {
    const word = document.getElementById('word');
    if (isCorrect) {
        word.style.color = '#5DDA63';
    } else {
        word.style.color = '#A70109';
        // opcional: muestra la respuesta correcta
        console.log(`Correct answer: ${correctAnswer}`);
    }
    // resetea el color después de 1 segundo
    setTimeout(() => { word.style.color = ''; }, 1000);
}



function showResults() {
    console.log(`Points: ${score}/${currentQuestions.length}`);
    console.log(`Skipped: ${skipped.length}`);
}