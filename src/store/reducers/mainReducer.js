import {combineReducers} from 'redux';
import CaseReducer from './caseReducer';
import TestReducer from './testReducer';
import ThemeReducer from './themeReducer';

  const mainReducer = combineReducers({
      case: CaseReducer,
      test: TestReducer,
      themme: ThemeReducer
  })

export default mainReducer;