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

dragElement(document.querySelector('.draggable'));

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const dragHeader = document.getElementById(elmnt.id + "header");
    if (dragHeader) {
      // if present, the header is where you move the DIV from:
      dragHeader.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}