import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleOAuth() {
    const login = useGoogleLogin({
        onSuccess: async response => {
          try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
              headers: {
                "Authorization": `Bearer ${response.access_token}`
              }
            })
            console.log(res.data)
          } catch(err) {
            console.log(err)
          }  
        }
    });
    return (
      <div class = "oauth">
        <button onClick={login}>
          <i class="fa-brands fa-google"></i>
            Continue with google   
        </button>
      </div>
    );
}

export default GoogleOAuth;

