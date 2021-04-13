import { createReducer } from '@reduxjs/toolkit';

export const deckSizeValues = [6, 8, 10, 12, 14, 16, 18, 20];

const defaultBestResults = deckSizeValues.reduce((deckSizeObject, currentDeckSize) => {
  return ({ ...deckSizeObject, [currentDeckSize]: undefined})
}, {})

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

const SET_TRY_COUNT = 'APP/SET_TRY_COUNT';
export const setTryCount = (tryCount) => {
  return {
    type: SET_TRY_COUNT,
    tryCount,
  };
};
const setTryCountReducer = (state, action) => {
  return {
    ...state,
    tryCount: action.tryCount,
  };
};

const SET_BEST_RESULT = 'APP/SET_BEST_RESULT';
export const setBestResult = (bestResult) => {
  return {
    type: SET_BEST_RESULT,
    bestResult,
  };
};
const setBestResultReducer = (state, action) => {
  return {
    ...state,
    bestResult: action.bestResult,
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

const SET_SOLVED_CARDS = 'APP/SET_SOLVED_CARDS';
export const setSolvedCards = (solvedCards) => {
  return {
    type: SET_SOLVED_CARDS,
    solvedCards,
  };
};
const setSolvedCardsReducer = (state, action) => {
  return {
    ...state,
    solvedCards: action.solvedCards,
  };
};

const SET_APP_STATE = 'APP/SET_APP_STATE';
export const setAppState = (appState) => {
  return {
    type: SET_APP_STATE,
    appState,
  };
};
const setAppStateReducer = (state, action) => {
  return {
    ...state,
    ...action.appState,
  };
};

export const initialState = () => {
  const initialState = {
    deckSize: 20,
    tryCount: 0,
    bestResult: defaultBestResults,
    cards: [],
    revealedCardIndices: [],
    solvedCards: []
  };

  return initialState;
};

const reducers = {
  [SET_DECK_SIZE]: setDeckSizeReducer,
  [SET_TRY_COUNT]: setTryCountReducer,
  [SET_BEST_RESULT]: setBestResultReducer,
  [SET_CARDS]: setCardsReducer,
  [SET_REVEALED_CARD_INDICES]: setRevealedCardIndicesReducer,
  [SET_SOLVED_CARDS]: setSolvedCardsReducer,
  [SET_APP_STATE]: setAppStateReducer,
};

const appStore = createReducer (initialState(), reducers);

export default appStore;
