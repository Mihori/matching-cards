import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeckSize } from '../../App/appStore';

const deckSizeValues = [6, 8, 10, 12, 14, 16, 18, 20];

const DeckSizeSelector = () => {
  const dispatch = useDispatch();
  const deckSize = useSelector(state => state.deckSize);

  return (
    <select className='input' name='deck-size-selector' value={deckSize} onChange={(event) => dispatch(setDeckSize(event.target.value))}>
      {deckSizeValues.map((number, index) => <option key={index}>{number}</option>)}
    </select>
  )
};

export default DeckSizeSelector;
