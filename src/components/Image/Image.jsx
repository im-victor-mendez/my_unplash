import './Image.scss'

import React, { useState } from 'react'

function Image({ uid, url, label }) {
    const [image, setImage] = useState({ width: undefined, height: undefined })

    function onLoad(event) {
        const target = event.target
        const width = target.naturalWidth
        const height = target.naturalHeight
        setImage({width, height})
    }

  return (
    <div className='image' style={{
        backgroundImage: `url(${url})`,
        backgroundSize: `100% ${image.height}px`,
        width: `${image.width}px`,
        height: `${image.height}px`
    }}>
        <img onLoad={onLoad} src={url} alt={`Image ${uid}`} />

        <div className='image-content'>
            <button>Delete</button>
            <p>{label}</p>
        </div>
    </div>
  )
}

export default Image