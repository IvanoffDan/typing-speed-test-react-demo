function login(data) {
    const {email, pass} = data;
    return new Promise((resolve, reject) => {
        if (localStorage.token) {
            resolve(true);
        }

        pretendRequest(email, pass).then((data) => {
                localStorage.token = data.token;
                resolve(true);
            }
        ).catch((err)=>{
            reject(false);
        });
    })
}

function getToken() {
    return localStorage.token
}

function logout(cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false)
}

function loggedIn() {
    return !!localStorage.token
}

function pretendRequest(email, pass){
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
    logout,
    getToken
};

