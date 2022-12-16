import React from 'react';
import '../styles/rows.css'

const Rows = ({ list, title }) => {
    return (
        <>
            <p className='rowTitle'>{title}</p>
            <div className='rows'>
                {list.map((video, index) => {
                    const background = { backgroundImage: `url(${video.image})` }
                    return (
                        <button className='row' key={index} style={background}></button>
                    )
                })}
            </div>
        </>
    );
};

export default Rows;
