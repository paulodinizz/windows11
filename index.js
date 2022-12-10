let startMenu = document.getElementById('start');
let startCode = document.getElementById('startCode');
let body = document.getElementById('body');

startMenu.addEventListener('click', function () {
    document.querySelector('.popup').classList.toggle("popActive");
    document.querySelector('.clicked').classList.toggle("hovActive");
})

startCode.addEventListener('click', function () {
    document.querySelector('.vscode').classList.toggle("vscodeActive");
    document.querySelector('.clickedVscode').classList.toggle("hovActive");
})


let search = document.getElementById('search-box');
search.addEventListener('input', function () {
    let searched = search.value;
    let apps = document.getElementsByClassName('appImg');
    Array.from(apps).forEach(function (button) {
        let appName = button.getElementsByClassName('recAppName')[0].innerText;
        if (appName.includes(searched)) {
            button.style.display = "flex";
        }
        else {
            button.style.display = "none";
        }
    })
})

let powerBtn = document.getElementById('p-btn');
powerBtn.addEventListener('click', function(){
    document.querySelector('.power-menu').classList.toggle("power-menu-vis");
})