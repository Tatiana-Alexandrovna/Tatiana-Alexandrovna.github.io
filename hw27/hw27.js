//1
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');
xhr.send();
xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status <= 299){ 
        console.log('Hello, world '.repeat(xhr.response));
    } else {
        console.log(xhr.response);
    }
})

//2
function sendRequest(
    method,
    url,
    { body, headers = {} } = {},
    callback
) {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(body);
    xhr.addEventListener('load', () => {
        if (xhr.status != 200 && xhr.status != 201 && xhr.status != 204) {
            callback(xhr.response);
        } else {
            callback(null, xhr.response);
        }
    });
}

const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
}

sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=20', {
    body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    }
}, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }    
    let received;
    try {
        received = JSON.parse(response);
    } catch (err) {
        console.error(err);
    }
    const { id } = received; 
    const extension = { age: 33 };

    sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}?prob=20`, {
        body: JSON.stringify(extension),
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        }
    }, (err) => {
        if (err) {
            console.error(err);
            return;
        }        

        sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}?prob=20`, {},
            (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`User №${id} was deleted`);
                }
            });
    });
});

//3
let person1 = {
    firstName: 'Petya',
    lastName: 'Petrov'
}
let person2 = {
    firstName: 'Vanya',
    lastName: 'Ivanov'
}
let person3 = {
    firstName: 'Vasya',
    lastName: 'Vasiliev'
}
function sendRequest(
    method,
    url,
    { body, headers = {} } = {},
    callback
) {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(body);
    xhr.addEventListener('load', () => {
        if (xhr.status != 200 && xhr.status != 201 && xhr.status != 204) {
            callback(xhr.response);
        } else {
            callback(null, xhr.response);
        }
    });
}
sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=5', {
    body: JSON.stringify(person1),
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    }
}, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }    
    let received;
    try {
        received = JSON.parse(response);
    } catch (err) {
        console.error(err);
    }
})

sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=5', {
    body: JSON.stringify(person2),
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    }
}, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }    
    let received;
    try {
        received = JSON.parse(response);
    } catch (err) {
        console.error(err);
    }
})
sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=5', {
    body: JSON.stringify(person3),
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    }
}, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }    
    let received;
    try {
        received = JSON.parse(response);
    } catch (err) {
        console.error(err);
    }
})

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', '/https://async-demo.herokuapp.com/unstable?maxRandom=100&prob=5');
xhr2.send();
xhr2.addEventListener('load', () => {
    if (xhr2.status != 200) {
        console.error(xhr2.response);
    } else {
        console.log(xhr2.response);
    }
});

const xhr3 = new XMLHttpRequest();
xhr3.open('GET', '/https://async-demo.herokuapp.com/unstable?maxRandom=100&prob=5');
xhr3.send();
xhr3.addEventListener('load', () => {
    if (xhr3.status != 200) {
        console.error(xhr3.response);
    } else {
        console.log(xhr3.response);
    }
}); 
const xhr4 = new XMLHttpRequest();
xhr4.open('GET', '/https://async-demo.herokuapp.com/unstable?maxRandom=100&prob=5');
xhr4.send();
xhr4.addEventListener('load', () => {
    if (xhr4.status != 200) {
        console.error(xhr4.response);
    } else {
        console.log(xhr4.response);
    }
});


const xhr5 = new XMLHttpRequest();
xhr5.open('PATCH', `https://async-demo.herokuapp.com/objects/${0}/?prob=5`);
xhr5.setRequestHeader('Content-type', 'application/json; charset=utf-8');
const bodyPerson1 = JSON.stringify({
    age: +xhr2.response,
});
xhr5.send(bodyPerson1);
xhr5.addEventListener('load', () => {
    if (xhr5.status != 200) {
        console.error(xhr5.response);
        return;
    }
    try {
        const receivedP1 = JSON.parse(xhr5.response);
        console.log(receivedP1);
    } catch (err) {
        console.error(err);
    }
});

const xhr6 = new XMLHttpRequest();
xhr6.open('PATCH', `https://async-demo.herokuapp.com/objects/${1}/?prob=5`);
xhr6.setRequestHeader('Content-type', 'application/json; charset=utf-8');
const bodyPerson2 = JSON.stringify({
    age: +xhr2.response,
});
xhr6.send(bodyPerson2);
xhr6.addEventListener('load', () => {
    if (xhr6.status != 200) {
        console.error(xhr6.response);
        return;
    }
    try {
        const receivedP2 = JSON.parse(xhr6.response);
        console.log(receivedP2);
    } catch (err) {
        console.error(err);
    }
});

const xhr6 = new XMLHttpRequest();
xhr6.open('PATCH', `https://async-demo.herokuapp.com/objects/${2}/?prob=5`);
xhr6.setRequestHeader('Content-type', 'application/json; charset=utf-8');
const bodyPerson2 = JSON.stringify({
    age: +xhr2.response,
});
xhr6.send(bodyPerson3);
xhr6.addEventListener('load', () => {
    if (xhr6.status != 200) {
        console.error(xhr6.response);
        return;
    }
    try {
        const receivedP3 = JSON.parse(xhr7.response);
        console.log(receivedP3);
    } catch (err) {
        console.error(err);
    }
});
