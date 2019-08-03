import React from 'react';
import './Song.css';

function Song() {
    return(
        <div className="theme-song">
            <iframe 
                title="song" 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/ESLyCcQH8Nc?start=6" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
        </div>
    )
}

export default Song