function login(data) {
    const {email, pass} = data;
    return new Promise((resolve, reject) => {
        if (localStorage.token) {
            resolve(true);
        }

        pretendRequest(email, pass).then((data) => {
                localStorage.token = data.token;
                localStorage.email = email;
                resolve(true);
            }
        ).catch(() => {
            console.log("about to reject!");
            reject(false);
        });
    })
}

function logout() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            delete localStorage.token;
            delete localStorage.email;
            resolve(true);
        }, 1000)
    });

}

function loggedIn() {
    return (localStorage.token && localStorage.email) ? {token: localStorage.token, email: localStorage.email} : false;
}

function pretendRequest(email, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@example.com' && pass === '12345') {
                resolve({
                    authenticated: true,
                    token: Math.random().toString(36).substring(7)
                })
            } else {
                reject({authenticated: false})
            }
        }, 1000)
    })
}

module.exports = {
    login,
    loggedIn,
    pretendRequest,
    logout
};

