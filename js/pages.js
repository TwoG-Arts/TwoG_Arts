let prevButton = document.getElementById('2g');
let prevHeaderButton = document.getElementById('firstButton');
let prevButtonText = document.getElementById('YoRHa');
let showing = null;

$(function () {
    $(".AboutMe").load("pages/AboutMe.html");
    headerButtons(0);
    let random = document.getElementById('banana');
    let num = Math.floor(Math.random() * 2);
    if (num === 0) {
        random.textContent = '2G & Rankoll';
    } else {
        random.textContent = 'Rankoll & 2G';
    }
});

function selection() {
    let sideBut = document.getElementsByClassName('sideBut')[0];
    let buttons = sideBut.children;
    for (let button in buttons)
        button.style.backgroundPosition = 'right bottom';

    buttons.hover(function () {
        $(this).style.backgroundPosition = 'left bottom';
        $(this).lastChild.style.backgroundPosition = 'left bottom';
    }, function () {
        for (let button in buttons) {
        button.style.backgroundPosition = 'right bottom';
        button.lastChild.style.backgroundPosition = 'right bottom';
        }
    });
}

/*
$(function () {
    for (const button of buttons){
    $(button).hover(function () {
        (this).parent.style.backgroundPosition = 'left bottom';
        (this).lastChild.style.backgroundPosition = 'left bottom';
    }, function () {
        (this).parent.style.backgroundPosition = 'right bottom';
        (this).lastChild.style.backgroundPosition = 'right bottom';
    });
    }
});*/

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

function headerButtons(i) {
    const selected = document.getElementsByClassName('works')[i];
    selected.style.transform = 'scale(1.1)';
    selected.classList.add('active');
    if (prevHeaderButton !== null && prevHeaderButton !== selected) {
        prevHeaderButton.classList.remove('active');
        prevHeaderButton.style.transform = 'initial';
        prevHeaderButton = selected;
    }
    prevHeaderButton = selected;
}

function clicked(i) {
    const selected = document.getElementsByClassName('button')[i];
    const selectedText = selected.getElementsByTagName('div')[1];
    selected.style.backgroundPosition = 'left bottom';
    selectedText.style.backgroundPosition = 'left bottom';
    selected.classList.add('active');
    if (prevButton !== null && prevButton !== selected) {
        prevButton.classList.remove('active');
        prevButton.style.backgroundPosition = 'right bottom';
        prevButtonText.style.backgroundPosition = 'right bottom';
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
    let video = document.getElementById('video');
    let check = document.getElementsByClassName('check')[0];
    let it = makeRangeIterator(0, 150, 1);

    if (check.checked) {
        toTranslate[it.next().value].textContent = 'About Me';
        toTranslate[it.next().value].textContent = 'Videos';
        toTranslate[it.next().value].textContent = 'Other';
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
            toTranslate[it.next().value].textContent = 'Welcome';
            toTranslate[it.next().value].innerHTML = '<img id="logoAboutMe" src="images/LogoAboutMe.png">My name is Luigi "2G" Balzano and I\'m born in Torre Annunziata near Naples. I attend the Academy of Fine Arts, thanks to which I had the chance to grow my passion for the arts, powered by the interests that I developed throught the years. I learned computer science skills, precious to me, that helped me express my ideas through my works. You could surely notice how many of my creations have been affected by the works with which I resonate the most, for example Steins;Gate, which tells the deep story of a man I see me in tune with; from the manga Attack on Titan, practically showing how a good technique alone isn\'t enough and it has to carry a more important message; also, in my works I tend to bend reality without parting from it, under the influence of two great directors like Christopher Nolan and Martin Scorsese. I put a lot of emphasis on shaping my emotions and my thoughts through arts, the only means that allows me to fully express thoughts and moods.';
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
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].textContent = 'Thanking';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> for programming the site.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf for the supervision of texts.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> for the agreement of sharing the collaborations.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> for the hosting';
            toTranslate[it.next().value].innerHTML = 'A special thanks to <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> and <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';

        }
        if (design) {
            toTranslate[it.next().value].textContent = 'Design';
            toTranslate[it.next().value].textContent = 'Coding';
            toTranslate[it.next().value].textContent = 'Drawings';
            toTranslate[it.next().value].textContent = '3D';

            /*toTranslate[it.next().value].textContent = 'Graphics very cool';*/
            toTranslate[it.next().value].textContent = 'Graphics and logo for RaamDeadman\'s socials';
            toTranslate[it.next().value].textContent = 'Graphics and logo for the 2nd Youtube channel of RaamDeadman';
            toTranslate[it.next().value].textContent = 'Graphics and logo for my socials';
        }
        if (editing) {
            toTranslate[it.next().value].textContent = 'Originals';
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].innerHTML = 'Satoru Gojo from Jujutsu Kaisen.<sub>PH: Rankoll</sub>';
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
        if (video) {
            toTranslate[it.next().value].textContent = 'Originals';
            toTranslate[it.next().value].textContent = 'Collaborations';
        }
    } else {
        toTranslate[it.next().value].textContent = 'Chi sono';
        toTranslate[it.next().value].textContent = 'Video';
        toTranslate[it.next().value].textContent = 'Altro';
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
            toTranslate[it.next().value].textContent = 'Benvenuti';
            toTranslate[it.next().value].innerHTML = '<img id="logoAboutMe" src="images/LogoAboutMe.png">Mi chiamo Luigi "2G" Balzano e sono nato a Torre Annunziata nel napoletano. Frequento l\'Accademia delle Belle Arti, grazie alla quale ho avuto la possibilità di coltivare la mia passione per l\'arte, alimentata anche dagli interessi sviluppati nel corso degli anni. Ho appreso delle conoscenze di informatica che mi sono state preziose per esprimere le mie idee attraverso i lavori. Noterete sicuramente come molte delle mie creazioni siano state influenzate dalle opere con cui risuono di più, ad esempio dall\'anime Steins; Gate, il quale racconta una storia profonda che mi vede in sintonia col protagonista; dal manga Attack on Titan, dimostrazione pratica di come la tecnica da sola non basta e deve essere veicolo di un messaggio importante; inoltre, nei miei lavori tendo a piegare la realtà senza distaccarmene, sotto influenza di due grandi registi come Christopher Nolan e Martin Scorsese. Pongo molta enfasi nel dare una forma alle miei emozioni ed i miei pensieri tramite l\'arte, l\'unico mezzo che mi permette a pieno di esprimere pensieri e stati d\'animo.';
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
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].textContent = 'Ringrazio';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> per la programmazione del sito.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf per la revisione testi.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> per aver acconsentito a pubblicare le collaborazioni.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> per l\'hosting';
            toTranslate[it.next().value].innerHTML = 'Un ringraziamento speciale a <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> e <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';

        }
        if (design) {
            toTranslate[it.next().value].textContent = 'Design';
            toTranslate[it.next().value].textContent = 'Coding';
            toTranslate[it.next().value].textContent = 'Disegni';
            toTranslate[it.next().value].textContent = '3D';

            toTranslate[it.next().value].textContent = 'Grafiche e logo per i social di RaamDeadman';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per il secondo canale youtube di RaamDeadman';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per i miei social';
        }
        if (editing) {
            toTranslate[it.next().value].textContent = 'Originali';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].innerHTML = 'Satoru Gojo da Jujutsu Kaisen.<sub>PH: Rankoll</sub>';
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
        if (video) {
            toTranslate[it.next().value].textContent = 'Originali';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
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
