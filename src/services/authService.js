import RequestManager from "./RequestManager";

const Login = async (username, password) => {
    const response = await RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/auth/login`,
        body: {
            username,
            password
        }
    });

    if (!response.error) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', response.data.userName);
        return true;
    }

    return false;
}

const Logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
};

const AuthService = {
    Login,
    Logout
};

export default AuthService;