const listOfUsers = {
  Admin : 'pass',
}
let message;
function enterLoginFunc() {
  const enterUserLOgin = prompt("Enter your login","");
  return enterUserLOgin;
}
function enterPassFunc() {
  const enterUserPass = prompt("Enter your pass","");
  return enterUserPass;
}
let enterLogin;
let enterPass;
let savedPassword;


checkLogin();
function checkLogin() {
  enterLogin =  enterLoginFunc();
  for(let key in listOfUsers){
    savedPassword = listOfUsers[key];
    if (key === enterLogin) {
      checkPassword();
    } else {
      while (!(enterLogin in listOfUsers)){
        if (confirm(`не существующий логин. Создать пользователя ${enterLogin}`)) {
          let enterNewPassword = prompt('введите новый пароль', '')
          listOfUsers[enterLogin] = `${enterNewPassword}`;
          return checkLogin();
        } else break;
        }
    }
  }
}
 

function checkPassword () {
  enterPass = enterPassFunc()
  if (enterPass !== savedPassword){
    let askRepeatPass = confirm('Пароль неправильный. Попробовать еще раз?')
    if (askRepeatPass) {
      checkPassword();
    } else {
      console.log('вы не ввели пароль')
    }
  } else {
    console.log('пароль и логин верны');
  }
}
