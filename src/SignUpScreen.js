import React ,{useRef}from 'react'
import { auth } from './firebase';
// import { auth } from './firebase';
import './SignUpScreen.css'

export default function SignUpScreen() {

    const emailref=useRef(null);
    const passref=useRef(null);



    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword( 
            emailref.current.value,
            passref.current.value
        ).then((authUser)=>{
            console.log(authUser)

        }).catch((error) =>{
            alert(error.message);
        });
    };

    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passref.current.value
        ).then((authUser)=>{
            console.log(authUser)

        }).catch((error) =>{
            alert(error.message);
        } );
    }


    return (
        <div className="SignUpScreen">
             <form >
                 <h1>Sign In</h1>
                 <input ref={emailref} type="email" placeholder='Email' />
                 <input ref={passref} type="password" placeholder='password' />
                 <button className="signup_button" type='submit' onClick={signIn}> Sign in</button>
                 <h4>
                     <span className="signup_sp">New to Netflix? </span>
                     <span className="signup_li" onClick={register}> Sign Up now</span> </h4>

             </form>

        </div>

        
    )
}
