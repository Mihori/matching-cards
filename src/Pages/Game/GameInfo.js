import React from 'react';
import NewGameButton from '../../Utils/Components/NewGameButton';

const GameInfo = ({ tryCount, bestResult }) => {

  return (
    <div style={{ display: 'flex'}}>
    <div className='game-info'>
      <div>
        <span style={{ color: '#6d6d6d', marginRight: '4px' }}>Current tries:</span>
        <span style={{ fontSize: '20px' }}>{tryCount}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
        <span style={{ color: '#6d6d6d' }}>
          Best:
            </span>
        <span style={{ fontSize: '30px', alignSelf: 'center' }}>
          {bestResult}
        </span>
      </div>
      <NewGameButton text='restart' />
    </div>
    </div>
  )
};

export default GameInfo;
