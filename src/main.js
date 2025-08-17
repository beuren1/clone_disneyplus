document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    // Troca de abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            escondeTodasAbas();
            removeBotaoAtivo();

            aba.classList.add('shows__list--is-active');
            event.target.classList.add('shows__tab__button--is-active');
        });
    }

    // FAQ - abre e fecha respostas
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

    function escondeTodasAbas() {
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

    function removeBotaoAtivo() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tab__button--is-active');
        }
    }

    function abreOuFechaResposta(event) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = event.target.parentNode;
        elementoPai.classList.toggle(classe);
    }
});

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

// === Task: HTML ===
gulp.task("html", function () {
  return gulp.src("src/*.html")   // pega os .html da pasta src
    .pipe(gulp.dest("dist"));     // joga na pasta dist
});

// === Task: Styles (SCSS/CSS) ===
gulp.task("styles", function () {
  return gulp.src("src/scss/**/*.scss")   // ajusta o caminho se necessário
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

// === Task: Images ===
gulp.task("images", function () {
  return gulp.src("src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

// === Task Default ===
gulp.task("default", gulp.parallel("html", "styles", "images"));
