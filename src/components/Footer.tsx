import React from "react";
import '../assets/styles/Footer.scss'

function Footer() {
    return (
        <footer>
            <div>
                <p>{new Date().getFullYear()} Nikita Rykhlov. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;