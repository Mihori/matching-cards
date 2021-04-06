import React from 'react';

const DeckSizeSelector = () => {
  return (
    <select className='input' name='deck-size-selector' onChange={(event) => console.log(event.target.value)}>
      {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((number, index) => <option key={index}>{number}</option>)}
    </select>
  )
};

export default DeckSizeSelector;
