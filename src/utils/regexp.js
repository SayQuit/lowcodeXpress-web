export const passwordRegExp = (password) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[\S]{8,16}$/;
    if (pattern.test(password)) return true
    else return false
}

export const usernameRegExp = (username) => {
    const pattern = /^[^\s]{1,10}$/;
    if (pattern.test(username)) return true
    else return false
}

export const accountRegExp = (account) => {
    const pattern = /^[1-9]\d{4,14}$/;
    if (pattern.test(account)) return true
    else return false
}