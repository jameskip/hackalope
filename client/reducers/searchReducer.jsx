const searchReducer = (state = {term: '', language: 'JavaScript'}, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return (Object.assign({}, state, action.search));
    case 'CLEAR_SEARCH':
      return state = {term: '', language: 'JavaScript'};
    default:
      return state;
  }
}

export default searchReducer;
