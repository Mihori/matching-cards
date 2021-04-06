import { createReducer } from '@reduxjs/toolkit';

const SET_DECK_SIZE = 'APP/SET_DECK_SIZE';
export const setDeckSize = (deckSize) => {
  return {
    type: SET_DECK_SIZE,
    deckSize,
  };
};
const setDeckSizeReducer = (state, action) => {
  return {
    ...state,
    deckSize: action.deckSize,
  };
};

const SET_CARD_CLICK = 'APP/SET_CARD_CLICK';
export const setCardClick = (cardClick) => {
  return {
    type: SET_CARD_CLICK,
    cardClick,
  };
};
const setCardClickReducer = (state, action) => {
  return {
    ...state,
    cardClick: action.cardClick,
  };
};

const SET_CURRENT_TRIES = 'APP/SET_CURRENT_TRIES';
export const setCurrentTries = (currentTries) => {
  return {
    type: SET_CURRENT_TRIES,
    currentTries,
  };
};
const setCurrentTriesReducer = (state, action) => {
  return {
    ...state,
    currentTries: action.currentTries,
  };
};

const SET_LEAST_FAILURES_RECORD = 'APP/SET_LEAST_FAILURES_RECORD';
export const setLeastFailuresRecord = (leastFailuresRecord) => {
  return {
    type: SET_LEAST_FAILURES_RECORD,
    leastFailuresRecord,
  };
};
const setLeastFailuresRecordReducer = (state, action) => {
  return {
    ...state,
    leastFailuresRecord: action.leastFailuresRecord,
  };
};

const SET_CARDS = 'APP/SET_CARDS';
export const setCards = (cards) => {
  return {
    type: SET_CARDS,
    cards,
  };
};
const setCardsReducer = (state, action) => {
  return {
    ...state,
    cards: action.cards,
  };
};

const SET_REVEALED_CARD_INDICES = 'APP/SET_REVEALED_CARD_INDICES';
export const setRevealedCardIndices = (revealedCardIndices) => {
  return {
    type: SET_REVEALED_CARD_INDICES,
    revealedCardIndices,
  };
};
const setRevealedCardIndicesReducer = (state, action) => {
  return {
    ...state,
    revealedCardIndices: action.revealedCardIndices,
  };
};

const SET_REVEALED_CARD_TYPES = 'APP/SET_REVEALED_CARD_TYPES';
export const setRevealedCardTypes = (revealedCardTypes) => {
  return {
    type: SET_REVEALED_CARD_TYPES,
    revealedCardTypes,
  };
};
const setRevealedCardTypesReducer = (state, action) => {
  return {
    ...state,
    revealedCardTypes: action.revealedCardTypes,
  };
};

const initialState = () => {
  const initialState = {
    deckSize: 20,
    currentTries: 0,
    leastFailuresRecord: 0,
    cardClick: 0,
    cards: [],
    revealedCardIndices: [],
    solvedCardTypes: []
  };

  return initialState;
};

const reducers = {
  [SET_DECK_SIZE]: setDeckSizeReducer,
  [SET_CURRENT_TRIES]: setCurrentTriesReducer,
  [SET_LEAST_FAILURES_RECORD]: setLeastFailuresRecordReducer,
  [SET_CARD_CLICK]: setCardClickReducer,
  [SET_CARDS]: setCardsReducer,
  [SET_REVEALED_CARD_INDICES]: setRevealedCardIndicesReducer,
  [SET_REVEALED_CARD_TYPES]: setRevealedCardTypesReducer,
};

const appStore = createReducer (initialState(), reducers);

export default appStore;
