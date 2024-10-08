export const passwordValidator = (password: string) => {
    if (!password || password.length <= 0)
        return (
            'Password cannot be empty.'
        );
    return '';
};

export const usernameValidator = (name: string) => {
    if (!name || name.length <= 0)
        return (
            'Username cannot be empty.'
        );
    return '';
};

export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Email address is not valid';

    return ';'
}
