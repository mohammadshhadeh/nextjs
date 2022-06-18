import React from 'react'
import Nav from './Nav';
import Header from './Header';
import Meta from './Meta';
import Styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <Nav />
            <div className={Styles.container}>
                <main className={Styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}
