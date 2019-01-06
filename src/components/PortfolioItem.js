import React from 'react';

const PortfolioItem = (props) => (
    <div>
        This page tells more about Project {props.match.params.projectname}
    </div>
);

export default PortfolioItem;