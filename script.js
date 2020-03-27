const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const CHEVNEXT = document.getElementById('chevnext');
const CHEVPREV = document.getElementById('chevprev');
const WRAPSLIDER = document.getElementById('sliderwrap');
const SCREENVERTICAL = document.getElementById('screenvertical')
const SCREENHORIZONTAL = document.getElementById('screenhorizontal');
const PHONEVERT = document.getElementById('blockvert');
const PHONEHOR = document.getElementById('blockhor');
const PORTFOLIOMENU = document.getElementById('portfoliomenu');
const PORTFOLIOCONTENT = document.getElementById('portfoliocontent');
const BURGER = document.getElementById('headerburger');
const NAV = document.getElementById('headernav');
let form = document.querySelector('form');

/* ----------------------------burgerMenu--------------------- */
BURGER.addEventListener('click', () => {
        BURGER.classList.toggle('active');
        NAV.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
    /* ---------------------------scroll menu------------------ */
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});
document.addEventListener('scroll', onscroll);

function onscroll(event) {

    const curPos = window.scrollY;
    const anchor = document.getElementsByClassName('anchor');
    const links = MENU.querySelectorAll('a')

    Array.prototype.forEach.call(anchor, function(el) {
        let elHeight = el.nextSibling.nextSibling.offsetHeight;
        if ((el.offsetTop) <= curPos && (el.offsetTop + elHeight) > curPos) {
            links.forEach(a => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                };
            })
        };
    });
}
/* ----------------------submit-------------------------- */
BUTTON.addEventListener('click', () => {
    const subjectname = document.getElementById('name').value.toString();
    const subjectemail = document.getElementById('email').value.toString();
    let subject = document.getElementById('subject').value.toString();
    let subjectdescr = document.getElementById('description').value.toString();
    subject = subject.length > 0 ? 'Тема: ' + subject : 'Без темы';
    subjectdescr = subjectdescr.length > 0 ? 'Описание: ' + subjectdescr : 'Без описания';
    document.getElementById('resultname').innerText = subjectname;
    document.getElementById('resultemail').innerText = subjectemail;
    document.getElementById('result').innerText = subject;
    document.getElementById('resultdescr').innerText = subjectdescr.slice(0, 45);
    document.getElementById('message-block').classList.remove('hidden');

})

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('resultname').innerText = '';
    document.getElementById('resultemail').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('resultdescr').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    form.reset();
    form.onsubmit = function(evt) {
        evt.preventDefault();

    };
})

PHONEVERT.addEventListener('click', () => {
    SCREENVERTICAL.classList.toggle('clearscreenv');
    SCREENVERTICAL.classList.toggle('screenvertical');
})
PHONEHOR.addEventListener('click', () => {
    SCREENHORIZONTAL.classList.toggle('clearscreenh');
    SCREENHORIZONTAL.classList.toggle('screenhorizontal');
})
PORTFOLIOMENU.addEventListener('click', (event) => {
    PORTFOLIOMENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    let img_list = PORTFOLIOCONTENT.querySelectorAll('img');
    for (let c = 0; c < img_list.length; c++) {
        img_list[img_list.length - 1].after(img_list[c]);
    }
})
PORTFOLIOCONTENT.addEventListener('click', (event) => {
    PORTFOLIOCONTENT.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

form.onsubmit = function(evt) {
    evt.preventDefault();

};
/* ------------------slider--------------- */
let items = document.querySelectorAll('.slider .carousel .slider__content .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

CHEVPREV.addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

CHEVNEXT.addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
});