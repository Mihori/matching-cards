import React from 'react';

const GameInfo = ({ tryCount, bestResult }) => {

  return (
    <div className='game-info'>
      <span style={{ color: '#6d6d6d', marginRight: '4px' }}>Current tries:</span> <span>{tryCount}</span>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ color: '#6d6d6d' }}>
          Best:
            </span>
        <span style={{ fontSize: '30px', alignSelf: 'center' }}>
          {bestResult}
        </span>
      </div>
    </div>
  )
};

export default GameInfo;
