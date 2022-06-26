import React from "react";
import "./Footer.css"

function Footer(props) {
    return (
        <footer className="Footer">
            <a href="https://bit.ly/3NRAxoE" target="_blank" rel="noreferrer">
                <span className="icon-linkedin Footer__social"></span>
            </a>
            <a href="https://bit.ly/3HSZheA" target="_blank" rel="noreferrer">
                <span className="icon-github Footer__social"></span>
            </a>
        </footer>
    );
}

export { Footer };
