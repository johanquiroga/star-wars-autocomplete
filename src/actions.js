export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_FULFILLED = 'FETCH_CHARACTERS_FULFILLED';

export const fetchCharacters = searchTerm => ({
  type: FETCH_CHARACTERS,
  payload: { searchTerm },
});

export const fetchCharactersFulfilled = payload => ({
  type: FETCH_CHARACTERS_FULFILLED,
  payload,
});
