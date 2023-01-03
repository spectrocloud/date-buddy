import React from 'react';

const SuggestComponent = ({suggestion}) => {
    return (
        <div className='suggestion-display'>
          {
            suggestion? 
            <div>
              <p className='suggestion-text'>{suggestion}</p>
              <text className='subscription-text'>Subscribe to our pro plan if you'd like a more detailed plan.</text>
            </div> :
            <div>
              <p className='eyes'>👈 👀</p>
            </div>
          }
        </div>
    )
}

export default SuggestComponent;