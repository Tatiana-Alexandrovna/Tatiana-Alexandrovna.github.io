const table = document.getElementById('table');
const tr = table.querySelectorAll('.row');


function sortTable(columnIndex) {
    let index = columnIndex;
    let array = Array.from(tr);
    let sortTable = array
        .slice(1)
        .sort((row1, row2) =>
            (row1.querySelectorAll('td')[index].innerHTML > row2.querySelectorAll('td')[index].innerHTML) ? 1 : -1);
    sortTable.forEach(row => {
        table.append(row);
    });  





