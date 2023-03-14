import axios from 'axios'
const signup = async (user) => {
    const URL = "http://localhost:8000/auth/signup?" + "name="+user.name + "&email="+user.email+"&password="+user.password;
    const res = await axios.post(URL)

    if(res.data)
        localStorage.setItem('user',JSON.stringify(res.data));
    return res.data;
}


export const AuthService = {
    signup : signup
    // add login
}



