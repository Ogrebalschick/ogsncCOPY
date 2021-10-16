function displ(ddd) {
    var el = document.getElementById(ddd);
    if (el.className.indexOf('hidden') >= 0) {
        el.className = 'text-box'; document.getElementById(ddd + '-link').innerText = 'Ещё';
    }
    else {
        el.className = 'text-box hidden';
        document.getElementById(ddd + '-link').innerText = 'Ещё';
    }
}


// let btn = docuemnt.querySelector('#buttonid');
// btn.addEventListener('clcik', (x) => {
//     x.ClassList.toggle('show');
// });

    let btn = document.querySelector('#close');
    let footer = document.querySelector('.footer__sitemap-wrapper');
    btn.addEventListener('click', () => {footer.classList.remove('show')});




    let fsw__btn = document.querySelector('#fsw__btn');
    fsw__btn.addEventListener('click', () => {footer.classList.toggle('show')});