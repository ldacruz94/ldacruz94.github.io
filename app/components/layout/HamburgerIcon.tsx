
import { useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";

import './HamburgerIcon.scss'

export const HamburgerIcon = ( {className=""} ) => {

    const [displayMenu, setDisplayMenu] = useState(false);
    
    const handleClick = () => { 
        setDisplayMenu(!displayMenu);
    }

    return (
        <div className={className}>
            <button id='hamburger-menu' className="block" type="button" onClick={handleClick}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            {displayMenu && 
            <div className="menu">
                <HamburgerMenu />
            </div>}
        </div>
    );
}