import React from 'react';
import "./Homepage.css";
import Logo from "../../assets/images/Catlover.jpg"
import HomeImage from "../../assets/images/homepage.jpg"

const Homepage = () => {
    return (
        <div className='home'>
            <div className='home_top'>
                <div className='home_left'>
                    <img src={HomeImage} alt='homepage_background'></img>
                </div>

                <div className='home_right'>
                    <img className='logo' src={Logo} alt='logo'></img>
                    <h1 className='home_right_title'>Cat lovers are here</h1>
                    <h2 className='home_right_subtitle'>Join Catlover today!</h2>
                    <div className='home_right_buttons'>
                        <button className='btn_primary'>Sign up with Google</button>
                        <button className='btn_primary'>Sign up with Apple</button>
                        <button className='btn_secondary'>Sign up with phone or email</button>
                        <p className='policies'>
                            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                        </p>
                    </div>
                    <div className='home_right_buttons'>
                        <h3>Already have an account?</h3>
                        <button className='btn_primary'>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage