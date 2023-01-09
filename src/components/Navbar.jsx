import React, {useEffect, useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UseProfile, UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button 
      type="button" 
      onClick={(customFunc)} 
      style={{color}}
      className="relative text-xl rounded-full p-3 hover::bg-light-gray"
    >
      <span style={{background: dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize} = useStateContext();

  // tracks the width of the screen
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    // in react when we add a event listener we need to remove the event listener like this
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // tracking the resize of the browser, turns Menu component off is screen size is <= 900px
  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    }
    else {
      setActiveMenu(true);
    }
  }, [screenSize])
  
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu/>}/>

      <div className='flex'>
        <NavButton 
          title="Cart" 
          customFunc={() => {}} 
          color="blue" 
          icon={<FiShoppingCart/>}
        />

        <NavButton 
          title="Chat" 
          dotColor="#03C9D7"
          customFunc={() => {}} 
          color="blue" 
          icon={<BsChatLeft/>}
        />

        <NavButton 
          title="Notifications" 
          customFunc={() => {}} 
          color="blue" 
          icon={<RiNotification3Line/>}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => {}}
          >
            <img 
              className='rounded-full w-8 h-8'
              src={avatar}
            />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chart && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
        
      </div>
      
    </div>
  )
}

export default Navbar
