const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const exist = state.myList.find((item) => item.id === action.payload.id);
      return {
        ...state,
        myList: exist ? state.myList : [...state.myList, action.payload],
      };
    }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case 'SEARCH': {
      const results = [];
      let boolean = false;
      if (action.payload) {
        boolean = true;
        state.trends.concat(state.originals).forEach((item) => {
          if (
            item.title.toLowerCase().charAt(0) ===
              action.payload.toLowerCase().charAt(0) &&
            item.title.localeCompare(action.payload) !== -1
          ) {
            results.push(item);
          }
        });
      }
      return {
        ...state,
        isSearching: boolean,
        resultsList: results,
      };
    }
    default:
      return state;
  }
};

export default reducer;

const str = 'Hello';
console.log(str.toLowerCase().localeCompare('da'));
