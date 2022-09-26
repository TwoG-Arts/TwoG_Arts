let prevButton = document.getElementById('2g');
let prevButtonText = document.getElementById('YoRHa');
let showing = null;

$(function () {
    $(".AboutMe").load("pages/AboutMe.html");
    let random = document.getElementById('banana');
    let num = Math.floor(Math.random() * 2);
    if (num === 0) {
        random.textContent = '2G & Rankoll';
    } else {
        random.textContent = 'Rankoll & 2G';
    }
});

function videos() {
    const mob = document.getElementsByClassName('mobile')[0];
    const work = document.getElementById('works');

    $(".Videos").load("pages/Videos.html");
    $(".Designs").html('');
    $(".AboutMe").html('');
    $(".Editing").html('');
    mob.style.display = 'none';
    work.style.display = 'none';
    $(".home").html('Home');
}

function designs() {
    const mob = document.getElementsByClassName('mobile')[0];
    const work = document.getElementById('works');

    $(".Designs").load("pages/Designs.html");
    language();
    $(".Editing").html('');
    $(".AboutMe").html('');
    $(".Videos").html('');
    mob.style.display = 'none';
    work.style.display = 'none';
    $(".home").html('Home');
}

function editing() {
    const mob = document.getElementsByClassName('mobile')[0];
    const work = document.getElementById('works');

    $(".Editing").load("pages/Editing.html");
    language();
    $(".Designs").html('');
    $(".AboutMe").html('');
    $(".Videos").html('');
    mob.style.display = 'none';
    work.style.display = 'none';
    $(".home").html('Home');
}

function aboutMe() {
    const mob = document.getElementsByClassName('mobile')[0];
    const work = document.getElementById('works');

    $(".AboutMe").load("pages/AboutMe.html");
    language();
    $(".Editing").html('');
    $(".Designs").html('');
    $(".Videos").html('');
    if ($(window).width() <= 1100) {
        mob.style.display = 'flex';
        work.style.display = 'block';
    }
    $(".home").html('Chi sono');
}

function clicked(i) {
    const selected = document.getElementsByClassName('button')[i];
    const selectedText = selected.getElementsByTagName('div')[1];
    selected.style.backgroundSize = '200% 100%';
    selected.style.background = '#4E4B42 linear-gradient(to left, #4E4B42 50%, #B4AE9A 50%) right bottom';
    selected.style.transition = 'all 0.4s ease';
    selected.style.animationFillMode = 'both';
    selectedText.style.background = '#B4AE9A linear-gradient(to left, #B4AE9A 50%, #4E4B42 50%) right bottom';
    selectedText.style.backgroundSize = '200% 100%';
    selectedText.style.webkitBackgroundClip = 'text';
    selectedText.style.transition = 'all 0.4s ease';
    selectedText.style.color = 'transparent';
    selected.classList.add('active');
    if (prevButton !== null && prevButton !== selected) {
        prevButton.classList.remove('active');
        prevButton.style.backgroundSize = '200% 100%';
        prevButton.style.background = '#B4AE9A linear-gradient(to right, #B4AE9A 50%, #4E4B42 50%) left bottom';
        prevButton.style.transition = 'all 0.4s ease';
        prevButton.style.animationFillMode = 'both';
        prevButtonText.style.background = '#4E4B42 linear-gradient(to right, #4E4B42 50%, #B4AE9A 50%) left bottom';
        prevButtonText.style.backgroundSize = '200% 100%';
        prevButtonText.style.transition = 'all 0.4s ease';
        prevButtonText.style.webkitBackgroundClip = 'text';
        prevButtonText.style.color = 'transparent';
        prevButton = selected;
        prevButtonText = selectedText;
    }
    prevButton = selected;
    prevButtonText = selectedText;
}

function select(i) {
    const selected = document.getElementsByClassName('show')[i];
    selected.style.display = 'flex';
    selected.classList.add('showing');
    if (showing !== null && showing !== selected) {
        showing.classList.remove('showing');
        showing.style.display = 'none';
        showing = selected;
    }
    showing = selected;
}

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
    return {
        next() {
            let result;
            if (nextIndex < end) {
                result = {value: nextIndex, done: false};
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {value: iterationCount, done: true};
        }
    };
}

