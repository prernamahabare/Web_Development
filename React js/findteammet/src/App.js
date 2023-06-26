// import {Githubprovider, Googleprovider} from './firebase';
// import socialmedia from './auth'


// function App() {
//   const handelonclick = async (provider) =>{
//     const res = await socialmedia(provider)
//     console.log(res);
//   }

// return (
//   <>
// 	<h1>hii</h1>
//   <button onClick={()=>handelonclick(Githubprovider)}>Github</button>
//   <button onClick={()=>handelonclick(Googleprovider)}>Google</button>

//   </>
// );
// }

// export default App;
import './App.css';
import Login from './login';
import {auth} from './firebase';
import Main from './main';
import {useAuthState} from 'react-firebase-hooks/auth';
function App() {
const [user] = useAuthState(auth);
return (
	user ? <Main/> : <Login/>
);
}

export default App;
