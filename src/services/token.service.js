class TokenService {
    setToken(token) {
        localStorage.setItem('token', token);
    }

    setUserId(userId) {
        localStorage.setItem('userId', userId);
    }
    setUserName(userName) {
        localStorage.setItem('useName', userName);
    }
    setUserEmail(userEmail) {
        localStorage.setItem('userEmail', userEmail);
    }

    setUserTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    getUserName() {
        return localStorage.getItem('useName');
    }

    getUserEmail() {
        return localStorage.getItem('userEmail');
    }
    getToken() {
        return localStorage.getItem('token');
    }

    getUserId() {
        return localStorage.getItem('userId');
    }
}

export default new TokenService();