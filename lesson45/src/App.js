import React from 'react';
import './App.css';

function Title() {
    return <h2>I am title</h2>;
}

function Header() {
    return (
        <div>
            <Title />
            <h2>I am header</h2>
        </div>
    );
}

function Content() {
    return (
        <div>
            <Title />
            <h2>I am content</h2>
        </div>
    );
}

function Footer() {
    return (
        <div>
            <Title />
            <h2>I am footer</h2>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;