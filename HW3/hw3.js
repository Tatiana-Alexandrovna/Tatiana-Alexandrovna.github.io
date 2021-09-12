const userName = "name";
const age = '19';
const role = "Admin";
const occupation = "CEO";

console.log (!!userName && (age>18));

console.log (role==="Admin" && occupation ==="CEO");

console.log ( occupation || role);

console.log ((!!userName && age>18) || role==="Admin");

console.log (role!=="Admin" && !!userName && age);