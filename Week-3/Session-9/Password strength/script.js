const isStrongPassword = (password) => {
    let uppercaseRegex = /[A-Z]/;
    const conditions = password.length > 8 && !password.includes('password') && uppercaseRegex.test(password);
    if (!conditions) {
        return false;
    }
    return true;
};
