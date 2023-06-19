import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='logo'>
                    <Link href='/'>logo</Link>
                    </div>
                    <nav>
                        <Link href='/'>Home</Link>
                        <button>book a consultation</button>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
