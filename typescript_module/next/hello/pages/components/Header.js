import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <Link href="/home">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>

        </div>
    )
}

export default Header;
