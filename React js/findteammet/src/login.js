import {auth ,Githubprovider,Googleprovider } from './firebase';
const Login = ()=>{
	// SignIn with GitHub
	const gitsubmit = ()=>{
		auth.signInWithPopup(Githubprovider).catch(alert);
	}
    const googlesubmit = ()=>{
		auth.signInWithPopup(Googleprovider).catch(alert);
	}
	return (
		<div>
			<center>
			<button onClick={gitsubmit}>
				SignIn with Github
			</button>
			</center>
            <center>
			<button onClick={googlesubmit}>
				SignIn with Google
			</button>
			</center>
		</div>
	)
}
export default Login;
