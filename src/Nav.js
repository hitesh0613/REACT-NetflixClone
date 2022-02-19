import React ,{useEffect,useState}from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css'


function Nav() {

    const [Show, handleShow] = useState(false);
    const navigate= useNavigate();

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow(false)
        });
        return()=>{
            window.removeEventListener("scroll")
        };     
    }, []);


    return (
        <div className={`nav ${Show && "nav_black"} `  }>
            <img onClick={()=>navigate('/')}
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="Netlflix" className="nav_logo" />
            <div className='navnav'>
                    <ul className='nav_list' onClick={()=>navigate('/')}>
                        Home
                    </ul>
                    <ul className='nav_list' onClick={()=>navigate('/profile')}>
                        
                        Profile
                    </ul>
                    <ul className='nav_list' >
                        Whislist
                    </ul>
                
            </div>
            
            <img onClick={()=>navigate('/profile')}
             src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
             alt="avtar" className="nav_avtar" />



        </div>
    )
}

export default Nav
