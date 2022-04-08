import React from 'react';
import { useCookies } from 'react-cookie';

export default function CookiesCreation(props) {
    const [cookies, setCookie] = useCookies(['isLoggedIn']);

    // Date
    let date0 = new Date();
    date0.setDate(date0.getDate()+86400);

    return (
        <div>      
            <h1 style={{display:"none"}}>
                {setCookie(props.logIn, "true", { path: '/', expires: date0 })}
                {cookies.isLoggedIn}
            </h1>
        </div>
    );
}