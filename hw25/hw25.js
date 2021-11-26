
//1
String.prototype.reverse = function(){
    return this.split("").reverse().join("")
};
const string = 'hello';
console.log(string.reverse());

//2
Array.prototype.sorting = Array.prototype.sort
Array.prototype.sort = function(){
    return this.slice().sorting()
}
let arr = ['red', 'blue', 'yellow']
console.log(arr.sort())
console.log(arr)
 

//3
NodeList.prototype.map = Array.prototype.map;
let div = document.querySelectorAll('div')
div.map(elem => {console.log(elem);})

NodeList.prototype.find = Array.prototype.find;
div.find((item, index) => console.log(index == 1))

NodeList.prototype.reduce = Array.prototype.reduce;
console.log(div.reduce((first, second) => first = second, 0))


