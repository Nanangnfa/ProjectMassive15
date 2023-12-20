import React from 'react';

function Hero({ height = '87vh', background, title, description, imgSrc }) {
    return (
        <div className='heroImage'
        style={{
            background: background ? `url(${background})` : 'url("./../assets/Rectangle.png")',
            height: height,
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundSize: 'cover',
            padding: '20px',
        }}  
        >
        <div style={{ width: '80%', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
            <div className='helo' style={{ textAlign: 'left' }}>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            <div>
            <img
                src={imgSrc || './../assets/mockup.png'}
                alt="Logo"
                style={{ width: 'auto', height: 'auto' }}
            />
            </div>
        </div>
        </div>
    );
}

export default Hero;


