import React from "react";
import "./Loginscreen.css";
import { useState } from "react";
import SignUpScreen from "./SignUpScreen";

function Loginscreen() {
  const [signIn, setsignIn] = useState(false);
  return (
    <div className="loginscreen">
      <div className="loginscreen_background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="login_logo"
        />
        <button onClick={() => setsignIn(true)} className="login_button">
          signup
        </button>

        <div className="login_gradinet"></div>

        <div className="login_body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1> Unlimited flims , Tv programs and much more </h1>
              <h2>Watch anywhere.Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>

              <div className="login_input">
                <form action="">
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setsignIn(true)}
                    className="login_start"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
