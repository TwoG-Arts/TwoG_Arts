let prevButton = document.getElementById('2g');
let prevHeaderButton = document.getElementById('firstButton');
let prevButtonText = document.getElementById('YoRHa');
let prevButtonDropdown = document.getElementById('home');
let prevButtonDropdownText = document.getElementById('homeText');
let prevButtonClicked = null;
let prevButtonClickedText = null;
let showing = null;
let selected = false;
let check = 0;
let checkUp = 0;

$(function () {
    $(".AboutMe").load("pages/AboutMe.html");
    headerButtons(0);
    clickedDropdown(0);
    let random = document.getElementById('banana');
    let num = Math.floor(Math.random() * 2);
    if (num === 0) {
        random.textContent = '2G & Rankoll';
    } else {
        random.textContent = 'Rankoll & 2G';
    }
});

function videos(i) {
    const mob = document.getElementsByClassName('mobile')[0];

    $(".Videos").load("pages/Videos.html");

    $(".Designs").html('');
    $(".AboutMe").html('');
    $(".Editing").html('');
    mob.style.display = 'none';

    if (i===1) {
        const selection = document.getElementsByClassName('Videos')[0];
        selection.classList.add('loadThis');
    }
    $(".home").html('Home');
}

function designs(i) {
    const mob = document.getElementsByClassName('mobile')[0];

    $(".Designs").load("pages/Designs.html");
    $(".Editing").html('');
    $(".AboutMe").html('');
    $(".Videos").html('');
    mob.style.display = 'none';

    if (i===1) {
        const selection = document.getElementsByClassName('Designs')[0];
        selection.classList.add('loadThis');
    }
    $(".home").html('Home');
}

function editing(i) {
    const mob = document.getElementsByClassName('mobile')[0];

    $(".Editing").load("pages/Editing.html");
    $(".Designs").html('');
    $(".AboutMe").html('');
    $(".Videos").html('');
    mob.style.display = 'none';

    if (i===1) {
        const selection = document.getElementsByClassName('Editing')[0];
        selection.classList.add('loadThis');
    }
    $(".home").html('Home');
}

function aboutMe(i) {
    const mob = document.getElementsByClassName('mobile')[0];

    $(".AboutMe").load("pages/AboutMe.html");
    $(".Editing").html('');
    $(".Designs").html('');
    $(".Videos").html('');
    if ($(window).width() <= 1100) {
        mob.style.display = 'block';
    }

    $(".home").html('Chi sono');
}

function selection() {
    let activeButton = prevButton;
    let activeButtonText = prevButtonText;
    activeButton.classList.remove('blackButton');
    activeButtonText.classList.remove('blackButton');
}

function selectionLeave() {
    let buttonActive = document.getElementsByClassName('active')[0];
    buttonActive.classList.add('hovering');
    prevButton.classList.add('blackButton');
    prevButtonText.classList.add('blackButton');
}

function buttonHover(i) {
    let button = document.getElementsByClassName('button')[i];
    let buttonText = button.getElementsByTagName('div')[1];
    button.classList.add('hovering');
    button.classList.add('blackButton');
    buttonText.classList.add('blackButton');
}

function buttonLeave(i) {
    let button = document.getElementsByClassName('button')[i];
    let buttonText = button.getElementsByTagName('div')[1];
    button.classList.remove('hovering');
    button.classList.remove('blackButton');
    buttonText.classList.remove('blackButton');
}

function headerSelection() {
    prevHeaderButton.classList.remove('transform');
}

function headerSelectionLeave() {
    prevHeaderButton.classList.add('transform');
}

function headerHover(i) {
    const selected = document.getElementsByClassName('works')[i];
    selected.classList.add('transform');
}

function headerLeave(i) {
    const selected = document.getElementsByClassName('works')[i];
    selected.classList.remove('transform');
}

function headerButtons(i) {
    const selected = document.getElementsByClassName('works')[i];
    selected.classList.add('transform');
    if (prevHeaderButton !== null && prevHeaderButton !== selected) {
        prevHeaderButton.classList.remove('transform');
        prevHeaderButton = selected;
    }
    prevHeaderButton = selected;
}

