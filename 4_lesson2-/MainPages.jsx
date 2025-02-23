import React from 'react';
import About from '../../components/about/About';
import Title from '../../components/title/Title';

function MainPage() {
    const info = {
        title: "Some Title",
        body: "Some body"
    };

    return (
        <div>
            <Title text="Hello world" />
            <About info={info} />
        </div>
    );
}

export default MainPage;