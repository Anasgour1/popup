let btn = document.getElementById('btn')
btn.addEventListener('click', openpopUp);

let okbtn = document.getElementById('okbtn')
okbtn.addEventListener( 'click', closePopup );

let popup = document.getElementById('popup');


function openpopUp(){
  popup.classList.add('open-popup')
}

function closePopup(){
    popup.classList.remove('open-popup')
}