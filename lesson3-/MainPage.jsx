import React from 'react';
import style from './mainPage.module.css'

function MainPage() {


    return (
        <div>
            <h2 className={`${style.title} test`}>Main page</h2>
            <p className={style.subTitle}>Lorem ipsum dolor sit.</p>
        </div>
    );
}

export default MainPage;