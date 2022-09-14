import React from 'react';
import "../styles/Loader.css"

const Loader = () => {
    return (
        <div className='position-load'>
            <div className="lds-ellipsis " ><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;