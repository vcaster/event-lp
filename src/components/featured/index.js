import React from 'react';
import Carrousel from './Carrousel';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Burna<br></br> Boy
                </div>
            </div>
            
        </div>
    );
};

export default Featured;