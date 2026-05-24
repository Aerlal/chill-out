const fireplace = document.getElementById('fireplace');
let timesClicked = 0;
fireplace.addEventListener('click', () => {
    timesClicked++;
    let ran = Math.random() * 100;
    if (ran > 50 && timesClicked != 10) {
        alert("Chill");
    }else if (ran <=50 && timesClicked != 10) {
        alert("Relax");
    }
})