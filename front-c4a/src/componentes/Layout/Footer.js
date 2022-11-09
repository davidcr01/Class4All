import { GpsFixed } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    const style = {
        textAlign: "center",
        backgroundColor: "darkgray",
        height: "auto",
        padding: "15px 15px",
        width: "100%",
        position: "fixed",
        bottom: "0"
    }
    return (
        <div className="footer" style={style}>
            Class4All © 2022-2022 All rights reserved.
        </div>
    );
}

export default Footer;