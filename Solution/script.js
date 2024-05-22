const btn = document.querySelector(".reg");
const popUp = document.querySelector(".pop-up");
const overlay = document.querySelector('.overlay');

btn.addEventListener("click", show);

function show () {
    popUp.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

overlay.addEventListener("click", hide);

function hide () {
    popUp.classList.add('hidden');
    overlay.classList.add('hidden');
}

