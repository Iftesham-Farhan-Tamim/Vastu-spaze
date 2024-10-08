import React, { useState } from 'react';
import logo from "../assets/logo.webp";
import { RiCloseLine } from '@remixicon/react';
import { RiMenu3Line } from '@remixicon/react';
import { LINKS } from "../constants";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (event, link) => {
        event.preventDefault();
        const targetId = link.replace("#", ""); // Removing the '#' from the link
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Adjust offset for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
        setIsOpen(false); // Close the mobile menu after scrolling
    };

    return (
        <nav className='border-b-2'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-8'>
                <div className='md:pl-8 pl-3'>
                    <a href="#">
                        <img src={logo} alt="VastuSpaze" width={150} height={15} />
                    </a>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-2xl pr-3 focus:outline-none'
                        aria-label={isOpen ? "Close menu" : "Open menu"}>
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex space-x-8 md:space-x-4 pr-8'>
                    {LINKS.map((link, index) => (
                        <a key={index} href={link.link} className='uppercase text-sm font-medium'
                            onClick={(e) => handleScroll(e, link.link)}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}>
                {LINKS.map((link, index) => (
                    <a key={index} href={link.link} className='uppercase text-lg font-medium block py-2 tracking-wide'
                        onClick={(e) => handleScroll(e, link.link)}>
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
