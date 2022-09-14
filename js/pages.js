$(function () {
    $(".AboutMe").load("pages/AboutMe.html");
    let random = document.getElementById('banana');
    let num = Math.floor(Math.random() * 2);
    if (num===0) {
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
    if ($(window).width()<=1100) {
        mob.style.display = 'flex';
        work.style.display = 'block';
    }
    $(".home").html('Chi sono');
}

let prevButton = document.getElementById('2g');
let showing = null;

function clicked(i) {
    const selected = document.getElementsByClassName('button')[i];
    selected.style.background = '#4E4B42';
    selected.style.color = "#B4AE9A";
    selected.classList.add('active');
    if (prevButton !== null && prevButton !== selected) {
        prevButton.classList.remove('active');
        prevButton.style.background = '#B4AE9A';
        prevButton.style.color = '#4E4B42';
        prevButton = selected;
    }
    prevButton = selected;
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

$(function language() {
    let toTranslate = document.getElementsByClassName('en');
    let wrap = document.getElementById('default');
    let design = document.getElementById('design');
    let editing = document.getElementById('editing');
    let check = document.getElementsByClassName('check')[0];
    let it = makeRangeIterator(0, 150, 1);

    if(check.checked) {
        toTranslate[it.next().value].textContent = 'About Me';
        toTranslate[it.next().value].textContent = 'Videos';
        if (!(design || editing) && !($(window).width()<=1100)) {
            toTranslate[it.next().value].textContent = 'About Me';
        } else {it.next();}
        toTranslate[it.next().value].textContent = 'Works';
        toTranslate[it.next().value].textContent = 'Works';
        toTranslate[it.next().value].textContent = 'More edits';
        toTranslate[it.next().value].textContent = 'More videos';
        toTranslate[it.next().value].textContent = 'More designs';
        toTranslate[it.next().value].textContent = 'Contacts';
        if (wrap) {
            toTranslate[it.next().value].textContent = 'Contacts';
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].textContent = 'Credits';
            toTranslate[it.next().value].textContent = 'Works';
            toTranslate[it.next().value].textContent = 'My name is Luigi but you can call me Giorgio';
            toTranslate[it.next().value].textContent = 'Lately I am working with';
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].textContent = 'Credits';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> for programming the site.';
            toTranslate[it.next().value].innerHTML = 'Xion & Axel Romeruf for the supervision of texts.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> for the agreement of sharing the collaborations.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> for the hosting';
            toTranslate[it.next().value].innerHTML = 'A special thanks to <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> and <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';
            toTranslate[it.next().value].textContent = 'More about';
            toTranslate[it.next().value].textContent = 'More about';
            toTranslate[it.next().value].textContent = 'More about';
        }
        if (design) {
            let val = it.value;
            console.log(val);
            /*toTranslate[it.next().value].textContent = 'Graphics very cool';*/
            toTranslate[it.next().value].textContent = 'Graphics and logo for RaamDeadman\'s socials';
            toTranslate[it.next().value].textContent = 'Graphics and logo for the 2nd Youtube channel of RaamDeadman';
            toTranslate[it.next().value].textContent = 'Graphics and logo for my socials';
        }
        if (editing) {
            toTranslate[it.next().value].textContent = 'Basim Ibn Ishaq from Assassin\'s Creed by RaamDeadman';
            toTranslate[it.next().value].textContent = 'The Rumbling from Attack on Titan.';
            toTranslate[it.next().value].textContent = 'Connor from Detroit Become Human by RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Okabe & Daru from Steins;Gate w/RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Shanks from One Piece by RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Thor Ravager from Thor Love&Thunder by RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Aiden Pearce from Watch Dogs.';
            toTranslate[it.next().value].textContent = 'Soul from Dark Soul.';
        }
    } else {
        toTranslate[it.next().value].textContent = 'Chi sono';
        toTranslate[it.next().value].textContent = 'Video';
        if (!(design || editing) && !($(window).width()<=1100)) {
            toTranslate[it.next().value].textContent = 'Chi sono';
        } else {it.next();}
        toTranslate[it.next().value].textContent = 'Lavori';
        toTranslate[it.next().value].textContent = 'Lavori';
        toTranslate[it.next().value].textContent = 'Più editing';
        toTranslate[it.next().value].textContent = 'Più video';
        toTranslate[it.next().value].textContent = 'Più designs';
        toTranslate[it.next().value].textContent = 'Contatti';
        if (wrap) {
            toTranslate[it.next().value].textContent = 'Contatti';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].textContent = 'Crediti';
            toTranslate[it.next().value].textContent = 'Lavori';
            toTranslate[it.next().value].textContent = 'Il mio nome è Luigi, sono un tecnico informatico che ha iniziato a frequentare l\'accademia delle belle arti di Napoli presso la facoltà di Nuove Tecnologie dell’arte nel 2020. Il mio nome “2G” deriva dalla mia opera preferita: NieR Automata, gioco che mi ha segnato profondamente, grazie al suo scavare a fondo nella natura umana ed alla narrazione impeccabile del maestro Yoko Taro. Principalmente mi occupo di fotomontaggio e fotoritocco, mi diletto nella creazione di VFX e nel video editing.';
            toTranslate[it.next().value].textContent = 'Attualmente collaboro con il cosplayer e Youtuber RaamDeadman, a cui edito le foto e curo le estetiche dei social e lo streamer LosMichele, editando i momenti salienti delle sue live mediante diversi format, come i Best of e le Pillole. Sono un fruitore assiduo di anime, manga, videogames da cui prendo ispirazione per i miei lavori di fotomontaggio ed amo il cinema, passione che mi ha avvicinato al mondo dei VFX e dell’editing video in generale.';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].textContent = 'Ringrazio';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> per la programmazione del sito.';
            toTranslate[it.next().value].innerHTML = 'Xion & Axel Romeruf per la revisione testi.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> per aver acconsentito a pubblicare le collaborazioni.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> per l\'hosting';
            toTranslate[it.next().value].innerHTML = 'Un ringraziamento speciale a <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> e <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';
            toTranslate[it.next().value].textContent = 'Scopri di più';
            toTranslate[it.next().value].textContent = 'Scopri di più';
            toTranslate[it.next().value].textContent = 'Scopri di più';
        }
        if (design) {
            toTranslate[it.next().value].textContent = 'Grafiche e logo per i social di RaamDeadman';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per il secondo canale youtube di RaamDeadman';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per i miei social';
        }
        if (editing) {
            toTranslate[it.next().value].textContent = 'Basim Ibn Ishaq da Assassin\'s Creed by RaamDeadman';
            toTranslate[it.next().value].textContent = 'Il Boato da L\'attacco dei Giganti.';
            toTranslate[it.next().value].textContent = 'Connor da Detroit Become Human by RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Okabe & Daru da Steins;Gate w/RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Shanks da One Piece by RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Thor Ravager da Thor Love&Thunder by RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Aiden Pearce da Watch Dogs.';
            toTranslate[it.next().value].textContent = 'Anima da Dark Soul.';
        }
    }
})

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
