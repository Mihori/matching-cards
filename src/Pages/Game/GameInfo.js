import React from 'react';
import NewGameButton from '../../Utils/Components/NewGameButton';

const GameInfo = ({ tryCount, bestResult }) => {
  return (
    <div className='game-info-container'>
      <div className='game-info'>
        <div>
          <span className='game-info-text'>Current tries:</span>
          <span className='try-count-number'>{tryCount}</span>
        </div>
        <div className='best-result-container'>
          <span className='game-info-text' style={{ marginRight: '0px' }}>Best:</span>
          <span className='best-result-number'>{bestResult}</span>
        </div>
        <NewGameButton text='restart' />
      </div>
    </div>
  );
};

export default GameInfo;
