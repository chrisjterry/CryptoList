import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import profileExperiencesReducer from './profile_experiences_reducer';
import profileProjectsReducer from './profile_projects_reducer';
import profileEducationsReducer from './profile_educations_reducer';
import companiesReducer from './companies_reducer';
import companyEmployeesReducer from './company_employees_reducer';
import companyPerksReducer from './company_perks_reducer';
import companyInvestorsReducer from './company_investors_reducer';
import jobsReducer from './jobs_reducer';

export default combineReducers({
    users: usersReducer,
    profiles: profilesReducer,
    profileExperiences: profileExperiencesReducer,
    profileProjects: profileProjectsReducer,
    profileEducations: profileEducationsReducer,
    companies: companiesReducer,
    companyEmployees: companyEmployeesReducer,
    companyPerks: companyPerksReducer,
    companyInvestors: companyInvestorsReducer,
    jobs: jobsReducer
});