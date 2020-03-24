import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import profileErrorsReducer from './profile_errors_reducer';
import companyErrorsReducer from './company_errors_reducer';
import jobErrorsReducer from './job_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  profile: profileErrorsReducer,
  company: companyErrorsReducer,
  job: jobErrorsReducer
});