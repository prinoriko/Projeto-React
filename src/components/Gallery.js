import React from 'react';
import ReactDOM from 'react-dom/client';

function Profile(){
    return (
        <img
            scr="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}
export default function Gallery(){
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}