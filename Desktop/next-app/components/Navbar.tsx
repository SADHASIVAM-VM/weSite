"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between mx-5 md:mx-20 items-center h-16 border-b shadow-md bg-white px-5'>
            <div className="logo">
                <h1 className='text-xl font-bold'>We45</h1>
            </div>
            
            <div className="hidden md:flex gap-4 items-center justify-around">
                <ul className='flex gap-4'>
          
                        <li>
                            <Link href="#service"> Services</Link></li>
                        <li> <a href="#media">Media</a></li>
                        <li> <a href="#cases">Cases</a></li>
                        <li> <a href="#faq">FAQ</a></li>
                        <li> <a href="#contact">Contacts</a></li>
                </ul>
                <div className="flex gap-2 text-green-500 text-sm">
                <p className='flex items-center gap-2'><img 
                src="/Svgs/phone.svg" alt="" className='w-4'/>91+ 8903859003</p>
                <p className='flex items-center gap-2'><img src="Svgs/mail.svg" alt="" className='w-4'/>we45@gmail.com</p>
                </div>
            </div>
            
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <img src={isOpen ? "/Svgs/cross.svg" : "Svgs/menu.svg"} alt="Menu" className='w-7' />
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-t shadow-md md:hidden">
                    <ul className='flex flex-col gap-4 p-5'>
                        <li>
                            <a href="#service"> Services</a></li>
                        <li> <a href="#media">Media</a></li>
                        <li> <a href="#cases">Cases</a></li>
                        <li> <a href="#faq">FAQ</a></li>
                        <li> <a href="#contact">Contacts</a></li>
                    </ul>
                    <div className="flex flex-col gap-2 text-green-500 text-sm p-5 border-t">
                        <p className='flex items-center gap-2'><img src="Svgs/mail.svg" alt="" className='w-4'/>91+ 8903859003</p>
                        <p className='flex items-center gap-2'><img src="Svgs/mail.svg" alt="" className='w-4'/>we45@gmail.com</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
