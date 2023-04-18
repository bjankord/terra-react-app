import React from 'react';

function PageBodyWrapper (props) {
    return (
        <div className="page-body-wrapper">
            {props.children}
        </div>
    );
}

export default PageBodyWrapper;