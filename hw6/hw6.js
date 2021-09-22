const login = prompt('Введите Ваш логин', 'login');
const password = prompt('Введите Ваш пароль', 'password');
if (login !== "user name"){
    console.log('Неправильный логин')
} else if (login === "user name" && password === "1111"){
    console.log('пароль и логин верные');
} else if (login === "user name" && password !== "1111"){
    if (confirm('Пароль неправильный. Повторите Ваш пароль?')) {
        while (password) {
            const password = prompt('Введите Ваш пароль', 'password');
            if (password === "1111") {
                console.log('пароль и логин верные');
                break;
            } else if (!password) {
                console.error('Неправильный пароль');
                break;
            }
        }
    } else {
        console.error('Неправильный пароль');
    };
}
