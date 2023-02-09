function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Успешно';
    else
        button.innerHTML = 'Щелчок';
}


function clickMe2(button) {
    if(button.innerHTML == 'Репин')
        button.innerHTML = 'Роман';
    else
        button.innerHTML = 'Репин';
}

function clickMe3(button)
{ 
    if(button.innerHTML == 'Щелкни на меня')
        button.innerHTML = 'Щелкни еще раз';
    else if (button.innerHTML == 'Щелкни еще раз')
        button.innerHTML = 'Ещё';
        else if (button.innerHTML == 'Ещё')
        button.innerHTML = 'Начать заного';
    else
        button.innerHTML = 'Нажми на меня';
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
});
