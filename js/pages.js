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

    const rangeIterator = {
        next() {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true };
        }
    };
    return rangeIterator;
}

function language() {
    let toTranslate = document.getElementsByClassName('en');
    const wrap = document.getElementById('default');
    const design = document.getElementById('design');
    const editing = document.getElementById('editing');
    const it = makeRangeIterator(0, 150, 1);

    if(document.getElementsByClassName('check')[0].checked) {
        toTranslate[it.next()].textContent = 'About Me';
        toTranslate[it.next()].textContent = 'Videos';
        toTranslate[it.next()].textContent = 'About Me';
        toTranslate[it.next()].textContent = 'Works';
        toTranslate[it.next()].textContent = 'Works';
        toTranslate[it.next()].textContent = 'More edits';
        toTranslate[it.next()].textContent = 'More videos';
        toTranslate[it.next()].textContent = 'More designs';
        toTranslate[it.next()].textContent = 'Contacts';
        if (wrap) {
            toTranslate[it.next()].textContent = 'Contacts';
            toTranslate[it.next()].textContent = 'Collaborations';
            toTranslate[it.next()].textContent = 'Special thanks';
            toTranslate[it.next()].textContent = 'Works';
            toTranslate[it.next()].textContent = 'My name is Luigi but you can call me Giorgio';
            toTranslate[it.next()].textContent = 'Lately I am working with';
            toTranslate[it.next()].textContent = 'Collaborations';
            toTranslate[it.next()].textContent = 'Special thanks to Rankoll for coding, myself for every detailed illustrations';
            toTranslate[it.next()].textContent = 'More about';
            toTranslate[it.next()].textContent = 'More about';
            toTranslate[it.next()].textContent = 'More about';
        }
        if (design) {
            /*toTranslate[it.next()].textContent = 'Graphics very cool';*/
            toTranslate[it.next()].textContent = 'Graphics and logo for RaamDeadman\'s socials';
            toTranslate[it.next()].textContent = 'Graphics and logo for the 2nd Youtube channel of RaamDeadman';
            toTranslate[it.next()].textContent = 'Graphics and logo for my socials';
        }
        if (editing) {
            toTranslate[it.next()].textContent = 'Basim Ibn Ishaq from Assassin\'s Creed by RaamDeadman';
            toTranslate[it.next()].textContent = 'The Rumbling from Attack on Titan.';
            toTranslate[it.next()].textContent = 'Connor from Detroit Become Human by RaamDeadman.';
            toTranslate[it.next()].textContent = 'Okabe & Daru from Steins;Gate w/RaamDeadman.';
            toTranslate[it.next()].textContent = 'Shanks from One Piece by RaamDeadman.';
            toTranslate[it.next()].textContent = 'Thor Ravager from Thor Love&Thunder by RaamDeadman.';
            toTranslate[it.next()].textContent = 'Aiden Pearce from Watch Dogs.';
            toTranslate[it.next()].textContent = 'Soul from Dark Soul.';
        }
    } else {
        toTranslate[it.next()].textContent = 'Chi sono';
        toTranslate[it.next()].textContent = 'Video';
        toTranslate[it.next()].textContent = 'Chi sono';
        toTranslate[it.next()].textContent = 'Lavori';
        toTranslate[it.next()].textContent = 'Lavori';
        toTranslate[it.next()].textContent = 'Più editing';
        toTranslate[it.next()].textContent = 'Più video';
        toTranslate[it.next()].textContent = 'Più designs';
        toTranslate[it.next()].textContent = 'Contatti';
        if (wrap) {
            toTranslate[it.next()].textContent = 'Contatti';
            toTranslate[it.next()].textContent = 'Collaborazioni';
            toTranslate[it.next()].textContent = 'Ringraziamenti';
            toTranslate[it.next()].textContent = 'Lavori';
            toTranslate[it.next()].textContent = 'Il mio nome è Luigi, sono un tecnico informatico che ha iniziato a frequentare l\'accademia delle belle arti di Napoli presso la facoltà di Nuove Tecnologie dell’arte nel 2020. Il mio nome “2G” deriva dalla mia opera preferita: NieR Automata, gioco che mi ha segnato profondamente, grazie al suo scavare a fondo nella natura umana ed alla narrazione impeccabile del maestro Yoko Taro. Principalmente mi occupo di fotomontaggio e fotoritocco, mi diletto nella creazione di VFX e nel video editing.';
            toTranslate[it.next()].textContent = 'Attualmente collaboro con il cosplayer e Youtuber RaamDeadman, a cui edito le foto e curo le estetiche dei social e lo streamer LosMichele, editando i momenti salienti delle sue live mediante diversi format, come i Best of e le Pillole. Sono un fruitore assiduo di anime, manga, videogames da cui prendo ispirazione per i miei lavori di fotomontaggio ed amo il cinema, passione che mi ha avvicinato al mondo dei VFX e dell’editing video in generale.';
            toTranslate[it.next()].textContent = 'Collaborazioni';
            toTranslate[it.next()].textContent = 'Un ringraziamento speciale a ciccio e caio';
            toTranslate[it.next()].textContent = 'Scopri di più';
            toTranslate[it.next()].textContent = 'Scopri di più';
            toTranslate[it.next()].textContent = 'Scopri di più';
        }
        if (design) {
            toTranslate[it.next()].textContent = 'Grafiche e logo per i social di RaamDeadman';
            toTranslate[it.next()].textContent = 'Grafiche e logo per il secondo canale youtube di RaamDeadman';
            toTranslate[it.next()].textContent = 'Grafiche e logo per i miei social';
        }
        if (editing) {
            toTranslate[it.next()].textContent = 'Basim Ibn Ishaq da Assassin\'s Creed by RaamDeadman';
            toTranslate[it.next()].textContent = 'Il Boato da L\'attacco dei Giganti.';
            toTranslate[it.next()].textContent = 'Connor da Detroit Become Human by RaamDeadman.';
            toTranslate[it.next()].textContent = 'Okabe & Daru da Steins;Gate w/RaamDeadman.';
            toTranslate[it.next()].textContent = 'Shanks da One Piece by RaamDeadman.';
            toTranslate[it.next()].textContent = 'Thor Ravager da Thor Love&Thunder by RaamDeadman.';
            toTranslate[it.next()].textContent = 'Aiden Pearce da Watch Dogs.';
            toTranslate[it.next()].textContent = 'Anima da Dark Soul.';
        }
    }
}