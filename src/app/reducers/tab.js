import Types from '../actions/types';

const tab = (state = null, { type, tab }) => {
  switch (type) {
    case Types.CHANGE_TAB:
      return tab;
    default:
      return state;
  }
};

export default tab;
