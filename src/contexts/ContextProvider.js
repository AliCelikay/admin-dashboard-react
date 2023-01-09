import React, {createContext, useContext, useState} from 'react';
import { Cart } from '../components';

const StateContext = createContext();

const initialState ={
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)

    const handleClick= (clicked) => {
        // spread all the states of the clicked true or false
        setIsClicked({...initialState, [clicked]: true});
    } 

    const [screenSize, setScreenSize] = useState(undefined)
    
    return(
        <StateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
            }}
        >
            {children}
        </StateContext.Provider>

    )
}


export const useStateContext = () => useContext(StateContext); 
