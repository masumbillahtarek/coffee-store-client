import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'
const Header = () => {
    return (
        <div>
            <nav className='w-72 flex justify-between text-2xl font-bold text-black mx-auto my-12 items-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/addCoffee">Add Coffee</NavLink>
            </nav>
        </div>
    );
};

export default Header;