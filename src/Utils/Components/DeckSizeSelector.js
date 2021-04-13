import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deckSizeValues, setDeckSize } from '../../App/appStore';

const DeckSizeSelector = () => {
  const dispatch = useDispatch();
  const appState = useSelector(state => state);
  const deckSize = useSelector(state => state.deckSize);

  const onDeckSizeChange = (newSize) => {
    window.localStorage.setItem('memoryGameState', JSON.stringify({
      ...appState,
      deckSize: newSize
    }))
    dispatch(setDeckSize(newSize));
  }

  return (
    <select className='input' name='deck-size-selector' value={deckSize} onChange={(event) => onDeckSizeChange(event.target.value)}>
      {deckSizeValues.map((number, index) => <option key={index}>{number}</option>)}
    </select>
  )
};

export default DeckSizeSelector;
