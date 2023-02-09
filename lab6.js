function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Репин Роман';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет Бизнеса, ФБИ-02, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Введите имя';
    document.getElementById('input-name').placeholder = 'Введите имя';
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Koval Gleb';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Facultate of Busiess, 3 course, FBI-02';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'Enter your name';
}

function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    alert('Hello, ' + userName + ' ' + userSurname + '\n' + 'Your age: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b= Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}

function showAlert2() {
    alert('Посмотри на это!');
    document.getElementById('student').style.backgroundColor = 'green';
}

function showAlert3() {
    alert('Look at this!');
    document.getElementById('footer').style.backgroundColor = 'green';
}
