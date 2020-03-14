const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const CHEVNEXT = document.getElementById('chevnext');
const CHEVPREV = document.getElementById('chevprev');
const WRAPSLIDER = document.getElementById('home');
const SCREENVERTICAL = document.getElementById('screenvertical')
const SCREENHORIZONTAL = document.getElementById('screenhorizontal');
const PHONEVERT = document.getElementById('blockvert');
const PHONEHOR = document.getElementById('blockhor');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})
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
    document.getElementById('resultdescr').innerText = subjectdescr;
    document.getElementById('message-block').classList.remove('hidden');

})
CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('resultname').innerText = '';
    document.getElementById('resultemail').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('resultdescr').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    /*  FormData.reset(); */
})
CHEVNEXT.addEventListener('click', () => {
    WRAPSLIDER.classList.toggle('slider');
    WRAPSLIDER.classList.toggle('slider-two');
})
CHEVPREV.addEventListener('click', () => {
    WRAPSLIDER.classList.toggle('slider');
    WRAPSLIDER.classList.toggle('slider-two');
})
PHONEVERT.addEventListener('click', () => {
    SCREENVERTICAL.classList.toggle('clearscreenv');
    SCREENVERTICAL.classList.toggle('screenvertical');
})
PHONEHOR.addEventListener('click', () => {
    SCREENHORIZONTAL.classList.toggle('clearscreenh');
    SCREENHORIZONTAL.classList.toggle('screenhorizontal');
})