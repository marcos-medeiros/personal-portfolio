import Types from './types';

const changeTab = (tab = null) => ({
  type: Types.CHANGE_TAB,
  tab,
});

export default changeTab;
