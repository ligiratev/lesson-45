import React from 'react';

function About({ info }) {
    return (
        <div>
            <h1>{info.title}</h1>
            <p>{info.body}</p>
        </div>
    );
}

export default About;