function language() {
    let toTranslate = document.getElementsByClassName('en');
    let wrap = document.getElementById('default');
    let design = document.getElementById('design');
    let editing = document.getElementById('editing');
    let check = document.getElementsByClassName('check')[0];
    let it = makeRangeIterator(0, 150, 1);

    if (check.checked) {
        toTranslate[it.next().value].textContent = 'About Me';
        toTranslate[it.next().value].textContent = 'Videos';
        if (!(design || editing)) {
            toTranslate[it.next().value].textContent = 'About Me';
        } else if ($(window).width() <= 1100) {
            toTranslate[it.next().value].textContent = 'Home';
        } else {
            toTranslate[it.next().value].textContent = 'About Me';
        }
        toTranslate[it.next().value].textContent = 'Works';
        toTranslate[it.next().value].textContent = 'Works';
        toTranslate[it.next().value].textContent = 'More edits';
        toTranslate[it.next().value].textContent = 'More videos';
        toTranslate[it.next().value].textContent = 'More designs';
        toTranslate[it.next().value].textContent = 'Contacts';
        toTranslate[it.next().value].textContent = 'Support Me';
        if (wrap) {
            toTranslate[it.next().value].textContent = 'Works';
            toTranslate[it.next().value].textContent = 'Contacts';
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].textContent = 'Credits';
            toTranslate[it.next().value].textContent = 'About Me';
            toTranslate[it.next().value].innerHTML = '<img id="logoAboutMe" src="images/LogoAboutMe.png">My name is Luigi but you can call me Giorgio. Lately I am working with';
            toTranslate[it.next().value].textContent = 'More about';
            toTranslate[it.next().value].textContent = 'More about';
            toTranslate[it.next().value].textContent = 'More about';
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].textContent = 'Credits';
            toTranslate[it.next().value].textContent = 'Thanking';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> for programming the site.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf for the supervision of texts.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> for the agreement of sharing the collaborations.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> for the hosting';
            toTranslate[it.next().value].innerHTML = 'A special thanks to <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> and <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';
            toTranslate[it.next().value].textContent = 'Contacts';
            toTranslate[it.next().value].textContent = 'Support Me';
            toTranslate[it.next().value].textContent = 'Thanking';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> for programming the site.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf for the supervision of texts.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> for the agreement of sharing the collaborations.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> for the hosting';
            toTranslate[it.next().value].innerHTML = 'A special thanks to <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> and <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';

        }
        if (design) {
            /*toTranslate[it.next().value].textContent = 'Graphics very cool';*/
            toTranslate[it.next().value].textContent = 'Graphics and logo for RaamDeadman\'s socials';
            toTranslate[it.next().value].textContent = 'Graphics and logo for the 2nd Youtube channel of RaamDeadman';
            toTranslate[it.next().value].textContent = 'Graphics and logo for my socials';
        }
        if (editing) {
            toTranslate[it.next().value].innerHTML = 'Ken Kaneki from Tokyo Ghoul. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Basim Ibn Ishaq from Assassin\'s Creed by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'The Rumbling from Attack on Titan. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Connor from Detroit Become Human by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Okabe & Daru from Steins;Gate w/RaamDeadman. <sub>PH: Rankoll \& RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Shanks from One Piece by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Thor Ravager from Thor Love&Thunder by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Aiden Pearce from Watch Dogs. <sub>PH: RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Soul from Dark Souls. <sub>PH: Me.</sub>';
        }
    } else {
        toTranslate[it.next().value].textContent = 'Chi sono';
        toTranslate[it.next().value].textContent = 'Video';
        if (!(design || editing)) {
            toTranslate[it.next().value].textContent = 'Chi sono';
        } else if ($(window).width() <= 1100) {
            toTranslate[it.next().value].textContent = 'Home';
        } else {
            toTranslate[it.next().value].textContent = 'Chi sono';
        }
        toTranslate[it.next().value].textContent = 'Lavori';
        toTranslate[it.next().value].textContent = 'Lavori';
        toTranslate[it.next().value].textContent = 'Più editing';
        toTranslate[it.next().value].textContent = 'Più video';
        toTranslate[it.next().value].textContent = 'Più designs';
        toTranslate[it.next().value].textContent = 'Contatti';
        toTranslate[it.next().value].textContent = 'Supportami';
        if (wrap) {
            toTranslate[it.next().value].textContent = 'Lavori';
            toTranslate[it.next().value].textContent = 'Contatti';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].textContent = 'Crediti';
            toTranslate[it.next().value].textContent = 'Chi sono';
            toTranslate[it.next().value].innerHTML = '<img id="logoAboutMe" src="images/LogoAboutMe.png">Benvenuti! Mi chiamo Luigi "2G" Balzano e sono nato a Torre Annunziata nel napoletano. Frequento l\'Accademia delle Belle Arti, grazie alla quale ho avuto la possibilità di coltivare la mia passione per l\'arte, alimentata anche dagli interessi sviluppati nel corso degli anni. Ho appreso delle conoscenze di informatica che mi sono state preziose per esprimere le mie idee attraverso i lavori. Noterete sicuramente come molte delle mie creazioni siano state influenzate dalle opere con cui risuono di più, ad esempio dall\'anime Steins; Gate, il quale racconta una storia profonda che mi vede in sintonia col protagonista; dal manga Attack on Titan, dimostrazione pratica di come la tecnica da sola non basta e deve essere veicolo di un messaggio importante; inoltre, nei miei lavori tendo a piegare la realtà senza distaccarmene, sotto influenza di due grandi registi come Christopher Nolan e Martin Scorsese. Pongo molta enfasi nel dare una forma alle miei emozioni ed i miei pensieri tramite l\'arte, l\'unico mezzo che mi permette a pieno di esprimere pensieri e stati d\'animo.';
            toTranslate[it.next().value].textContent = 'Scopri di più';
            toTranslate[it.next().value].textContent = 'Scopri di più';
            toTranslate[it.next().value].textContent = 'Scopri di più';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].textContent = 'Crediti';
            toTranslate[it.next().value].textContent = 'Ringrazio';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> per la programmazione del sito.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf per la revisione testi.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> per aver acconsentito a pubblicare le collaborazioni.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> per l\'hosting';
            toTranslate[it.next().value].innerHTML = 'Un ringraziamento speciale a <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> e <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';
            toTranslate[it.next().value].textContent = 'Contatti';
            toTranslate[it.next().value].textContent = 'Supportami';
            toTranslate[it.next().value].textContent = 'Ringrazio';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> per la programmazione del sito.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf per la revisione testi.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> per aver acconsentito a pubblicare le collaborazioni.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> per l\'hosting';
            toTranslate[it.next().value].innerHTML = 'Un ringraziamento speciale a <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> e <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';

        }
        if (design) {
            toTranslate[it.next().value].textContent = 'Grafiche e logo per i social di RaamDeadman';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per il secondo canale youtube di RaamDeadman';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per i miei social';
        }
        if (editing) {
            toTranslate[it.next().value].innerHTML = 'Ken Kaneki da Tokyo Ghoul. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Basim Ibn Ishaq da Assassin\'s Creed by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Il Boato da L\'attacco dei Giganti. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Connor da Detroit Become Human by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Okabe & Daru da Steins;Gate w/RaamDeadman. <sub>PH: Rankoll \& RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Shanks da One Piece by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Thor Ravager da Thor Love&Thunder by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Aiden Pearce da Watch Dogs. <sub>PH: RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Anima da Dark Souls. <sub>PH: Me.</sub>';
        }
    }
}

const mediaQueryList = window.matchMedia('(max-width: 1100px)');

function screenTest(e) {
    const mob = document.getElementsByClassName('mobile')[0];
    const work = document.getElementById('works');
    if (e.matches) {
        /* the viewport is 1100 pixels wide or less */
        clicked(0);
        select(0);
        mob.style.display = 'flex';
        work.style.display = 'block';
    } else {
        /* the viewport is more than 1100 pixels wide */
        mob.style.display = 'none';
        work.style.display = 'none';
    }
}

mediaQueryList.addListener(screenTest);


function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onscroll = function () {
    scrollFunction()
    };

function scrollFunction() {
    let up = document.getElementById("upTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        up.style.display = "inline";
    } else {
        up.style.display = "none";
    }
}

