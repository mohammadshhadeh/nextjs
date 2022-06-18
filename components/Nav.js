import React from 'react'
import Styles from '../styles/Nav.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className={Styles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
