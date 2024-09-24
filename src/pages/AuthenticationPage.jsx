import React, { useState } from 'react';
import './Auth.css';
import BackgroundVideo from '../components/Background';
import borderPhoto1 from '../assets/border.png'
import borderPhoto2 from '../assets/borderPhoto2.png'
import logoPhoto from '../assets/Logo.png'

const AuthenticationPage = () => {
    const [lobbyId, setLobbyId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Lobby ID:', lobbyId);
        console.log('Password:', password);
    };

    return (
        <div className='h-screen overflow-hidden'>
          <img src={logoPhoto} alt="" className='absolute z-10 h-[19%] top-[5%] left-[8%] lg:left-[9%] xl:h-[20%] xl:left-[10%] xl:top-[8%]'/>
            <div className="contain flex justify-center items-center h-screen">
                <BackgroundVideo/>
                <img src={borderPhoto1} alt="" className='hidden md:block absolute rotate-0 h-[95%] w-[98%] '/>
                <img src={borderPhoto2} alt="" className='block md:hidden absolute rotate-0 h-[95%] w-[98%] '/>
                <form onSubmit={handleSubmit} className='relative w-[60%] h-[30%] flex flex-col sm:w-[39%] md:h-[31%] md:w-[35%] justify-around items-center lg:w-[30%] lg:h-[37%] xl:w-[23%]'>
                    <input type="text" placeholder="LOBBY ID" value={lobbyId}onChange={(e) => setLobbyId(e.target.value)}className="custom-input p-[3%] w-[100%] h-[20%] rounded-2xl text-center text-[100%] font-solo_extra_italic text-red-600 placeholder-red-600 text-stroke md:text-2xl xl:text-3xl"/>
                    <input type="password" placeholder="PASSWORD" value={password}onChange={(e) => setPassword(e.target.value)}className="custom-input p-[3%] w-[100%] h-[20%] rounded-2xl text-center text-[100%] font-solo_extra_italic text-red-600 placeholder-red-600 text-stroke md:text-2xl xl:text-3xl"/>
                    <input type="submit" value="LOGIN" className='p-[3%] w-[100%] h-[20%] rounded-2xl bg-red-600 text-[110%] text-center font-battle_star cursor-pointer md:text-2xl xl:text-3xl'/>
                </form>
            </div>
        </div>
    );
};

export default AuthenticationPage;
