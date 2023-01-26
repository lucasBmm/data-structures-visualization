import React from 'react';
import './Footer.scss';

export function Footer() {
    return (
        <footer>
            <div>
                <p>Copyright © {new Date().getFullYear()} Lucas Bomfim</p>
            </div>
        </footer>
    );
}