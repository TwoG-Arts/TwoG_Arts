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

function language() {
    let toTranslate = document.getElementsByClassName('en');
    const wrap = document.getElementsByClassName('wrap')[0];
    const design = document.getElementsByClassName('video')[0];
    const editing = document.getElementsByClassName('works')[0];

    if(document.getElementsByClassName('check')[0].checked) {
        toTranslate[0].textContent = 'About Me';
        toTranslate[1].textContent = 'Videos';
        toTranslate[2].textContent = 'About Me';
        toTranslate[3].textContent = 'Works';
        toTranslate[4].textContent = 'Works';
        toTranslate[5].textContent = 'More edits';
        toTranslate[6].textContent = 'More videos';
        toTranslate[7].textContent = 'More designs';
        toTranslate[8].textContent = 'Contacts';
        if (wrap.style.display === 'flex') {
            toTranslate[9].textContent = 'Contacts';
            toTranslate[10].textContent = 'Collaborations';
            toTranslate[11].textContent = 'Special thanks';
            toTranslate[12].textContent = 'Works';
            toTranslate[13].textContent = 'My name is Luigi but you can call me Giorgio';
            toTranslate[14].textContent = 'Lately I am working with';
            toTranslate[15].textContent = 'Collaborations';
            toTranslate[16].textContent = 'Special thanks to Rankoll for coding, myself for every detailed illustrations';
            toTranslate[17].textContent = 'More about';
            toTranslate[18].textContent = 'More about';
            toTranslate[19].textContent = 'More about';
        }
        if (design.style.display === 'flex') {
            toTranslate[9].textContent = 'Graphics and logo for RaamDeadman\'s socials';
            toTranslate[10].textContent = 'Graphics and logo for the 2nd Youtube channel of RaamDeadman';
            toTranslate[11].textContent = 'Graphics and logo for my socials';
        }
        if (editing.style.display === 'flex') {
            toTranslate[9].textContent = 'Basim Ibn Ishaq da Assassin\'s Creed by RaamDeadman';
            toTranslate[10].textContent = 'The Rumbling from Attack on Titan.';
            toTranslate[11].textContent = 'Connor from Detroit Become Human by RaamDeadman.';
            toTranslate[12].textContent = 'Okabe & Daru from Steins;Gate w/RaamDeadman.';
            toTranslate[13].textContent = 'Shanks from One Piece by RaamDeadman.';
            toTranslate[14].textContent = 'Thor Ravenger from Thor Love&Thunder by RaamDeadman.';
            toTranslate[15].textContent = 'Aiden Pearce from Watch Dogs.';
            toTranslate[16].textContent = 'Soul from Dark Soul.';
        }
    } else {
        toTranslate[0].textContent = 'Chi sono';
        toTranslate[1].textContent = 'Video';
        toTranslate[2].textContent = 'Chi sono';
        toTranslate[3].textContent = 'Lavori';
        toTranslate[4].textContent = 'Lavori';
        toTranslate[5].textContent = 'Più editing';
        toTranslate[6].textContent = 'Più video';
        toTranslate[7].textContent = 'Più designs';
        toTranslate[8].textContent = 'Contatti';
        if (wrap.style.display === 'flex') {
            toTranslate[9].textContent = 'Contatti';
            toTranslate[10].textContent = 'Collaborazioni';
            toTranslate[11].textContent = 'Ringraziamenti';
            toTranslate[12].textContent = 'Lavori';
            toTranslate[13].textContent = 'Il mio nome è Luigi, sono un tecnico informatico che ha iniziato a frequentare l\'accademia delle belle arti di Napoli presso la facoltà di Nuove Tecnologie dell’arte nel 2020. Il mio nome “2G” deriva dalla mia opera preferita: NieR Automata, gioco che mi ha segnato profondamente, grazie al suo scavare a fondo nella natura umana ed alla narrazione impeccabile del maestro Yoko Taro. Principalmente mi occupo di fotomontaggio e fotoritocco, mi diletto nella creazione di VFX e nel video editing.';
            toTranslate[14].textContent = 'Attualmente collaboro con il cosplayer e Youtuber RaamDeadman, a cui edito le foto e curo le estetiche dei social e lo streamer LosMichele, editando i momenti salienti delle sue live mediante diversi format, come i Best of e le Pillole. Sono un fruitore assiduo di anime, manga, videogames da cui prendo ispirazione per i miei lavori di fotomontaggio ed amo il cinema, passione che mi ha avvicinato al mondo dei VFX e dell’editing video in generale.';
            toTranslate[15].textContent = 'Collaborazioni';
            toTranslate[16].textContent = 'Un ringraziamento speciale a ciccio e caio';
            toTranslate[17].textContent = 'Scopri di più';
            toTranslate[18].textContent = 'Scopri di più';
            toTranslate[19].textContent = 'Scopri di più';
        }
        if (design.style.display === 'flex') {
            toTranslate[9].textContent = 'Grafiche e logo per i social di RaamDeadman';
            toTranslate[10].textContent = 'Grafiche e logo per il secondo canale youtube di RaamDeadman';
            toTranslate[11].textContent = 'Grafiche e logo per i miei social';
        }
        if (editing.style.display === 'flex') {
            toTranslate[9].textContent = 'Basim Ibn Ishaq da Assassin\'s Creed by RaamDeadman';
            toTranslate[10].textContent = 'Il Boato da L\'attacco dei Giganti.';
            toTranslate[11].textContent = 'Connor da Detroit Become Human by RaamDeadman.';
            toTranslate[12].textContent = 'Okabe & Daru da Steins;Gate w/RaamDeadman.';
            toTranslate[13].textContent = 'Shanks da One Piece by RaamDeadman.';
            toTranslate[14].textContent = 'Thor Ravenger da Thor Love&Thunder by RaamDeadman.';
            toTranslate[15].textContent = 'Aiden Pearce da Watch Dogs.';
            toTranslate[16].textContent = 'Anima da Dark Soul.';
        }
    }
}