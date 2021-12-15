//1
fetch('https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50')
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.text()
    })
    .then((response) => {
        console.log('Hello, world '.repeat(response))
    })

    .catch((error) => {
        console.error(error)
    })


async function randomNumber() {
    try {
        const response = await fetch('https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const value = await response.text();
        console.log('Hello, world '.repeat(value))

    } catch (err) {
        console.error(err);
    }
}
randomNumber()



//2.1
function userFetch(...args) {
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                return response.text()
                    .then((errMessage) => {
                        throw new Error(errMessage);
                    });
            }
            return response;
        });
}

const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
};
let id;
userFetch('https://async-demo.herokuapp.com/objects/?prob=20', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        ({
            id
        } = response);
        return userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                age: 33
            })
        });
    })
    .then((response) => {
        return response.json();
    })
    .then(() => {
        return userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
            method: 'DELETE'
        })
    })
    .then(() => {
        console.log(`${id} was deleted`);
    })
    .catch((err) => {
        console.log(err.message);
    });


//2.2
function userFetch(...args) {
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                return response.text()
                    .then((errMessage) => {
                        throw new Error(errMessage);
                    });
            }
            return response;
        });
}

async function sendRequest() {
    try {
        const response = await userFetch('https://async-demo.herokuapp.com/objects/?prob=20', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
        const result = await response.json();
        const {
            id
        } = await result;
        const changeResponse = await userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                age: 33
            })
        });
        await changeResponse.json();
        await userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
            method: 'DELETE'
        })
        await console.log(` ${id} was deleted`);
    } catch (err) {
        console.log(err);
    }
}

sendRequest();