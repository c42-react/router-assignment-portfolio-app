import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioList = () => (
    <div>
        <h2>These are some of my works -</h2>
        <ul>
            <li><Link to="/portfolio/One">Project One</Link></li>
            <li><Link to="/portfolio/Two">Project Two</Link></li>
            <li><Link to="/portfolio/Three">Project Three</Link></li>
        </ul>
    </div>
);

export default PortfolioList;