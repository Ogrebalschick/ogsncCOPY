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
// type = "text/javascript" >
//     function displ(ddd) {
//         var el = document.getElementById(ddd);
//         if (el.className.indexOf('hidden') >= 0) {
//             el.className = 'text-box'; document.getElementById(ddd + '-link').innerText = 'Скрыть текст';
//         }
//         else {
//             el.className = 'text-box hidden';
//             document.getElementById(ddd + '-link').innerText = 'Ещё';
//         }
//     }