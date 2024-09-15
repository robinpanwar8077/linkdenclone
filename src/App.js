import Navbar from "./components/navbar/Navbar"
import Body from "./components/body/Body";
import LogInSignIn from "./components/loginPage/logInSignIn";
import { useSelector,useDispatch } from 'react-redux'
import { login,logout} from "./features/userDetails/userDetailsSlice"
import {onAuthStateChanged} from "firebase/auth"
import { auth } from "./firebaseConfig";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";


function App() {

  const [isLoading,setIsLoading]=useState(true)


  const dispatch=useDispatch();

  const checkUser= ()=>{
    onAuthStateChanged(auth, (user) => {
      if ( user){
        dispatch(login({
          email: user.email,
          userId: user.uid,
          profileUrl: user.photoURL,
          name: user.displayName,
        }));
      }
      else {
        dispatch(logout());
      }
    })
    

  }

  useEffect(()=>{
    checkUser()
    setIsLoading(false)
  },[])

  const user= useSelector((state)=>state.userDetails.user)

  return (
    <div className="App">
      {isLoading && <LoadingScreen/>}

      {!user && <LogInSignIn/>}
      {user && (
      <>
        <Navbar/> 
        <Body/>
        </>
      )}
    </div>
    

  );
}

export default App;
