import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import Nav from './Nav'
import './ProfileScreen.css'

function ProfileScreen() {
    const usus =useSelector(selectUser)


    return (
     <div className="profile">
         <Nav />

         <div className="profile_body">
             <h1>Edit Profile</h1>
             <div className="profile_info">
                 <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"  
                 alt="" />
                 <div className="profile_detial">
                     <h2>user id: {usus.uid}</h2>
                     <div className="profile_plan">
                         <h3>Plans(Current plan : premiun)</h3>
                         <p>renewal date 04/03/2022</p>
                         <br/>
                         <span>
                             Netflix standard<br/> 1080p
                             <button className='btn_btn'>subscribe</button>
                             </span>
                         <br/>
                         <br/>
                         <span>
                             Netflix basic<br/>
                             720pp
                             <button className='btn_btn'>subscribe</button>
                             
                         </span>
                         <br/><br/>

                         <span>
                             Netflix premiun<br/>
                             4k
                             <button className='btn_btn'>subscribe</button>
                             
                         </span>
                         
                         <button onClick={()=>auth.signOut()} className="profile_signout">Sign Out</button>
                     </div>

                 </div>
             </div>
         </div>


     </div>
    )
}

export default ProfileScreen
