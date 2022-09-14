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
