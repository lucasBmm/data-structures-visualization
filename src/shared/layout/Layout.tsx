import React, { PropsWithChildren } from 'react';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import './Layout.scss';

export function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <div className='children_container'>
                { children }
            </div>
            <Footer />
        </>
    )
}