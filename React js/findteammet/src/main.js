import {auth} from './firebase';
const Main = ()=>{
	const logout = ()=>{
		auth.signOut();
	}
	return(
		<div>
			Welcome 
			{
				auth.currentUser.email
			}
			 
			<button onClick={logout}>
				Logout
			</button>
		</div>
	)
}
export default Main;
