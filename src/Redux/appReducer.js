import {UPDATE_APP_STATE, UPDATE_BULK_APP_STATE} from './types';

const appReducer = (
  state = {
    appLoading: false,
    appToast: false,
    appLoadingMessage: '',
    appToastMessage: '',
    appToastType: 'primary',
    appLanguage: 'EN',
    userData: null,
    tempWorkerData: [],
    jobStarted: false,
    currentJob: {
      en_name: '',
      sp_name: '',
    },
    timer: 0,
  },
  action,
) => {
  switch (action.type) {
    case UPDATE_APP_STATE: {
      const {name, value} = action.payload;
      let newState = {...state, [name]: value};
      if (name === 'timer' && value === 1) {
        newState = {...state, [name]: state['timer'] + 1};
      }
      return newState;
    }
    case UPDATE_BULK_APP_STATE: {
      const {values} = action.payload;
      const newState = {...state, ...values};
      return newState;
    }
    default:
      return state;
  }
};

export default appReducer;
