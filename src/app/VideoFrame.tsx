'use client'

import { useState } from 'react';

const VideoFrame = () => {
  const [visible, setVisible] = useState(false);  // visibility state

  // const showElement = () => setVisible(true);
  // const hideElement = () => setVisible(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)} className='font-ubuntu'>{visible ? 'Hide' : 'Show'}</button>
      {visible && 
        <div>
            <iframe 
                src="https://www.videoask.com/frwzqfkss" 
                allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;" 
                width="100%" 
                height="600px" 
                style={{border: 'none', borderRadius: '24px'}} />    
        </div>}
    </div>
  )
}

export default VideoFrame