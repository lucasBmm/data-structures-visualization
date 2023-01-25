import React, { PropsWithChildren } from 'react';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';

export function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            { children }
            <Footer />
        </>
    )
}