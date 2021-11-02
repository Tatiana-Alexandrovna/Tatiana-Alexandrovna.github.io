const btnAdd = document.querySelector('.add');
const input = document.querySelector("input");
const list = document.querySelector(".list");

function addToList() {
    const newLi = document.createElement("li");
    newLi.innerHTML = input.value;
    list.append(newLi);
    input.value = '';
}
btnAdd.addEventListener('click', addToList);

list.onclick = function (event) {
    const target = event.target;
    if (target.tagName != "LI") return;
    color(target);
};
let selectedLi;

function color(li) {
    if (selectedLi) {
        selectedLi.classList.remove('bg-color');
    }
    selectedLi = li;
    selectedLi.classList.add('bg-color');
}

const btnRemove = document.querySelector('.remove');

btnRemove.addEventListener('click', removeFromList);
function removeFromList() {
    const coloredLi = document.querySelector('.bg-color');
    coloredLi.remove();
}

