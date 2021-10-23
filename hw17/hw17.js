//1
const container1 = document.getElementById('container');
const container2 = document.querySelector('#container');

//2
const secondLi = document.querySelectorAll('li.second');

//3
const thirdLi = document.querySelectorAll('ol > li.third');

//4
const header = document.querySelector('.header');
header.innerHTML = 'Hello';

//5
const elem = document.querySelector('.footer');
elem.classList.add('main');
elem.classList.remove('main');

//6
const li = document.createElement('li');
li.innerHTML = 'four';

//7
const ul = document.querySelector('ul');
ul.append(li);

//8
const greenLi = document.querySelector('ol');
greenLi.style.backgroundColor = 'green';

//9
const divFooter = document.querySelector('div.footer');
divFooter.remove();
