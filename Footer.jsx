import React from 'react';

function Footer(){
    const presentYear = new Date().getFullYear()
    return (<footer><p>Copyright {presentYear} Ignite</p></footer>);
}

export default Footer;