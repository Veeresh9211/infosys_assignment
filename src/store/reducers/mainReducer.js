import {combineReducers} from 'redux';
import CaseReducer from './caseReducer';
import TestReducer from './testReducer';

  const mainReducer = combineReducers({
      case: CaseReducer,
      test: TestReducer
  })

export default mainReducer;