function clicked(i) {
    const selected = document.getElementsByClassName('button')[i];
    const selectedText = selected.getElementsByTagName('div')[1];
    selected.classList.add('blackButton');
    selectedText.classList.add('blackButton');
    selected.classList.add('active');

    if (prevButton !== null && prevButton !== selected) {
        prevButton.classList.remove('active');
        prevButton.classList.remove('blackButton');
        prevButtonText.classList.remove('blackButton');
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

function clickedDropdown(i) {
    const selectedColor = document.getElementsByClassName('buttonSelected')[i];
    const selectedTextColor = selectedColor.getElementsByTagName('div')[1];
    const buttonSelected = document.getElementsByClassName('buttonSelected');
    const content = document.getElementsByClassName('dropdown-content')[0];
    const dropdownContent = document.getElementsByClassName('dropdown-content2');
    const prevBut = prevButtonDropdown;
    const prevButText = prevButtonDropdownText;

    selectedColor.classList.add('blackButton');
    selectedTextColor.classList.add('blackButton');
    if (i===0 && i>1 && i<10 && i!==4 && i!==7) {
        check = i;
        switch (i) {
            case 0:
                checkUp = 0;
                break;
            case 2:
                checkUp = 1;
                break;
            case 3:
                checkUp = 1;
                break;
            case 5:
                checkUp = 4;
                break;
            case 6:
                checkUp = 4;
                break;
            case 8:
                checkUp = 7;
                break;
            case 9:
                checkUp = 7;
                break;
        }
    }
    if ((i===0 || i===1 || i===4 || i===7) && prevButtonClicked !== selectedColor) {
        switch (i) {
            case 0:
                dropdownContent[0].classList.remove('dropAnimation2');
                dropdownContent[1].classList.remove('dropAnimation2');
                dropdownContent[2].classList.remove('dropAnimation2');
                break;
            case 1:
                dropdownContent[1].classList.remove('dropAnimation2');
                dropdownContent[2].classList.remove('dropAnimation2');
                dropdownContent[0].classList.add('dropAnimation2');
                break;
            case 4:
                dropdownContent[2].classList.remove('dropAnimation2');
                dropdownContent[0].classList.remove('dropAnimation2');
                dropdownContent[1].classList.add('dropAnimation2');
                break;
            case 7:
                dropdownContent[1].classList.remove('dropAnimation2');
                dropdownContent[0].classList.remove('dropAnimation2');
                dropdownContent[2].classList.add('dropAnimation2');
                break;
        }
        if (i===1 || i===4 || i===7) {
            content.classList.add('bigSelection');
            content.classList.remove('selecting');
        }
        if (i===1) {
            buttonSelected[2].classList.remove('blackButton');
            buttonSelected[2].getElementsByTagName('div')[1].classList.remove('blackButton');
            buttonSelected[3].classList.remove('blackButton');
            buttonSelected[3].getElementsByTagName('div')[1].classList.remove('blackButton');
        } if (i===4) {
            buttonSelected[5].classList.remove('blackButton');
            buttonSelected[5].getElementsByTagName('div')[1].classList.remove('blackButton');
            buttonSelected[6].classList.remove('blackButton');
            buttonSelected[6].getElementsByTagName('div')[1].classList.remove('blackButton');
        } if (i===7) {
            buttonSelected[8].classList.remove('blackButton');
            buttonSelected[8].getElementsByTagName('div')[1].classList.remove('blackButton');
            buttonSelected[9].classList.remove('blackButton');
            buttonSelected[9].getElementsByTagName('div')[1].classList.remove('blackButton');
        }
        if (prevBut !== null && prevBut !== selectedColor) {
            prevBut.classList.remove('blackButton');
            prevButText.classList.remove('blackButton');
            prevButtonDropdown = selectedColor;
            prevButtonDropdownText = selectedTextColor;
        }
        prevButtonDropdown = selectedColor;
        prevButtonDropdownText = selectedTextColor;
        return;
    }

    if (prevButtonClicked !== null && prevButtonClicked !== selectedColor) {
        prevButtonClicked.classList.remove('blackButton');
        prevButtonClickedText.classList.remove('blackButton');
        prevButtonClicked = selectedColor;
        prevButtonClickedText = selectedTextColor;
    }
    prevButtonClicked = selectedColor;
    prevButtonClickedText = selectedTextColor;
}

function checkMobile() {
    const buttonHighlight = document.getElementsByClassName('buttonSelected')[check];
    const buttonAbove = document.getElementsByClassName('buttonSelected')[checkUp];
    const buttonHighlightText = buttonHighlight.getElementsByTagName('div')[1];
    const buttonAboveText = buttonAbove.getElementsByTagName('div')[1];
    const black = document.getElementsByClassName('blackButton')[0];
    black.classList.remove('blackButton');
    if (check !== 0) {
        buttonHighlight.classList.add('blackButton');
        buttonHighlightText.classList.add('blackButton');
    } else if (checkUp !== 0) {
        buttonAbove.classList.add('blackButton');
        buttonAboveText.classList.add('blackButton');
    } else {
        buttonHighlight.classList.add('blackButton');
        buttonHighlightText.classList.add('blackButton');
    }
}

function dropContent() {
    if (selected === false) {
        view();
    } else {
        hide();
    }
}

function view() {
    const content = document.getElementsByClassName('dropdown-content')[0];
    const lines = document.getElementById('lines');
    const button = document.getElementById('button');
    content.classList.add('selecting');
    content.classList.remove('dropAnimation');
    lines.classList.add('rotate');
    button.classList.add('rotate');
    selected = true;
}

function hide(j) {
    const content = document.getElementsByClassName('dropdown-content')[0];
    const lines = document.getElementById('lines');
    const button = document.getElementById('button');
    content.classList.remove('selecting');
    content.classList.add('dropAnimation');
    if (j===0) {
        content.classList.remove('bigSelection');
    }
    lines.classList.remove('rotate');
    button.classList.remove('rotate');
    selected = false;
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
        toTranslate[it.next().value].textContent = 'Home';
        toTranslate[it.next().value].textContent = 'Editing';
        toTranslate[it.next().value].textContent = 'Originals';
        toTranslate[it.next().value].textContent = 'Collaborations';
        toTranslate[it.next().value].textContent = 'Videos';
        toTranslate[it.next().value].textContent = 'Originals';
        toTranslate[it.next().value].textContent = 'Collaborations';
        toTranslate[it.next().value].textContent = 'Other';
        toTranslate[it.next().value].textContent = 'Design';
        toTranslate[it.next().value].textContent = 'Drawings';

        toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Works<div class="overlay-right"><img src="images/ovhone.png"></div>';
        toTranslate[it.next().value].textContent = 'More edits';
        toTranslate[it.next().value].textContent = 'More videos';
        toTranslate[it.next().value].textContent = 'More designs';
        toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Contacts<div class="overlay-right"><img src="images/ovhone.png"></div>';
        toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Support Me<div class="overlay-right"><img src="images/ovhone.png"></div>';
        if (wrap) {
            toTranslate[it.next().value].textContent = 'Works';
            toTranslate[it.next().value].textContent = 'Contacts';
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].textContent = 'Special Thanks';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>About Me<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Welcome<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<img id="logoAboutMe" src="images/LogoAboutMe.png">My name is Luigi "2G" Balzano and I\'m born in Torre Annunziata near Naples. I attend the Academy of Fine Arts, thanks to which I had the chance to grow my passion for the arts, powered by the interests that I developed throught the years. I learned computer science skills, precious to me, that helped me express my ideas through my works. You could surely notice how many of my creations have been affected by the works with which I resonate the most, for example Steins;Gate, which tells the deep story of a man I see me in tune with; from the manga Attack on Titan, practically showing how a good technique alone isn\'t enough and it has to carry a more important message; also, in my works I tend to bend reality without parting from it, under the influence of two great directors like Christopher Nolan and Martin Scorsese. I put a lot of emphasis on shaping my emotions and my thoughts through arts, the only means that allows me to fully express thoughts and moods.';
            toTranslate[it.next().value].textContent = 'More about';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Videos<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].textContent = 'More about';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Collaborations<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Special Thanks<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Special Thanks<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> for programming the site.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf for the supervision of texts.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> for the agreement of sharing the collaborations.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> for the hosting.';
            toTranslate[it.next().value].innerHTML = 'A special thanks to <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> and <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Contacts<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Support Me<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Collaborations<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Special Thanks<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> for programming the site.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf for the supervision of texts.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> for the agreement of sharing the collaborations.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> for the hosting.';
            toTranslate[it.next().value].innerHTML = 'A special thanks to <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> and <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';

        }
        if (design) {
            toTranslate[it.next().value].textContent = 'Design';
            toTranslate[it.next().value].textContent = 'Drawings';
            toTranslate[it.next().value].textContent = 'Coding';
            toTranslate[it.next().value].textContent = '3D';

            /*toTranslate[it.next().value].textContent = 'Graphics very cool';*/
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Design<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].textContent = 'Graphics and logo for RaamDeadman\'s socials.';
            toTranslate[it.next().value].textContent = 'Graphics and logo for the 2nd Youtube channel of RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Graphics and logo for my socials.';

            /*Drawings*/
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Drawings<div class="overlay-right"><img src="images/ovhone.png"></div>';

            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Coding<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].textContent = 'Image Randomizer.';
            toTranslate[it.next().value].textContent = 'Website of Maikubirth mod for The Binding of Isaac.';
            toTranslate[it.next().value].textContent = 'Website of the personal portfolio.';

            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>3D<div class="overlay-right"><img src="images/ovhone.png"></div>';
        }
        if (editing) {
            toTranslate[it.next().value].textContent = 'Originals';
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Originals<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = 'King Viserys I Targaryen from Game of Thrones.<sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Darius from Assassin\'s Creed Odyssey.<sub>PH: RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Satoru Gojo from Jujutsu Kaisen.<sub>PH: Rankoll.</sub>';
            toTranslate[it.next().value].innerHTML = 'Ken Kaneki from Tokyo Ghoul. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'The Rumbling from Attack on Titan. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Okabe & Daru from Steins;Gate w/RaamDeadman. <sub>PH: Rankoll \& RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Aiden Pearce from Watch Dogs. <sub>PH: RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Soul from Dark Souls. <sub>PH: Me.</sub>';


            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Collaborations<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = 'Jonhnny Silverhand from Cyberpunk 2077 by RaamDeadman <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Crocodile from One Piece by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Basim Ibn Ishaq from Assassin\'s Creed V2 by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Basim Ibn Ishaq From Assassin\'s Creed by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Connor from Detroit Become Human by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Shanks from One Piece by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Thor Ravager from Thor Love&Thunder by RaamDeadman. <sub>PH: Me.</sub>';
        }
        if (video) {
            toTranslate[it.next().value].textContent = 'Originals';
            toTranslate[it.next().value].textContent = 'Collaborations';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Originals<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Collaborations<div class="overlay-right"><img src="images/ovhone.png"></div>';

        }
    } else {
        toTranslate[it.next().value].textContent = 'Chi sono';
        toTranslate[it.next().value].textContent = 'Video';
        toTranslate[it.next().value].textContent = 'Altro';
        toTranslate[it.next().value].textContent = 'Home';
        toTranslate[it.next().value].textContent = 'Editing';
        toTranslate[it.next().value].textContent = 'Originali';
        toTranslate[it.next().value].textContent = 'Collaborazioni';
        toTranslate[it.next().value].textContent = 'Video';
        toTranslate[it.next().value].textContent = 'Originali';
        toTranslate[it.next().value].textContent = 'Collaborazioni';
        toTranslate[it.next().value].textContent = 'Altro';
        toTranslate[it.next().value].textContent = 'Design';
        toTranslate[it.next().value].textContent = 'Disegni';

        toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Lavori<div class="overlay-right"><img src="images/ovhone.png"></div>';
        toTranslate[it.next().value].textContent = 'Più editing';
        toTranslate[it.next().value].textContent = 'Più video';
        toTranslate[it.next().value].textContent = 'Più designs';
        toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Contatti<div class="overlay-right"><img src="images/ovhone.png"></div>';
        toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Supportami<div class="overlay-right"><img src="images/ovhone.png"></div>';
        if (wrap) {
            toTranslate[it.next().value].textContent = 'Lavori';
            toTranslate[it.next().value].textContent = 'Contatti';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].textContent = 'Ringraziamenti';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Chi sono<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Benvenuti<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<img id="logoAboutMe" src="images/LogoAboutMe.png">Mi chiamo Luigi "2G" Balzano e sono nato a Torre Annunziata nel napoletano. Frequento l\'Accademia delle Belle Arti, grazie alla quale ho avuto la possibilità di coltivare la mia passione per l\'arte, alimentata anche dagli interessi sviluppati nel corso degli anni. Ho appreso delle conoscenze di informatica che mi sono state preziose per esprimere le mie idee attraverso i lavori. Noterete sicuramente come molte delle mie creazioni siano state influenzate dalle opere con cui risuono di più, ad esempio dall\'anime Steins; Gate, il quale racconta una storia profonda che mi vede in sintonia col protagonista; dal manga de\' L\'Attacco dei giganti, dimostrazione pratica di come la tecnica da sola non basta e deve essere veicolo di un messaggio importante; inoltre, nei miei lavori tendo a piegare la realtà senza distaccarmene, sotto influenza di due grandi registi come Christopher Nolan e Martin Scorsese. Pongo molta enfasi nel dare una forma alle mie emozioni ed i miei pensieri tramite l\'arte, l\'unico mezzo che mi permette a pieno di esprimere pensieri e stati d\'animo.';
            toTranslate[it.next().value].textContent = 'Scopri di più';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Video<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].textContent = 'Scopri di più';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Collaborazioni<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Ringraziamenti<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Ringraziamenti<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> per la programmazione del sito.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf per la revisione testi.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> per aver acconsentito a pubblicare le collaborazioni.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> per l\'hosting';
            toTranslate[it.next().value].innerHTML = 'Un ringraziamento speciale a <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> e <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Contattami<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Supportami<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Collaborazioni<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Ringraziamenti<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com/Rankoll" target="_blank">Rankoll</a> per la programmazione del sito.';
            toTranslate[it.next().value].innerHTML = 'lexA & Xion Romeruf per la revisione testi.';
            toTranslate[it.next().value].innerHTML = '<a href="https://www.instagram.com/michelelosciale/" target="_blank">Losmichele</a> & <a href="https://www.instagram.com/deadman_cosplay/" target="_blank">RaamDeadman</a> per aver acconsentito a pubblicare le collaborazioni.';
            toTranslate[it.next().value].innerHTML = '<a href="https://github.com" target="_blank">GitHub</a> per l\'hosting.';
            toTranslate[it.next().value].innerHTML = 'Un ringraziamento speciale a <a href="https://www.platinumgames.com/" target="_blank">Platinum Games</a> e <a href="https://twitter.com/yokotaro" target="_blank">Yoko Taro</a>.';

        }
        if (design) {
            toTranslate[it.next().value].textContent = 'Design';
            toTranslate[it.next().value].textContent = 'Disegni';
            toTranslate[it.next().value].textContent = 'Coding';
            toTranslate[it.next().value].textContent = '3D';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Design<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per i social di RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per il secondo canale youtube di RaamDeadman.';
            toTranslate[it.next().value].textContent = 'Grafiche e logo per i miei social.';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Disegni<div class="overlay-right"><img src="images/ovhone.png"></div>';

            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Coding<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].textContent = 'Selettore di immagini casuale.';
            toTranslate[it.next().value].textContent = 'Sito Web Maikubirth mod per The Binding of Isaac.';
            toTranslate[it.next().value].textContent = 'Sito Web portfolio personale.';

            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>3D<div class="overlay-right"><img src="images/ovhone.png"></div>';
        }
        if (editing) {
            toTranslate[it.next().value].textContent = 'Originali';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Originali<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = 'Re Viserys I Targaryen da Il Trono Di Spade.<sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Darius da Assassin\'s Creed Odyssey.<sub>PH: RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Satoru Gojo da Jujutsu Kaisen.<sub>PH: Rankoll.</sub>';
            toTranslate[it.next().value].innerHTML = 'Ken Kaneki da Tokyo Ghoul. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Il Boato da L\'attacco dei Giganti. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Okabe & Daru da Steins;Gate w/RaamDeadman. <sub>PH: Rankoll \& RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Aiden Pearce da Watch Dogs. <sub>PH: RaamDeadman.</sub>';
            toTranslate[it.next().value].innerHTML = 'Anima da Dark Souls. <sub>PH: Me.</sub>';


            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Collaborazioni<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = 'Jonhnny Silverhand da Cyberpunk 2077 by RaamDeadman <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Crocodile da One Piece by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Basim Ibn Ishaq da Assassin\'s Creed V2 by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Basim Ibn Ishaq da Assassin\'s Creed by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Connor da Detroit Become Human by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Shanks da One Piece by RaamDeadman. <sub>PH: Me.</sub>';
            toTranslate[it.next().value].innerHTML = 'Thor Ravager da Thor Love&Thunder by RaamDeadman. <sub>PH: Me.</sub>';
        }
        if (video) {
            toTranslate[it.next().value].textContent = 'Originali';
            toTranslate[it.next().value].textContent = 'Collaborazioni';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Originali<div class="overlay-right"><img src="images/ovhone.png"></div>';
            toTranslate[it.next().value].innerHTML = '<div class="overlay-left"><img src="images/ovhone.png"></div>Collaborazioni<div class="overlay-right"><img src="images/ovhone.png"></div>';
        }
    }
}

const mediaQueryList = window.matchMedia('(max-width: 1100px)');

function screenTest(e) {
    const mob = document.getElementsByClassName('mobile')[0];
    if (e.matches) {
        /* the viewport is 1100 pixels wide or less */
        clicked(0);
        select(0);
        mob.style.display = 'flex';
    } else {
        /* the viewport is more than 1100 pixels wide */
        mob.style.display = 'none';
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
