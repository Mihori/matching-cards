import React from 'react';

const GameInfo = ({currentTries, leastFailuresRecord}) => {

  return (
      <div className='game-info'>
        Current Tries: {currentTries}
        Best: {leastFailuresRecord}
      </div>
  )
};

export default GameInfo;
