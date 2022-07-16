import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logos/logo.png';

const Header = () => {
    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/our-portfolio'>Our Portfolio</Link></li>
    <li><Link to='/our-team'>Our Team</Link></li>
    <li><Link to='/contact'>Contact Us</Link></li>
    </>
    return (
        <header className='bg-primary' >
            <div class="navbar  container bg-primary text-black lg:px-20">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl"><img className='w-[150px]' src={logo} alt="" /></Link>
                </div>

                <div class="navbar-end">
                    <ul class="menu menu-horizontal  hidden lg:inline-flex mr-2">
                        {menuItems}
                    </ul>
                    <Link to='login' class="btn btn-secondary px-10 text-white">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;