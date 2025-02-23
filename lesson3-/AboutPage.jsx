import React from 'react';
import style from './aboutPage.module.css';
import { clsx } from "clsx";

function AboutPage() {
    console.log('AboutPage');
    return (
        <div>
            <h2 className={clsx(style.title, 'test')}>About page</h2>
        </div>
    );
}

export default AboutPage;